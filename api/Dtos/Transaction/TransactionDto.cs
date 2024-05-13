using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
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
        [Required]
        public int ChargingSessionId { get; set; }

        public DateTime CreatedOn { get; set; } = DateTime.Now;
        [Required]
        [Range(0, 1000)]
        public decimal KwhPrice { get; set; }
        [Required]
        [Range(0, 100000)]
        public decimal KwhTotal { get; set; }
        // [Column(TypeName="decimal(18,2)")] //this prevents the decimal to have over 2 when we store money
        [Required]
        [Range(0, 1000)]
        public decimal OverchargeHour { get; set; }
        // [Column(TypeName="decimal(18,2)")] //this prevents the decimal to have over 2 when we store money
        [Required]
        [Range(0, 100000)]
        public decimal OverchargeTotal { get; set; }
        [Required]
        [Range(0, 100000)]
        public decimal VAT { get; set; }
        [Required]
        [Range(0, 100000)]
        public decimal Total { get; set; }
    }
}