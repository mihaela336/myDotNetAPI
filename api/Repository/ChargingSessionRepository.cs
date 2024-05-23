using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.ChargingSession;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class ChargingSessionRepository : IChargingSessionRepository
    {
        private readonly ApplicationDBContext _context;
        public ChargingSessionRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<ChargingSession> CreateAsync(ChargingSession chargingSessionModel)
        {
            await _context.ChargingSessions.AddAsync(chargingSessionModel);
            await _context.SaveChangesAsync();
            return chargingSessionModel;
        }

        public async Task<ChargingSession?> DeleteAsync(int id)
        {
            var chargingSessionModel = await _context.ChargingSessions.FirstOrDefaultAsync(x => x.Id == id);
            if (chargingSessionModel == null)
            {
                return null;
            }
            _context.ChargingSessions.Remove(chargingSessionModel);//do not add await here because remove is not an async function
            await _context.SaveChangesAsync();
            return chargingSessionModel;
        }

        public async Task<List<ChargingSession>> GetAllAsync()
        {
            return await _context.ChargingSessions.ToListAsync();
        }

        public async Task<ChargingSession?> GetByIdAsync(int id)
        {
             return await _context.ChargingSessions.FindAsync(id);
        }

        public async Task<List<ChargingSession?>> GetByUserIdAsync(int userId)
        {
            return await _context.ChargingSessions.Where(t => t.UserId == userId).ToListAsync();
        }

        public async Task<ChargingSession?> UpdateAsync(int id, UpdateChargingSessionRequestDto chargingSessionnDto)
        {
             var existingChargingSession = await _context.ChargingSessions.FirstOrDefaultAsync(x => x.Id == id);
            if(existingChargingSession == null)
            {
                return null;
            }
            
            existingChargingSession.StationId = chargingSessionnDto.StationId;
            existingChargingSession.UserId = chargingSessionnDto.UserId;
            existingChargingSession.SessionStart= chargingSessionnDto.SessionStart;
            existingChargingSession.SessionEnd = chargingSessionnDto.SessionEnd;
            existingChargingSession.ChargingTime = chargingSessionnDto.ChargingTime;
            existingChargingSession.KwhDelivered = chargingSessionnDto.KwhDelivered;

            await _context.SaveChangesAsync();
            return existingChargingSession;
        }
    }
}