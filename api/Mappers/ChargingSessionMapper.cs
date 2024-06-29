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
                UserId = chargingSessionModel.UserId,
                SessionStart = chargingSessionModel.SessionStart,
                ChargingTime = chargingSessionModel.ChargingTime,
                KwhDelivered = chargingSessionModel.KwhDelivered
            };
        }

        public static ChargingSession ToChargingSessionFromCreateDto(this CreateChargingSessionRequestDto chargingSessionDto)
        {
            return new ChargingSession
            {
                StationId = chargingSessionDto.StationId,
                UserId = chargingSessionDto.UserId,
                SessionStart = chargingSessionDto.SessionStart,
                SessionEnd = chargingSessionDto.SessionEnd,
                ChargingTime = chargingSessionDto.ChargingTime,
                KwhDelivered = chargingSessionDto.KwhDelivered

            };
        }
    }
}