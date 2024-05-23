using api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using api.Mappers;

namespace api.Controllers
{
    [Route("api/userRole")]
    [ApiController]
    public class UserRoleController : ControllerBase
    {
        private readonly IUserRoleRepository _userRoleRepo;
        public UserRoleController(IUserRoleRepository userRoleRepo)
        {
            _userRoleRepo = userRoleRepo;
        }
        [HttpGet]
        public async Task<IActionResult> Getall()
        {
            var userRole = await _userRoleRepo.GetAllAsync();
            var userRoleDto = userRole.Select(u => u.ToUserRoleDto());
            return Ok(userRoleDto);
        }
    }
}
