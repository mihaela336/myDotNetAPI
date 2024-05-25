using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Vehicle;
using api.Models;

namespace api.Mappers
{
    public static class VehicleMapper
    {
        public static VehicleDto ToVehicleDto(this Vehicle vehicleModel)
        {
            return new VehicleDto
            {
                Id = vehicleModel.Id,
                //add user id?
                UserId = vehicleModel.UserId,
                AddedOn = vehicleModel.AddedOn,
                Producer = vehicleModel.Producer,
                Model = vehicleModel.Model

            };
        }

        public static Vehicle ToVehicleFromCreateDto(this CreateVehicleRequestDto vehicleDto)
        {
            return new Vehicle
            {
                UserId = vehicleDto.UserId,
                AddedOn = vehicleDto.AddedOn,//TODO:rename addedON to CreatedOn
                Producer = vehicleDto.Producer,
                Model = vehicleDto.Model

            };
        }
    }
}