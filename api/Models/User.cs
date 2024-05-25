using Microsoft.AspNetCore.Identity;

namespace api.Models
{
    public class User : IdentityUser
    {
      //  public int Id { get; set; }

        //many to one relationship between payment plan aun users (one payment plan- multiple users)
        public int? PaymentPlanId { get; set; } //forms fk relationship with db
        public PaymentPlan? PaymentPlan { get; set; }
     //   public string Email { get; set; } = string.Empty;
        public string FullName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
       // public string PasswordHash { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Adress { get; set; } = string.Empty;

        //many to many relationship between users and userRole
       // public ICollection<UserRole> UserRoles { get; set; }

        //one to many relationship between users and chargingSessions pt1
        public List<ChargingSession> ChargingSessions { get; set; } = new List<ChargingSession>();

        //one to many relationship between users and Transactions pt1
        public List<Transaction> Transactions { get; set; } = new List<Transaction>();
        //one to many relationship between users and Vehicles pt1
        public List<Vehicle> Vehicles { get; set; } = new List<Vehicle>();
    }
}
