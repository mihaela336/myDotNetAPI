using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.PaymentPlan;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class PaymentPlanRepository : IPaymentPlanRepository
    {
        private readonly ApplicationDBContext _context;
        public PaymentPlanRepository(ApplicationDBContext context)
        {
            _context =context;
        }

        public async Task<PaymentPlan> CreateAsync(PaymentPlan paymentPlanModel)
        {
            await _context.PaymentPlans.AddAsync(paymentPlanModel);
            await _context.SaveChangesAsync();
            return paymentPlanModel;
        }

        public async Task<PaymentPlan?> DeleteAsync(int id)
        {
            var paymentPlanModel = await _context.PaymentPlans.FirstOrDefaultAsync(x=>x.Id == id);
            if(paymentPlanModel == null)
            {
                return null;
            }
             _context.PaymentPlans.Remove(paymentPlanModel);//do not add await here because remove is not an async function
            await _context.SaveChangesAsync();
            return paymentPlanModel;
        }

        public async Task<List<PaymentPlan>> GetAllAsync()
        {
            return await _context.PaymentPlans.Include(p=>p.UsersData).ToListAsync();
        }

        public async Task<PaymentPlan?> GetByIdAsync(int id)
        {
            return await _context.PaymentPlans.FindAsync(id);
        }



        public async Task<PaymentPlan?> UpdateAsync(int id, UpdatePaymentPlanRequestDto paymentPlanDto)
        {
             var existingPaymentPlan = await _context.PaymentPlans.FirstOrDefaultAsync(x => x.Id == id);
            if(existingPaymentPlan == null)
            {
                return null;
            }
            
            existingPaymentPlan.PlanType = paymentPlanDto.PlanType;

            await _context.SaveChangesAsync();
            return existingPaymentPlan;
        }

    }
}