using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Transaction
{
    public class CreateTransactionRequestDto
    {
        // the dto will have evrithyng from the model except the id (that is auto generated)
        public int? StationId{get; set;}//TODO: check if it actually works TODO: reolace stationId with sessionId
        //navigation property -alows us to navigate whitin models
        public DateTime CreatedOn {get; set;} = DateTime.Now;

        public decimal KwPrice {get; set;}
        public decimal KwTotal {get; set;}
        public decimal SurchargeHour {get; set;}
        public decimal SurchargeTotal {get; set;}
    }
}