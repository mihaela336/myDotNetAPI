using api.Models;

namespace api.Interfaces
{
    public interface IUserRoleRepository
    {
        Task<List<UserRole>> GetAllAsync();
    }
}
