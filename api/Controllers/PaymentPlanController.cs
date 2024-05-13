using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/paymentplan")]
    [ApiController]
    public class PaymentPlanController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IPaymentPlanRepository _paymentPlanRepo;
        
        public PaymentPlanController(ApplicationDBContext context, IPaymentPlanRepository paymentPlanRepo)
        {
            _paymentPlanRepo = paymentPlanRepo;
            _context = context;
        }

        //get all payment plans
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var paymentPlan = await _paymentPlanRepo.GetAllAsync();
            var paymentPlanDto = paymentPlan.Select(p=>p.ToPaymentPlanDto());
            return Ok(paymentPlanDto);

        }
    }
}