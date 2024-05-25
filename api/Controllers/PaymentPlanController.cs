using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.PaymentPlan;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Authorization;
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
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAll()
        {
            var paymentPlan = await _paymentPlanRepo.GetAllAsync();
            var paymentPlanDto = paymentPlan.Select(p => p.ToPaymentPlanDto());
            return Ok(paymentPlanDto);

        }

        [HttpGet("{id:int}")]
        [Authorize(Roles = "Admin, User")]
        //.net will use model-binding to extract the string from [HttpGet("{id}")]
        //and turn it into int and pass it into code
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            //var paymentPlan = await _context.paymentPlans.FindAsync(id); //before repo refactoring
            var paymentPlan = await _paymentPlanRepo.GetByIdAsync(id);
            if (paymentPlan == null)
            {
                //NotFund is a form of IActionResult
                //it will provide the not found request(?)
                //TODO: learn about IACtionResult
                return NotFound();

            }
            //update after mapper was created
            return Ok(paymentPlan.ToPaymentPlanDto());
        }

        //part 6. add post method
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Create([FromBody] CreatePaymentPlanRequestDto paymentPlanDto)
        //use from body because data is not sent in the url like a query param but is sent as json into the body of the request
        // uses CreatepaymentPlanRequest paymentPlanDto because the user will not have to input all the data (aka the entire model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var paymentPlanModel = paymentPlanDto.ToPaymentPlanFromCreateDto();
            await _paymentPlanRepo.CreateAsync(paymentPlanModel);
            return CreatedAtAction(nameof(GetById), new { id = paymentPlanModel.Id }, paymentPlanModel.ToPaymentPlanDto());

        }

        [HttpPut]
        [Route("{id:int}")]
        [Authorize(Roles = "Admin")]
        //Lpt create separate dtos for each separate endpoint because each of them is going to be different
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdatePaymentPlanRequestDto updateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            //check if paymentPlan with id exists
            var paymentPlanModel = await _paymentPlanRepo.UpdateAsync(id, updateDto);

            if (paymentPlanModel == null)
            {
                return NotFound();
            }

            return Ok(paymentPlanModel.ToPaymentPlanDto());

        }

        [HttpDelete]
        [Route("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var paymentPlanModel = await _paymentPlanRepo.DeleteAsync(id);
            if (paymentPlanModel == null)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}