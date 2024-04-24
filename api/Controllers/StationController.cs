using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route ("api/station") ]
    [ApiController] //TODO: learn what this does
    public class StationController : ControllerBase
    {
        private readonly IStationRepository _stationRepo;

        public StationController(IStationRepository stationRepo)
        {
            _stationRepo = stationRepo;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll([FromQuery] QueryObject query)
        {
            var stations = await _stationRepo.GetAllAsync(query);
            var StationDto = stations.Select(s=>s.ToStationDto());

            return Ok(StationDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var station = await _stationRepo.GetByIdAsync(id);
            if (station == null)
            {
                return NotFound();
            }
            return Ok(station.ToStationDto());
        }
    }
}