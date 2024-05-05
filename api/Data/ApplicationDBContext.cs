using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{

//giant class that allows you to search your individual tables
    public class ApplicationDBContext :IdentityDbContext<AppUser>
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)

        :base(dbContextOptions)//base= workaround because we can't just type ":DbContext(){}" 
        {
            
        }

        //add for each table -links db to code
        public DbSet<Station> Stations {get; set;}
        public DbSet<ChargingSession> ChargingSessions {get; set;}
        public DbSet<Transaction> Transactions {get; set;}
        public DbSet<UserData> UsersData {get; set;}



        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            List <IdentityRole>roles = new List<IdentityRole>
            {
                new IdentityRole 
                {
                    Name = "Admin",
                    NormalizedName = "ADMIN"

                },
                new IdentityRole 
                {
                    Name = "User",
                    NormalizedName = "USER"

                }
            };
            builder.Entity<IdentityRole>().HasData(roles);
        }
        
    }
}