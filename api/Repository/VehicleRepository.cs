using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class VehicleRepository : IVehicleRepository
    {
        private readonly ApplicationDBContext _context;
        public VehicleRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<List<Vehicle>> GetAllAsync()
        {
            return await _context.Vehicles.ToListAsync();
        }

        public async Task<List<Vehicle>> GetByUserIdAsync(int userId)
        {
            return await _context.Vehicles.Where(v=> v.UserDataId == userId).ToListAsync();
        }
    }
}