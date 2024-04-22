using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Mappers;
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
        public async Task<IActionResult> GetAll()
        {
            var stations = await _stationRepo.GetAllAsync();
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