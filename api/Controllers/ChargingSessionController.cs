using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.ChargingSession;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Authorization;
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

        [HttpGet("/test_Authorised_Mobile_admin")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetDataFromAzure()
        {


            return Ok("got data from admin only endpoint");
        }

        [HttpGet("/test_Authorised_Mobile_user")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> GetDataUserFromAzure()
        {


            return Ok("got data from user only endpoint");
        }

        [HttpGet("/test_Unauthorised_Mobile")]
        public async Task<IActionResult> GetUnaothorisedDataFromAzure()
        {


            return Ok("got data from Unauthorised endpoint");
        }

        //get charging session by id
        [HttpGet("{id:int}")]
        //.net will use model-binding to extract the string from [HttpGet("{id}")]
        //and turn it into int and pass it into code
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            //var chargingSession = await _context.chargingSessions.FindAsync(id); //before repo refactoring
            var chargingSession = await _chargingSessionRepo.GetByIdAsync(id);
            if (chargingSession == null)
            {
                //NotFund is a form of IActionResult
                //it will provide the not found request(?)
                //TODO: learn about IACtionResult
                return NotFound();

            }
            //update after mapper was created
            return Ok(chargingSession.ToChargingSessionDto());
        }

        //part 6. add post method
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateChargingSessionRequestDto chargingSessionDto)
        //use from body because data is not sent in the url like a query param but is sent as json into the body of the request
        // uses CreatechargingSessionRequest chargingSessionDto because the user will not have to input all the data (aka the entire model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var chargingSessionModel = chargingSessionDto.ToChargingSessionFromCreateDto();
            await _chargingSessionRepo.CreateAsync(chargingSessionModel);
            return CreatedAtAction(nameof(GetById), new { id = chargingSessionModel.Id }, chargingSessionModel.ToChargingSessionDto());

        }

        [HttpPut]
        [Route("{id:int}")]
        //Lpt create separate dtos for each separate endpoint because each of them is going to be different
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateChargingSessionRequestDto updateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            //check if chargingSession with id exists
            var chargingSessionModel = await _chargingSessionRepo.UpdateAsync(id, updateDto);

            if (chargingSessionModel == null)
            {
                return NotFound();
            }

            return Ok(chargingSessionModel.ToChargingSessionDto());

        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var chargingSessionModel = await _chargingSessionRepo.DeleteAsync(id);
            if (chargingSessionModel == null)
            {
                return NotFound();
            }
            return NoContent();
        }

    }
}