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
                Id = userModel.Id,
                Email = userModel.Email,
                Name = userModel.Name,             
                Phone = userModel.Phone,
                Adress = userModel.Adress,
                Transactions = userModel.Transactions.Select(c=> c.ToTransactionDto()).ToList()
            };
        }

        public static User ToUserFromRegisterDto (this RegisterUserDto registerUserDto)
        {
            return new User
            {
                PaymentPlanId = registerUserDto.PaymentPlanId,
                Email = registerUserDto.Email,
                Name = registerUserDto.Name,
                Password = registerUserDto.Password,
              //  PasswordHash = registerUserDto.PasswordHash,
                Phone = registerUserDto.Phone,
                Adress = registerUserDto.Adress,

            };
        }
    }
}