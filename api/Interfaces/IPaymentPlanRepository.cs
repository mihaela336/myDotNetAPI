using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.PaymentPlan;
using api.Models;

namespace api.Interfaces
{
    public interface IPaymentPlanRepository
    {
        Task<List<PaymentPlan>> GetAllAsync();
        Task<PaymentPlan?> GetByIdAsync(int id);
        Task<PaymentPlan> CreateAsync(PaymentPlan paymentPlanModel);
        Task<PaymentPlan?> UpdateAsync(int id, UpdatePaymentPlanRequestDto paymentPlanDto);
        Task<PaymentPlan?> DeleteAsync(int id);
    }
}