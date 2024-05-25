using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.User;
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

        public async Task<User> CreateAsync(User userModel)
        {
            //Hash password 
            userModel.PasswordHash = BCrypt.Net.BCrypt.HashPassword(userModel.Password);
            await _context.Users.AddAsync(userModel);
            await _context.SaveChangesAsync();
            return userModel;
        }

        public async Task<List<User>> GetAllAsync()
        {
            return await _context.Users.Include(c=> c.Transactions).ToListAsync();
        }

        public async Task<User> GetByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<User> GetByIdAsync(int id)
        {
           // throw new NotImplementedException();
           return await _context.Users
                .Include(u=> u.Transactions)
                .Include(u => u.ChargingSessions)
                .Include(u=>u.Vehicles)
                .FirstOrDefaultAsync(u =>u.Id == id);

        }

        // public async Task<List<User>>GetByIdAsync (int id)
        // {
        //     return await _context.UsersData.Include(c=> c.Transactions).FirstOrDefaultAsync(i =>i.Id == id);
        // }
    }
}