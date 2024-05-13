using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.UserData;

namespace api.Dtos.PaymentPlan
{
    public class PaymentPlanDto
    {
        public int Id { get; set; }
        [Required]
        [MinLength(4, ErrorMessage = "Plan type must be at least 4 characters")]
        [MaxLength(50, ErrorMessage = "Plan type must be under 50 characters")]

        public string PlanType { get; set; } = string.Empty;

        //1 to many relationship with userData 
        public List<UserDataDto> UsersData { get; set; }

    }
}