using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.PaymentPlan;
using api.Models;

namespace api.Mappers
{
    public static class PaymentPlanMapper
    {
        public static PaymentPlanDto ToPaymentPlanDto (this PaymentPlan paymentPlanModel)   
        {
            return new PaymentPlanDto
            {
                Id = paymentPlanModel.Id,
                PlanType = paymentPlanModel.PlanType,
                UsersData = paymentPlanModel.UsersData.Select(u=>u.ToUserDataDto()).ToList()

            };
        }
    }
}