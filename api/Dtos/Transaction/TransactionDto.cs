using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Station;

namespace api.Dtos.Transaction
{
    public class TransactionDto
    {//copy-paste from transactions model
  // remove station/station id so it will not be sent right now into the response
  // [Column(TypeName="decimal(18,2)")] before atributes because the model already formats the data
        public int Id { get; set; }

//atempt to add station name
       // public StationDto Station {get; set;}

        public DateTime CreatedOn {get; set;} = DateTime.Now;

        public decimal KwPrice {get; set;}
        public decimal KwTotal {get; set;}
        // [Column(TypeName="decimal(18,2)")] //this prevents the decimal to have over 2 when we store money
        public decimal SurchargeHour {get; set;}
        // [Column(TypeName="decimal(18,2)")] //this prevents the decimal to have over 2 when we store money
        public decimal SurchargeTotal {get; set;}
    }
}