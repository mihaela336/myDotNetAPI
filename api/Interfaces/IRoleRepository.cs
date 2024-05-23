using api.Models;

namespace api.Interfaces
{
    public interface IRoleRepository
    {
        Task<List<Role>> GetAllAsync();
    }
}
