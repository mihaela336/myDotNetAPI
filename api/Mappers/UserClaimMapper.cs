using api.Dtos.UserClaim;
using api.Models;

namespace api.Mappers
{
    public static class UserClaimMapper
    {
        public static UserClaimDto ToUserClaimDto(this UserClaim userClaimModel)
        {
            return new UserClaimDto
            {
                Id = userClaimModel.Id,
                UserId = userClaimModel.UserId,
                ClaimType = userClaimModel.ClaimType,
                ClaimValue = userClaimModel.ClaimValue,
            };
        }
    }
}
