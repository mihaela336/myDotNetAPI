using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Transaction;
using api.Models;

namespace api.Interfaces
{
    public interface ITransactionRepository
    {
        Task<List<Transaction>> GetAllAsync();
        Task<Transaction?> GetByIdAsync(int id);
        Task<List<Transaction?>> GetByUserIdAsync(string userId);
        Task<Transaction> CreateAsync(Transaction transactionModel);
        Task<Transaction?> UpdateAsync(int id, UpdateTransactionRequestDto transactionDto);
        Task<Transaction?> DeleteAsync(int id);


    }
}