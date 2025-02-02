using System;
using System.Collections.Generic;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using api.Interfaces;
using api.Models;
using Microsoft.IdentityModel.Tokens;

namespace api.Service
{
    public class TokenService : ITokenService
    {
        private readonly IConfiguration _config;
        private readonly SymmetricSecurityKey _key;
        public TokenService(IConfiguration config)
    {
        _config = config;
        _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config ["JWT:SigningKey"]));

        
    }
        public string CreateToken(User user, IList<string> roles)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.GivenName, user.UserName)

            };
            claims.AddRange(roles.Select(role => new Claim(ClaimsIdentity.DefaultRoleClaimType, role)));


            //create signing credential (what kind of encription will be used)
            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = creds,
                Issuer = _config ["JWT:Issuer"],
                Audience = _config["JWT:Audience"]
            };

            // JwtSecurityTokenHandler - create the actual token
            var tokenHandler = new JwtSecurityTokenHandler();
            var token =tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token); //returns token in the form of a string

        }
    }
}