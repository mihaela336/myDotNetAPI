using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class ChargingSession
    {
        public int Id {get; set;}
        //one to many relationship between station and chargingSessions pt2
        public int? StationId {get; set;} //forms fk relationship with db
        public Station? Station {get; set;} 

        //1 to many relationship with userData pt2 TODO: check if working
        public int? UserDataId {get; set;} //forms fk relationship with db
        public UserData? UserData {get; set;} 

        //TODO: format dateTime, handle input values

        public DateTime SessionStart { get; set; } =DateTime.Now;
        public DateTime SessionEnd { get; set; }

        public TimeSpan ChargingTime { get; set; }
        [Column(TypeName="decimal(18,5)")] 
        public decimal KwhDelivered {get; set;}

    }
}