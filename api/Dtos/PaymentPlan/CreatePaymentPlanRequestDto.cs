using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.PaymentPlan
{
    public class CreatePaymentPlanRequestDto
    {
        [Required]
        [MinLength(4, ErrorMessage = "Plan type must be at least 4 characters")]
        [MaxLength(50, ErrorMessage = "Plan type must be under 50 characters")]

        public string PlanType { get; set; }
    }
}