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
    public class StationRepository : IStationRepository
    {
        //create db context object
        private readonly ApplicationDBContext _context;

        //create constructor
        public StationRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<List<Station>> GetAllAsync()
        {
            return await _context.Stations.ToListAsync();
        }
    }
}