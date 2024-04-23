using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using api.Data;
using api.Helpers;
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
        public async Task<List<Station>> GetAllAsync(QueryObject query)
        {
            var stations =  _context.Stations.AsQueryable();
            if(!string.IsNullOrWhiteSpace(query.Name))
            {
                stations = stations.Where(s => s.Name.Contains(query.Name));
            }

            if(!string.IsNullOrWhiteSpace(query.Adress)) //TODO: add status to station and replace adress with status
            {
                stations = stations.Where(s => s.Name.Contains(query.Adress));
            }

            //just add another if to implement sorting
            if(!string.IsNullOrWhiteSpace(query.SortBy))
            {
                //add if statement here for each individual column u want to sort by
                if(query.SortBy.Equals("Name", StringComparison.OrdinalIgnoreCase))
                {
                    stations = query.isDescending ? stations.OrderByDescending(s => s.Name) : stations.OrderBy(s=>s.Name);
                }
            }

            //pagination
            var skipNumber = (query.PageNumber -1) * query.PageSize;

            return await stations.Skip(skipNumber).Take(query.PageSize).ToListAsync();
        }

        public async Task<Station?> GetByIdAsync(int id)
        {
            return await _context.Stations.FindAsync(id);
        }
    }
}