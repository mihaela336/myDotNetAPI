using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using api.Data;
using api.Interfaces;
using Microsoft.EntityFrameworkCore;
using api.Dtos.Transaction;
using Microsoft.AspNetCore.Http.Connections;

namespace api.Repository
{
    public class TransactionRepository : ITransactionRepository
    {
        private readonly ApplicationDBContext _context;
        public TransactionRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Transaction> CreateAsync(Transaction transactionModel)
        {
            await _context.Transactions.AddAsync(transactionModel);
            await _context.SaveChangesAsync();
            return transactionModel;
        }

        public async Task<Transaction?> DeleteAsync(int id)
        {
            var transactionModel = await _context.Transactions.FirstOrDefaultAsync(x=>x.Id == id);
            if(transactionModel == null)
            {
                return null;
            }
             _context.Transactions.Remove(transactionModel);//do not add await here because remove is not an async function
            await _context.SaveChangesAsync();
            return transactionModel;

        }

        public async Task<List<Transaction>> GetAllAsync()
        {
            return await _context.Transactions.ToListAsync();
        }

        public async Task<Transaction?> GetByIdAsync(int id)
        {
            return await _context.Transactions.FindAsync(id);
        }

        public async Task<Transaction?> UpdateAsync(int id, UpdateTransactionRequestDto transactionDto)
        {
            var existingTransaction = await _context.Transactions.FirstOrDefaultAsync(x => x.Id == id);
            if(existingTransaction == null)
            {
                return null;
            }
            
            existingTransaction.ChargingSessionId = transactionDto.ChargingSessionId;
            existingTransaction.CreatedOn = transactionDto.CreatedOn;
            existingTransaction.KwhPrice= transactionDto.KwhPrice;
            existingTransaction.KwhTotal= transactionDto.KwhTotal;
            existingTransaction.OverchargeHour= transactionDto.OverchargeHour;
            existingTransaction.OverchargeTotal = transactionDto.OverchargeTotal;

            await _context.SaveChangesAsync();
            return existingTransaction;

        }
    }
}