using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class ResetPasswordTokenModel
    {
        [Required(ErrorMessage = "Username is required")]
        public string Username { get; set; }
    }
}