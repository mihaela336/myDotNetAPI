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

        //pagination
        public int PageNumber {get; set;} = 1; //will give the first page

        public int PageSize {get; set;} = 2; //use 2 for testing purposes TODO:replace with 20
    }
}