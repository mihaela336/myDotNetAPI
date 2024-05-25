using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Account;
using api.Dtos.Transaction;
using api.Dtos.User;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Azure.Identity;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly CustomAuthService _auth;
        private readonly ApplicationDBContext _context;
        private readonly IUserRepository _userRepo;
        public AccountController(CustomAuthService auth, ApplicationDBContext context, IUserRepository userRepo)
        {
            _auth = auth;
            _context = context;
            _userRepo = userRepo;
        }
        //Get User by id //TODO determine if it should be moved to userController
        [HttpGet("{id:int}")] 
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            //var transaction = await _context.Transactions.FindAsync(id); //before repo refactoring
            var user = await _userRepo.GetByIdAsync(id);
            if (user== null)
            {
                //NotFund is a form of IActionResult
                //it will provide the not found request(?)
                //TODO: learn about IACtionResult
                return NotFound();

            }
            //update after mapper was created
            return Ok(user.ToUserDto());
        }


        [HttpPost("/register")]
        public async Task<IActionResult> Register(RegisterUserDto registerUserDto)
        {
            try
            {                //when registering an user and signining him in 
                // 1 check if all user info is correct
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);
                var userModel = registerUserDto.ToUserFromRegisterDto();
                await _userRepo.CreateAsync(userModel);
                return CreatedAtAction(nameof(GetById), new { id = userModel.Id }, userModel.ToUserDto());


                //2 add user to the customAuthenticationService
                //3 sign the user in that has a few steps
                //3a create an instance of an object called claimsIdentity
                //claimsIdentity hat the authSchemeName(cookie-default) and the list of claims we will add to the user
                //vased on that identity a claims principal will be created
                //ClaimsPrincipal is the class that HttpContext uses tu understand if the user is authenticated or not
                //User that httpContext uses is of type claims principal
                //final step is to sign the user in => when the netCore knows we will want to sign the user in it will set the cookie for that user

                //TODO: implement check to verify that user exist
                //example:
                //if (await _context.Users.AnyAsync(u => u.Username == registerDto.Username))
                //{
                //    return BadRequest("Username already exists.");
                //}

                // create new user
                //var user = new User();
                //{
                //    user.Email= registerUserDto.Email;
                //    user.Name= registerUserDto.Name;
                //    user.Password= registerUserDto.Password;
                //    user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(registerUserDto.Password);
                //    user.Phone = registerUserDto.Phone;
                //    user.Adress = registerUserDto.Adress;
                //}

                //user.Id = 1;
                //user.Name = "Mihaela";
                //user.Email = "test@email.com";
                //user.Phone = "0000 000 000";
                //user.Adress = "test adress of user 1";

                // 2a create list of claims

                var claims = new List<Claim>();
                claims.Add(new Claim(ClaimTypes.Name, userModel.Email));
                claims.Add(new Claim(ClaimTypes.Email, userModel.Email));
                // claims.Add(new Claim(ClaimTypes."password", user.Password)); //when checking the user we will have to check 
                //that the password provided in the input is the password in the db
                // claims.Add(new Claim(ClaimTypes.Role, user.Role));
                claims.Add(new Claim(ClaimTypes.Role, "basic_user"));

                //TODO: add logic to add user to DB

                //2 b create claims identity using the list of claims and the authScheme
                var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

                //2 c create a new claims principal using previously created claimsIdentity as param    
                var principal = new ClaimsPrincipal(claimsIdentity);

                //2 d add the principal to the customAuthService (key: value pair is usr.Email-Principal)
                _auth.Users.Add(userModel.Email, principal); //for repository pattern will not be using dictionary, cre

                //3 sign tue user in
                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal);


                return Ok();


            }
            catch (Exception e)
            {
                return StatusCode(500, e);

            }

        }

        [HttpPost("/login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            var loginData = loginDto;


            //1 check modelState is valid
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            //2 search for user in db, if found return user object
            //identity version - 
            // var user = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName == loginDto.Username.ToLower());
            var user = new User();
            user.Id = 1;
            user.Name = "Mihaela";
            user.Email = "test@email.com";
            user.Phone = "0000 000 000";
            user.Adress = "test adress of user 1";
            if (user.Email != loginDto.Email)
            {
                user = null;
            }

            // if user not found -> keep this in final code
            if (user == null) return Unauthorized("Invalid username!");

            var claims = new List<Claim>
                    {
                        new Claim(ClaimTypes.Email, user.Email),
                        new Claim(ClaimTypes.Name, user.Name),
                        new Claim(ClaimTypes.Role, "Admin"),
                    };

            var claimsIdentity = new ClaimsIdentity(
   claims, CookieAuthenticationDefaults.AuthenticationScheme);
            var authProperties = new AuthenticationProperties
            {
                //AllowRefresh = <bool>,
                // Refreshing the authentication session should be allowed.

                //ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(10),
                // The time at which the authentication ticket expires. A 
                // value set here overrides the ExpireTimeSpan option of 
                // CookieAuthenticationOptions set with AddCookie.

                //IsPersistent = true,
                // Whether the authentication session is persisted across 
                // multiple requests. When used with cookies, controls
                // whether the cookie's lifetime is absolute (matching the
                // lifetime of the authentication ticket) or session-based.

                //IssuedUtc = <DateTimeOffset>,
                // The time at which the authentication ticket was issued.

                //RedirectUri = <string>
                // The full path or absolute URI to be used as an http 
                // redirect response value.
            };
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,new ClaimsPrincipal(claimsIdentity),authProperties);
            return Ok("Login successfull");



            //    // 2   take info from input like email and check in db if  we have an existing claims principal for that email
            //    //if we don't it means the user is not registered => return unregistered => redirect to login
            //    ClaimsPrincipal principal;
            //    //instead of setting the principal will use dictionary
            //    _auth.Users.TryGetValue(user.Email, out principal);

            //    if (principal == null) return StatusCode(500); 

            //    //check based on the claim that the password is correct
            //    //this will get password from db
            //    var identity = principal.Identity as ClaimsIdentity; //get identity from principal and cast it as claims identity
            //    var username = identity.FindFirst(ClaimTypes.Name)?.Value;//if Find first does not return null we will get a alue
            //    //var password = identity.FindFirst(ClaimTypes.Password)?.Value; //might have 2 do custom claim

            //    //check if username and password match
            //    if(username == user.Email /* && password == user.Password*/ )
            //    {
            //        //1 sign user in
            //        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal);
            //        return Ok();
            //    }

            //} 
            //return Unauthorized("Invalid username or password!");

        }
        [HttpPost("/signOut")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            return Ok("Sign out successfully!");

        }





    }
}


