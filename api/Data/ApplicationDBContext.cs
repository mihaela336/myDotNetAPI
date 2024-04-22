using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{

//giant class that allows you to search your individual tables
    public class ApplicationDBContext :DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)

        :base(dbContextOptions)//base= workaround because we can't just type ":DbContext(){}" 
        {
            
        }

        //add for each table -links db to code
        public DbSet<Station> Stations {get; set;}
        public DbSet<Transaction> Transactions {get; set;}
        
    }
}