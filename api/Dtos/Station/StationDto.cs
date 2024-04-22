using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Station
{
    public class StationDto
    {
        //copy paste from station model
        public int Id {get; set;}

        public string Name {get; set;} = string.Empty;
        public string Adress {get; set;} = string.Empty;

    }
}