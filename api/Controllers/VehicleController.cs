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
    [Route("api/vehicles")]
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
        public async Task<IActionResult> GetAll()
        {
            var vehicles = await _vehicleRepo.GetAllAsync();
            var vehicleDto = vehicles.Select(v => v.ToVehicleDto());
            return Ok (vehicles);
        }
    }
}