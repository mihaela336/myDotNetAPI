using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using api.Data;
using api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class TransactionRepository : ITransactionRepository
    {
        private readonly ApplicationDBContext _context;
        public TransactionRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public Task<List<Transaction>> GetAllAsync()
        {
            return  _context.Transactions.ToListAsync();
        }

    }
}