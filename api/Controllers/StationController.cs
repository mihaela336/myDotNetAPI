using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Station;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/station")]
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
            var StationDto = stations.Select(s => s.ToStationDto());

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

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStationRequestDto stationDto)
        //use from body because data is not sent in the url like a query param but is sent as json into the body of the request
        // uses CreatestationRequest stationDto because the user will not have to input all the data (aka the entire model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var stationModel = stationDto.ToStationFromCreateDto();
            await _stationRepo.CreateAsync(stationModel);
            return CreatedAtAction(nameof(GetById), new { id = stationModel.Id }, stationModel.ToStationDto());

        }

        [HttpPut]
        [Route("{id:int}")]
        //Lpt create separate dtos for each separate endpoint because each of them is going to be different
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStationRequestDto updateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            //check if station with id exists
            var stationModel = await _stationRepo.UpdateAsync(id, updateDto);

            if (stationModel == null)
            {
                return NotFound();
            }

            return Ok(stationModel.ToStationDto());

        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var stationModel = await _stationRepo.DeleteAsync(id);
            if (stationModel == null)
            {
                return NotFound();
            }
            return NoContent();
        }

    }
}