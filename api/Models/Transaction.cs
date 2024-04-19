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

        public int? StationId{get; set;}//TODO: check if it actually works
        //navigation property -alows us to navigate whitin models
        public Station? Station {get; set;}//TODO: have buddy chat explain the syntax
        public DateTime CreatedOn {get; set;} = DateTime.Now;

        [Column(TypeName="decimal(18,2)")] //this prevents the decimal to have over 2 when we store money
        public decimal KwPrice {get; set;}
        public decimal KwTotal {get; set;}
         [Column(TypeName="decimal(18,2)")] //this prevents the decimal to have over 2 when we store money
        public decimal SurchargeHour {get; set;}
         [Column(TypeName="decimal(18,2)")] //this prevents the decimal to have over 2 when we store money
        public decimal SurchargeTotal {get; set;}


    }
}