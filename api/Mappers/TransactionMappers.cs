using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using api.Dtos.Transaction;

namespace api.Mappers
{
    //declared as static because it is going to be a extension method
    //TODO: learn what is an extension method and why it needs to be declared as static
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

                //nex update transaction controller


            };
            
        }
        
    }
}