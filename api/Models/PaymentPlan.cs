using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class PaymentPlan
    {
        public int Id { get; set; }

        public string PlanType { get; set; } = string.Empty;

        //1 to many relationship with user 
        public List<User> users { get; set; } = new List<User>();

    }
}