using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/userData")]
    [ApiController]
    public class UserDataController : ControllerBase
    {
        private readonly IUserDataRepository _userDataRepo;
        public UserDataController(IUserDataRepository userDataRepo)
        {
            _userDataRepo =userDataRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var userData = await _userDataRepo.GetAllAsync();
            var userDataDto = userData.Select(s => s.ToUserDataDto());
            return Ok(userDataDto);
        }
    }
}