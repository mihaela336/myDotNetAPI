using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using api.Data;
using api.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly CustomAuthService _auth;
        public AccountController(CustomAuthService auth)
        {
            _auth = auth;
        }


        [HttpPost("/register")]
        public async Task<IActionResult> Register()
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                //when registering an user and signining him in 
                // 1 check if all user info is correct
                //2 add user to the customAuthenticationService
                //3 sign the user in that has a few steps
                //3a create an instance of an object called claimsIdentity
                //claimsIdentity hat the authSchemeName(cookie-default) and the list of claims we will add to the user
                //vased on that identity a claims principal will be created
                //ClaimsPrincipal is the class that HttpContext uses tu understand if the user is authenticated or not
                //User that httpContext uses is of type claims principal
                //final step is to sign the user in => when the netCore knows we will want to sign the user in it will set the cookie for that user

                var user = new User();
                user.Id = 1;
                user.Name = "Mihaela";
                user.Email = "test@email.com";
                user.Phone = "0000 000 000";
                user.Adress = "test adress of user 1";

                // 2a create list of claims

                var claims = new List<Claim>();
                claims.Add(new Claim(ClaimTypes.Name, user.Email));
                claims.Add(new Claim(ClaimTypes.Email, user.Email));
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
                _auth.Users.Add(user.Email, principal); //for repository pattern will not be using dictionary, cre

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
        public async Task<IActionResult> Login()
        {

            var user = new User();
            user.Id = 1;
            user.Name = "Mihaela";
            user.Email = "test@email.com";
            user.Phone = "0000 000 000";
            user.Adress = "test adress of user 1";

            //check model state 
            if (ModelState.IsValid)
            {
                //1 check modelState is valid

                // 2   take info from input like email and check in db if  we have an existing claims principal for that email
                //if we don't it means the user is not registered => return unregistered => redirect to login
                ClaimsPrincipal principal;
                //instead of setting the principal will use dictionary
                _auth.Users.TryGetValue(user.Email, out principal);

                if (principal == null) return StatusCode(500); 

                //check based on the claim that the password is correct
                //this will get password from db
                var identity = principal.Identity as ClaimsIdentity; //get identity from principal and cast it as claims identity
                var username = identity.FindFirst(ClaimTypes.Name)?.Value;//if Find first does not return null we will get a alue
                //var password = identity.FindFirst(ClaimTypes.Password)?.Value; //might have 2 do custom claim

                //check if username and password match
                if(username == user.Email /* && password == user.Password*/ )
                {
                    //1 sign user in
                    await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal);
                    return Ok();
                }

            } 
            return Unauthorized("Invalid username or password!");
        }
    [HttpPost("/signOut")]
    public async Task<IActionResult> Logout()
    {
        await HttpContext.SignOutAsync();
        return Ok ("Sign out successfully!");

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

