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
    public class ApplicationDBContext :IdentityDbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)

        :base(dbContextOptions)//base= workaround because we can't just type ":DbContext(){}" 
        {
            
        }
        //change identity table name
        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     base.OnModelCreating(builder);
        //     builder.HasDefaultSchema("Identity");
        //     builder.Entity<IdentityUser>
        //     (entity=>
        //     { entity.ToTable(name:"User");
        //     }
        //     );


        // }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
                    base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<IdentityUser>().Ignore(c => c.EmailConfirmed)
                                            .Ignore(c => c.SecurityStamp)
                                            .Ignore(c => c.ConcurrencyStamp)
                                            .Ignore(c => c.PhoneNumberConfirmed)
                                            .Ignore(c => c.AccessFailedCount)
                                            .Ignore(c => c.LockoutEnd)
                                            .Ignore(c=> c.LockoutEnabled)
                                            .Ignore(c=>c.TwoFactorEnabled);

        modelBuilder.Entity<IdentityUser>().ToTable("Users");//to change the name of table.
        }

        //add for each table -links db to code
        public DbSet<Station> Stations {get; set;}
        public DbSet<ChargingSession> ChargingSessions {get; set;}
         public DbSet<PaymentPlan> PaymentPlans {get; set;}
        public DbSet<Transaction> Transactions {get; set;}
        public DbSet<UserData> UsersData {get; set;}
        public DbSet<Vehicle> Vehicles {get; set;}
        public DbSet<AppUser> AppUsers {get; set;}





        // protected override void OnModelCreating(ModelBuilder builder)
        // {
        //     base.OnModelCreating(builder);
        //     List <IdentityRole>roles = new List<IdentityRole>
        //     {
        //         new IdentityRole 
        //         {
        //             Name = "Admin",
        //             NormalizedName = "ADMIN"

        //         },
        //         new IdentityRole 
        //         {
        //             Name = "User",
        //             NormalizedName = "USER"

        //         }
        //     };
        //     builder.Entity<IdentityRole>().HasData(roles);
        // }
        
    }
}