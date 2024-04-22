using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace api.Dtos.Transaction
{
    public class UpdateTransactionRequestDto
    {
         public int? StationId{get; set;}//TODO: check if it actually works TODO: reolace stationId with sessionId
        //navigation property -alows us to navigate whitin models
        public DateTime CreatedOn {get; set;} = DateTime.Now;
        [Required]
        [Range(0, 1000)]
        public decimal KwPrice {get; set;}
        [Required]
        [Range(0, 100000)]
        public decimal KwTotal {get; set;}
        [Required]
        [Range(0, 1000)]
        public decimal SurchargeHour {get; set;}
        [Required]
        [Range(0, 100000)]
        public decimal SurchargeTotal {get; set;}
    }
}