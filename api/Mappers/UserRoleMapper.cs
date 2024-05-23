using api.Dtos.UserRole;
using api.Models;


namespace api.Mappers
{
    public static class UserRoleMapper
    {
        public static UserRoleDto ToUserRoleDto (this UserRole userRoleModel)
        {
            return new UserRoleDto
            {
                Id = userRoleModel.Id,
                UserId = userRoleModel.UserId,
                RoleId = userRoleModel.RoleId,
            };
        }
    }
}
