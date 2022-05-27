using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class ResetPasswordViewModel
    {
        [Required]
        public string token { get; set; } 
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 6)]

        public string NewPassword { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 6)]
        public string ConfirmPassword { get; set; }
    }
}
