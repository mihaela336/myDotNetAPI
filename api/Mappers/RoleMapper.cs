using api.Dtos.Role;
using api.Models;

namespace api.Mappers
{
    public static class RoleMapper
    {
        public static RoleDto ToRoleDto(this Role roleModel)
        {
            return new RoleDto
            {
                Id = roleModel.Id,
                Name = roleModel.Name
            };
        }
    }
}
