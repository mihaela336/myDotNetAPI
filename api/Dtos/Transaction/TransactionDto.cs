using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Transaction
{
    public class TransactionDto
    {
        public int Id { get; set; }

        public DateTime CreatedOn {get; set;} = DateTime.Now;

        public decimal KwPrice {get; set;}
        public decimal KwTotal {get; set;}
        public decimal SurchargeHour {get; set;}
        public decimal SurchargeTotal {get; set;}
    }
}