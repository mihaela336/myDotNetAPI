using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.ChargingSession
{
    public class CreateChargingSessionRequestDto
    {
        public int StationId {get; set;} 

        public string UserId {get; set;} 
        public DateTime SessionStart { get; set; } = DateTime.Now;
        public DateTime SessionEnd { get; set; }

        public TimeSpan ChargingTime { get; set; }
        public decimal KwhDelivered {get; set;}
    }
}