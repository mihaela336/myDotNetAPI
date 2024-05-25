using api.Dtos.Transaction;

namespace api.Dtos.User
{
    public class RegisterUserDto
    {
        public int? PaymentPlanId { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
     //   public string PasswordHash { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Adress { get; set; } = string.Empty;



    }
}
