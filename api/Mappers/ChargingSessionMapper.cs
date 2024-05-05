using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.ChargingSession;
using api.Models;

namespace api.Mappers
{
    public static class ChargingSessionMapper
    {
        public static ChargingSessionDto ToChargingSessionDto(this ChargingSession chargingSessionModel)
        {
            return new ChargingSessionDto
            {
                Id = chargingSessionModel.Id,
                StationId = chargingSessionModel.StationId,
                UserDataId = chargingSessionModel.UserDataId,
                SessionStart = chargingSessionModel.SessionStart,
                ChargingTime = chargingSessionModel.ChargingTime,
                KwhDelivered = chargingSessionModel.KwhDelivered
            };
        }
    }
}