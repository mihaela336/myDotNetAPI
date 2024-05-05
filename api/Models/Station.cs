using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Station
    {
        public int Id {get; set;}

        public string Name {get; set;} = string.Empty;
        public string Adress {get; set;} = string.Empty;

        public string Status {get; set;} = string.Empty; // status: available/ unavailable

        //one to many relationship between station and chargingSessions pt1

        public List<ChargingSession> ChargingSessions {get; set;} = new List<ChargingSession>();

    }
}