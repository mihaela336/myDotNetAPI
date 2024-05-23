using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace api.Data
{
    public class CustomAuthService
    {
        //keeps track of all the users signed in
        public CustomAuthService()
        {
            Users = new Dictionary<string, ClaimsPrincipal>();
        }
        public Dictionary<string, ClaimsPrincipal> Users {get; set;}
    }
}