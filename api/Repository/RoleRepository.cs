using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class RoleRepository : IRoleRepository
    {
        private readonly ApplicationDBContext _context;
        public RoleRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<List<Role>> GetAllAsync()
        {
            return await _context.Roles.ToListAsync();
        }
    }
}
