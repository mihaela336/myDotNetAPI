using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Vehicle;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/vehicle")]
    [ApiController]
    public class VehicleController :ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IVehicleRepository _vehicleRepo;

        public VehicleController(ApplicationDBContext context, IVehicleRepository vehicleRepo)
        {
            _vehicleRepo = vehicleRepo;
            _context = context;
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAll()
        {
            var vehicles = await _vehicleRepo.GetAllAsync();
            var vehicleDto = vehicles.Select(v => v.ToVehicleDto());
            return Ok (vehicles);
        }

         //get vehicle by id
        [HttpGet("{id:int}")]
        [Authorize(Roles = "Admin, User")]
        //.net will use model-binding to extract the string from [HttpGet("{id}")]
        //and turn it into int and pass it into code
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            //var vehicle = await _context.vehicles.FindAsync(id); //before repo refactoring
            var vehicle = await _vehicleRepo.GetByIdAsync(id);
            if (vehicle == null)
            {
                //NotFund is a form of IActionResult
                //it will provide the not found request(?)
                //TODO: learn about IACtionResult
                return NotFound();

            }
            //update after mapper was created
            return Ok(vehicle.ToVehicleDto());
        }
  
        [HttpGet("user/{userId:int}")]
        [Authorize(Roles = "Admin, User")]

        public async Task<IActionResult> GetByUserId([FromRoute] string userId)
        {
            var vehicles = await _vehicleRepo.GetByUserIdAsync(userId);
            if (vehicles == null)
            {

                return NotFound();

            }
            //update after mapper was created
            return Ok(vehicles);
        }

        //next, in order to test the controlled add it to Program.cs
        // type: builder.Services.AddControllers(); in Program.cs
        // and add app.MapControllers(); right before app.run(); in Program.cs

        //part 6. add post method
        [HttpPost]
        [Authorize(Roles = "Admin, User")]
        public async Task<IActionResult> Create([FromBody] CreateVehicleRequestDto vehicleDto)
        //use from body because data is not sent in the url like a query param but is sent as json into the body of the request
        // uses CreatevehicleRequest vehicleDto because the user will not have to input all the data (aka the entire model)
        {   if(!ModelState.IsValid)
                return BadRequest(ModelState);
            var vehicleModel = vehicleDto.ToVehicleFromCreateDto();
            await _vehicleRepo.CreateAsync(vehicleModel);
            return CreatedAtAction(nameof(GetById), new { id = vehicleModel.Id }, vehicleModel.ToVehicleDto());

        }
        
        [HttpPut]
        [Route ("{id:int}")]
        [Authorize(Roles = "Admin, User")]
        //Lpt create separate dtos for each separate endpoint because each of them is going to be different
        public async Task<IActionResult> Update ([FromRoute] int id, [FromBody] UpdateVehicleRequestDto updateDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            //check if vehicle with id exists
            var vehicleModel = await _vehicleRepo.UpdateAsync(id, updateDto);

            if(vehicleModel == null)
            {
                return NotFound();
            }

            return Ok(vehicleModel.ToVehicleDto());

        }

        [HttpDelete]
        [Route("{id}")]
        [Authorize(Roles = "Admin, User")]
        public async Task<IActionResult> Delete([FromRoute] int id )
        {
            var vehicleModel = await _vehicleRepo.DeleteAsync(id);
            if(vehicleModel == null)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}