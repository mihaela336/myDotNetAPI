using api.Models;

namespace api.Interfaces
{
    public interface IUserClaimRepository
    {
        Task<List<UserClaim>> GetAllAsync();
    }
}
