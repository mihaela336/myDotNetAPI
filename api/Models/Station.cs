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

    }
}