using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/User")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepo;
        public UserController(IUserRepository userRepo)
        {
            _userRepo =userRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var user = await _userRepo.GetAllAsync();
            var userDto = user.Select(s => s.ToUserDto());
            return Ok(userDto);
        }

        //[HttpGet]
        //public async Task<IActionResult> GetById(int id)
        //{
        //    var user = await _userRepo.GetByIdAsync(id);
        //    var userDto = user.Select(s => s.ToUserDto());
        //    return Ok(userDto);
        //}
    }
}