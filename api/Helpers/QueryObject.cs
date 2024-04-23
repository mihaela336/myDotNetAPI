using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Helpers
{
    public class QueryObject
    {
        public string? Name {get; set;} = null;

        public string? Adress {get; set;} = null;

        //sort
        public string? SortBy {get; set;} = null;
        public bool isDescending {get; set;} = false; 
    }
}