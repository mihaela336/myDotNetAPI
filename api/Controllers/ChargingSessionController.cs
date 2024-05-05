using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Razor.Hosting;

namespace api.Controllers
{
    [Route("api/chargingSession")]
    [ApiController]
    public class ChargingSessionController : ControllerBase 
    {
        private readonly IChargingSessionRepository _chargingSessionRepo;
        public ChargingSessionController(IChargingSessionRepository chargingSessionRepo)
        {
            _chargingSessionRepo = chargingSessionRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var chargingSessions = await _chargingSessionRepo.GetAllAsync();

            var chargingSessionDto = chargingSessions.Select(s => s.ToChargingSessionDto());
            
            return Ok(chargingSessionDto);
        }

    }
}