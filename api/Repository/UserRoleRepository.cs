using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class UserRoleRepository : IUserRoleRepository
    {
        private readonly ApplicationDBContext _context;
        public UserRoleRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<List<UserRole>> GetAllAsync()
        {
            return await _context.UserRoles.ToListAsync();
        }

    }
}
