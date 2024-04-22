using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Transaction
{
    public class UpdateTransactionRequestDto
    {
         public int? StationId{get; set;}//TODO: check if it actually works TODO: reolace stationId with sessionId
        //navigation property -alows us to navigate whitin models
        public DateTime CreatedOn {get; set;} = DateTime.Now;

        public decimal KwPrice {get; set;}
        public decimal KwTotal {get; set;}
        public decimal SurchargeHour {get; set;}
        public decimal SurchargeTotal {get; set;}
    }
}