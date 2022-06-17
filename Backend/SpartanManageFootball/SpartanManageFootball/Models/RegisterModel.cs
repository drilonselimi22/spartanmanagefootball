using FluentValidation;
using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class RegisterModel
    {
        public string? Username { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? Role { get; set; }
    }

    public class RegisterModelValidator : AbstractValidator<RegisterModel>
    {
        public RegisterModelValidator()
        {
            RuleFor(u => u.Username).NotNull().NotEmpty().WithMessage("Username should not be null").OverridePropertyName("error");
            RuleFor(u => u.Email).NotNull().NotEmpty().EmailAddress().WithMessage("Email is not valid").OverridePropertyName("error");
            RuleFor(u => u.Password).NotNull().NotEmpty().OverridePropertyName("error");

        }
            
    }
}