/************************************************************************************/

//   [HttpPost("login")]
//         public async Task<IActionResult> Login(LoginDto loginDto)
//         {
//             //check model state 
//             if(!ModelState.IsValid)
//                 return BadRequest(ModelState);
//             var user = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName == loginDto.Username.ToLower());
//             //if user not found
//             if (user == null) return Unauthorized("Invalid username!");

//             var result = await _signinManager.CheckPasswordSignInAsync(user, loginDto.Password, false);// false = no lock out faliure
//             if (!result.Succeeded) return Unauthorized("Username not found or password incorrect!");
//             return Ok(
//                 new NewUserDto 
//                 {
//                     Username = user.UserName,
//                     Email = user.Email,
//                     Token = _tokenService.CreateToken(user)

//                 }
//             );



//         }

//         [HttpPost("register")]
//         public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
//         {
//             try{
//                 if(!ModelState.IsValid)
//                     return BadRequest(ModelState);
//                 var appUser = new AppUser
//                 {
//                     UserName = registerDto.Username,
//                     Email = registerDto.Email,

//                 };

//                 var createdUser = await _userManager.CreateAsync(appUser, registerDto.Password);
//                 if (createdUser.Succeeded)
//                 {// if user succesfully created assign role
//                     var roleResult = await _userManager.AddToRoleAsync(appUser, "User");
//                     if(roleResult.Succeeded)
//                     {
//                         return Ok(
//                             new NewUserDto
//                             {
//                                 Username = appUser.UserName,
//                                 Email = appUser.Email,
//                                 Token = _tokenService.CreateToken(appUser)

//                             }
//                         );
//                     }
//                     else
//                     {
//                         return StatusCode(500, roleResult.Errors );

//                     }
//                 }
//                 else
//                 {
//                     return StatusCode(500, createdUser.Errors);
//                 }




//             } catch (Exception e)
//             {
//                 return StatusCode(500, e);
//             }
//         }

