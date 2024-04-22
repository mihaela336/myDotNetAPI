using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/transaction")]
    [ApiController]
    public class TransactionController: ControllerBase
    {
        //read only so it's not mutable
        private readonly ApplicationDBContext _context;
        public TransactionController(ApplicationDBContext context)
        {
            _context = context;
            
        }

// get all rtransactions
        [HttpGet]
        public IActionResult GetAll()
        {//_context.Transactions.ToList(); = deffered(?) execution
        //_context.Transactions returns a list like object if u add TOList - it will create the sql to go out to db and retrieve data
        //TODO: read about defered execution

            var transactions = _context.Transactions.ToList()
            //update after mapper was created
            //.Select == .net version of Map => will return a imutable list of transaction Dto
            .Select(s=> s.ToTransactionDto());
            return Ok(transactions);
        }

//get transaction by id
        [HttpGet("{id}")]
        //.net will use model-binding to extract the string from [HttpGet("{id}")]
        //and turn it into int and pass it into code
        public IActionResult GetById ([FromRoute] int id)
        {
            var transaction = _context.Transactions.Find(id);
            if (transaction == null)
            {
                //NotFund is a form of IActionResult
                //it will provide the not found request(?)
                //TODO: learn about IACtionResult
                return NotFound();

            }
            //update after mapper was created
            return Ok (transaction.ToTransactionDto());
        }

//next, in order to test the controlled add it to Program.cs
// type: builder.Services.AddControllers(); in Program.cs
// and add app.MapControllers(); right before app.run(); in Program.cs

        

    }
}