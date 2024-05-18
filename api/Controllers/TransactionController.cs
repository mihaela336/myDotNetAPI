using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Transaction;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/transaction")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        //read only so it's not mutable
        private readonly ApplicationDBContext _context;
        private readonly ITransactionRepository _transactionRepo;
        public TransactionController(ApplicationDBContext context, ITransactionRepository transactionRepo)
        {
            _transactionRepo = transactionRepo;
            _context = context;

        }

        // get all transactions
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {//_context.Transactions.ToList(); = deffered(?) execution
         //_context.Transactions returns a list like object if u add TOList - it will create the sql to go out to db and retrieve data
         //TODO: read about defered execution

            var transactions = await _transactionRepo.GetAllAsync();
            //.Select == .net version of Map => will return a imutable list of transaction Dto
           var transactionDto = transactions.Select(s => s.ToTransactionDto());
            return Ok(transactions);
        }

        //get transaction by id
        [HttpGet("{id:int}")]
        //.net will use model-binding to extract the string from [HttpGet("{id}")]
        //and turn it into int and pass it into code
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            //var transaction = await _context.Transactions.FindAsync(id); //before repo refactoring
            var transaction = await _transactionRepo.GetByIdAsync(id);
            if (transaction == null)
            {
                //NotFund is a form of IActionResult
                //it will provide the not found request(?)
                //TODO: learn about IACtionResult
                return NotFound();

            }
            //update after mapper was created
            return Ok(transaction.ToTransactionDto());
        }
  
        [HttpGet("user/{userId:int}")]

        public async Task<IActionResult> GetByUserId([FromRoute] int userId)
        {
            var transactions = await _transactionRepo.GetByUserIdAsync(userId);
            if (transactions == null)
            {

                return NotFound();

            }
            //update after mapper was created
            return Ok(transactions);
        }

        //next, in order to test the controlled add it to Program.cs
        // type: builder.Services.AddControllers(); in Program.cs
        // and add app.MapControllers(); right before app.run(); in Program.cs

        //part 6. add post method
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateTransactionRequestDto transactionDto)
        //use from body because data is not sent in the url like a query param but is sent as json into the body of the request
        // uses CreateTransactionRequest transactionDto because the user will not have to input all the data (aka the entire model)
        {   if(!ModelState.IsValid)
                return BadRequest(ModelState);
            var transactionModel = transactionDto.ToTransactionFromCreateDto();
            await _transactionRepo.CreateAsync(transactionModel);
            return CreatedAtAction(nameof(GetById), new { id = transactionModel.Id }, transactionModel.ToTransactionDto());

        }
        
        [HttpPut]
        [Route ("{id:int}")]
        //Lpt create separate dtos for each separate endpoint because each of them is going to be different
        public async Task<IActionResult> Update ([FromRoute] int id, [FromBody] UpdateTransactionRequestDto updateDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            //check if transaction with id exists
            var transactionModel = await _transactionRepo.UpdateAsync(id, updateDto);

            if(transactionModel == null)
            {
                return NotFound();
            }

            return Ok(transactionModel.ToTransactionDto());

        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id )
        {
            var transactionModel = await _transactionRepo.DeleteAsync(id);
            if(transactionModel == null)
            {
                return NotFound();
            }
            return NoContent();
        }

    }
}