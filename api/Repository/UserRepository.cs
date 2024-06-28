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
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDBContext _context;
        public UserRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<List<User>> GetAllAsync()
        {
            return await _context.Users.Include(c=> c.Transactions).ToListAsync();
        }
        public async Task<User> GetByIdAsync(string id)
        {
            return await _context.Users.Include(c => c.Transactions).FirstOrDefaultAsync(i => i.Id == id);
        }


        //public async Task<User> IUserRepository.GetByIdAsync(string id)
        //{
        //    return await _context.Users.Include(c => c.Transactions).FirstOrDefaultAsync(i => i.Id == id);
        //}

        // public async Task<List<User>>GetByIdAsync (int id)
        // {
        //     return await _context.users.Include(c=> c.Transactions).FirstOrDefaultAsync(i =>i.Id == id);
        // }
    }
}