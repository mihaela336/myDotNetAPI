using api.Dtos.Transaction;
using api.Dtos.User;
using api.Models;
namespace api.Dtos.Role
{
    public class RoleDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<UserDto> Users { get; set; }
    }
}
