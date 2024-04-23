using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface IStationRepository
    {
        //add one single method just 2 get the infrastructure build
        Task<List<Station>> GetAllAsync(QueryObject query);

        Task<Station?> GetByIdAsync(int id);
    }
}