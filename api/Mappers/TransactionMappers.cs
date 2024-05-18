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
                //Station = transactionModel.Station.Select(c => c.ToStationDto());
                ChargingSessionId = transactionModel.ChargingSessionId,
                CreatedOn = transactionModel.CreatedOn,
                KwhPrice = transactionModel.KwhPrice,
                KwhTotal = transactionModel.KwhTotal,
                OverchargeHour = transactionModel.OverchargeHour,
                OverchargeTotal = transactionModel.OverchargeTotal,
                VAT = transactionModel.VAT,
                Total = transactionModel.Total

                //nex update transaction controller


            };
            
        }

        public static Transaction ToTransactionFromCreateDto(this CreateTransactionRequestDto transactionDto)
        {
            return new Transaction
            {
                ChargingSessionId = transactionDto.ChargingSessionId,
                CreatedOn = transactionDto.CreatedOn,
                KwhPrice = transactionDto.KwhPrice,
                KwhTotal = transactionDto.KwhTotal,
                OverchargeHour = transactionDto.OverchargeHour,
                OverchargeTotal = transactionDto.OverchargeTotal,
                VAT = transactionDto.VAT,
                Total = transactionDto.Total

            };
        }
        
    }


}