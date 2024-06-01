using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.ChargingSession;
using api.Models;

namespace api.Interfaces
{
    public interface IChargingSessionRepository
    {
        Task<List<ChargingSession>> GetAllAsync();

        Task<ChargingSession?> GetByIdAsync(int id);

        Task<List<ChargingSession?>> GetByUserIdAsync(string userId);
        Task<ChargingSession> CreateAsync(ChargingSession chargingSessionModel);
        Task<ChargingSession?> UpdateAsync(int id, UpdateChargingSessionRequestDto chargingSessionnDto);
        Task<ChargingSession?> DeleteAsync(int id);
    }
}