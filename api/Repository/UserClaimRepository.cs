using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class UserClaimRepository :IUserClaimRepository
    {
        private readonly ApplicationDBContext _context;
        public UserClaimRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<List<UserClaim>> GetAllAsync()
        {
            return await _context.UserClaims.ToListAsync();
        }

    }
}
