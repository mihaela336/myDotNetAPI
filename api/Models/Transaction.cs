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

        public int? ChargingSessionId{get; set;}//TODO: check if it actually works 
        //TODO: implement 1 to 1 relationship

        //1 to many relationship with userData pt2 TODO: check if working
        public int? UserDataId {get; set;} //forms fk relationship with db
        public UserData? UserData {get; set;} 

        public DateTime CreatedOn {get; set;} = DateTime.Now;

        [Column(TypeName="decimal(18,5)")] 
        public decimal KwPrice {get; set;}
        [Column(TypeName="decimal(18,5)")]
        public decimal KwTotal {get; set;}
         [Column(TypeName="decimal(18,2)")] //this prevents the decimal to have over 2 when we store money
        public decimal OverchargeHour {get; set;}
         [Column(TypeName="decimal(18,2)")] 
        public decimal OverchargeTotal {get; set;}

        [Column(TypeName="decimal(18,2)")] 
        public decimal Total {get; set;}


    }
}