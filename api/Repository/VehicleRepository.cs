using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Vehicle;
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

        public async Task<Vehicle> CreateAsync(Vehicle vehicleModel)
        {
            await _context.Vehicles.AddAsync(vehicleModel);
            await _context.SaveChangesAsync();
            return vehicleModel;
        }

        public async Task<Vehicle?> DeleteAsync(int id)
        {
            var vehicleModel = await _context.Vehicles.FirstOrDefaultAsync(x=>x.Id == id);
            if(vehicleModel == null)
            {
                return null;
            }
             _context.Vehicles.Remove(vehicleModel);//do not add await here because remove is not an async function
            await _context.SaveChangesAsync();
            return vehicleModel;
        }

        public async Task<List<Vehicle>> GetAllAsync()
        {
            return await _context.Vehicles.ToListAsync();
        }

        public async Task<Vehicle?> GetByIdAsync(int id)
        {
            return await _context.Vehicles.FindAsync(id);
        }

        public async Task<List<Vehicle>> GetByUserIdAsync(string userId)
        {
            return await _context.Vehicles.Where(v=> v.UserId == userId).ToListAsync();
        }

        public async Task<Vehicle?> UpdateAsync(int id, UpdateVehicleRequestDto vehicleDto)
        {
            var existingVehicle = await _context.Vehicles.FirstOrDefaultAsync(x => x.Id == id);
            if(existingVehicle == null)
            {
                return null;
            }

            existingVehicle.UserId = vehicleDto.UserId;
            existingVehicle.AddedOn = vehicleDto.AddedOn;
            existingVehicle.Producer = vehicleDto.Producer;
            existingVehicle.Model = vehicleDto.Model;

            await _context.SaveChangesAsync();
            return existingVehicle;
        }


    }
}