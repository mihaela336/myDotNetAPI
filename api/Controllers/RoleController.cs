using api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using api.Mappers;

namespace api.Controllers
{
    [Route("api/Role")]
    [ApiController]
    public class RoleController :ControllerBase
    {
        private readonly IRoleRepository _roleRepo;
        public RoleController(IRoleRepository roleRepo)
        {
            _roleRepo = roleRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var role = await _roleRepo.GetAllAsync();
            var roleDto = role.Select(s => s.ToRoleDto());
            return Ok(roleDto);
        }
    }
}
