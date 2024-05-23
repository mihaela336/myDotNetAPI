using api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using api.Mappers;

namespace api.Controllers
{
    [Route("api/userClaim")]
    [ApiController]
    public class UserClaimController : ControllerBase
    {
        private readonly IUserClaimRepository _userClaimRepo;

        public UserClaimController(IUserClaimRepository userClaimRepo)
        {
            _userClaimRepo = userClaimRepo;  
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var userClaim= await _userClaimRepo.GetAllAsync();
            var userClaimDto = userClaim.Select(u => u.ToUserClaimDto());
            return Ok(userClaimDto);
        }

    }
}
