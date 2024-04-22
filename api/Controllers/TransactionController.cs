using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/transaction")]
    [ApiController]
    public class TransactionController: ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public TransactionController(ApplicationDBContext context)
        {
            _context = context;
            
        }

// get all transactions
        [HttpGet]
        public IActionResult GetAll()
        {

            var transactions = _context.Transactions.ToList();
            return Ok(transactions);
        }

//get transaction by id
        [HttpGet("{id}")]
        public IActionResult GetById ([FromRoute] int id)
        {
            var transaction = _context.Transactions.Find(id);
            if (transaction == null)
            {
                return NotFound();

            }
            return Ok (transaction);
        }

   
    }
}