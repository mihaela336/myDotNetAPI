using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Vehicle
    {
         public int Id { get; set; }

       
        //1 to many relationship with userData pt2 TODO: check if working
        public int? UserDataId {get; set;} //forms fk relationship with db
        public UserData? UserData {get; set;} 

        public DateTime AddedOn {get; set;} = DateTime.Now;
        public string Producer {get; set;} = string.Empty;
        public string Model {get; set;} = string.Empty;


    }
}