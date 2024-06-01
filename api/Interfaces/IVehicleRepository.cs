using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Vehicle;
using api.Models;

namespace api.Interfaces
{
    public interface IVehicleRepository
    {
        Task<List<Vehicle>> GetAllAsync();

        Task<Vehicle?> GetByIdAsync(int id);
        Task<List<Vehicle>> GetByUserIdAsync(string userId);
        Task<Vehicle> CreateAsync(Vehicle vehicleModel);
        Task<Vehicle?> UpdateAsync(int id, UpdateVehicleRequestDto vehicleDto);
        Task<Vehicle?> DeleteAsync(int id);
    }
}