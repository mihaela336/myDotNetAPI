using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.User;
using api.Models;

namespace api.Mappers
{
    public static class UserMapper
    {
        public static UserDto ToUserDto (this User userModel)
        {
            return new UserDto
            {
                Id= userModel.Id,
                Name = userModel.FullName,
                Email = userModel.Email,
                Phone = userModel.Phone,
                Adress = userModel.Adress,
                Transactions = userModel.Transactions.Select(c=> c.ToTransactionDto()).ToList()
            };
        }
    }
}