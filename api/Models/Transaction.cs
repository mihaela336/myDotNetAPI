using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Transaction
    {
        public int Id { get; set; }

        public int? StationId{get; set;}
        public Station? Station {get; set;}
        public DateTime CreatedOn {get; set;} = DateTime.Now;

        [Column(TypeName="decimal(18,2)")] 
        public decimal KwPrice {get; set;}
        public decimal KwTotal {get; set;}
         [Column(TypeName="decimal(18,2)")]
        public decimal SurchargeHour {get; set;}
         [Column(TypeName="decimal(18,2)")] 
        public decimal SurchargeTotal {get; set;}


    }
}