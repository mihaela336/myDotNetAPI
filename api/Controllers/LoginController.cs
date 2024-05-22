using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpGet("/login")]
        public IActionResult Login() =>
    SignIn(new ClaimsPrincipal(
        new ClaimsIdentity(
            new Claim[]
            {
                        //add your claims here
                        new Claim(ClaimTypes.NameIdentifier, Guid.NewGuid().ToString()),
                        new Claim("user_role", "admin"),
                //key : first oaram indicates that is a role, can be named as anything
                //value: "admin"second param indicates the value
            },
            "cookie",
            nameType: null,
            roleType: "user_role"

            )
        ),
        authenticationScheme: "Cookies"
        );
    }
}