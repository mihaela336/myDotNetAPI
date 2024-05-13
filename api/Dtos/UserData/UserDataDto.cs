using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Transaction;

namespace api.Dtos.UserData
{
    public class UserDataDto
    {
        public int Id { get; set; }
        public string AppUserId {get; set;}
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Adress { get; set; } = string.Empty;

        
        //one to many relationship between users and chargingSessions pt1

     //   public List<ChargingSession> ChargingSessions {get; set;} = new List<ChargingSession>();

                //one to many relationship between users and Transactions pt1

        public List<TransactionDto> Transactions {get; set;}
    }
}