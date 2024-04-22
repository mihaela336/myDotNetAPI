using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using api.Dtos.Transaction;

namespace api.Mappers
{
    public static class TransactionMappers
    {
        public static TransactionDto ToTransactionDto (this Transaction transactionModel)
        {
            return new TransactionDto
            {
                Id = transactionModel.Id,
                CreatedOn = transactionModel.CreatedOn,
                KwTotal = transactionModel.KwTotal,
                SurchargeTotal = transactionModel.SurchargeTotal
            };
            
        }
        
    }
}