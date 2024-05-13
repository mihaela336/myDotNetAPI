using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface IVehicleRepository
    {
        Task <List<Vehicle>> GetAllAsync();
        Task <List<Vehicle>> GetByUserIdAsync(int userId);
    }
}