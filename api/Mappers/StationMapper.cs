using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Station;
using api.Models;

namespace api.Mappers
{
    public static class StationMapper
    {
        public static StationDto ToStationDto(this Station stationModel)
        {
            return new StationDto
            {
                Id = stationModel.Id,
                Name = stationModel.Name,
                Adress = stationModel.Adress
            };
        }

        public static Station ToStationFromCreateDto(this CreateStationRequestDto stationDto)
        {
            return new Station
            {
                Name = stationDto.Name,
                Adress= stationDto.Adress
 
            };
        }
    }
}