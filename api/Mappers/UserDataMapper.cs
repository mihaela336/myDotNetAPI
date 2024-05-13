using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.UserData;
using api.Models;

namespace api.Mappers
{
    public static class UserDataMapper
    {
        public static UserDataDto ToUserDataDto (this UserData userDataModel)
        {
            return new UserDataDto
            {
                Id = userDataModel.Id,
                AppUserId = userDataModel.AppUserId, //TODO: determine if this should be visible
                Name = userDataModel.Name,
                Email = userDataModel.Email,
                Phone = userDataModel.Phone,
                Adress = userDataModel.Adress,
                Transactions = userDataModel.Transactions.Select(c=> c.ToTransactionDto()).ToList()
            };
        }
    }
}