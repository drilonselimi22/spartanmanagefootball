using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.DTOs
{
    public class UserDTO
    {
        [Required(ErrorMessage= "Username is required")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Identity number is required")]
        public int IdentityNumber { get; set; }
        [Required(ErrorMessage = "Birthdate is required")]
        public DateTime Birthdate { get; set; }
        [Required(ErrorMessage = "Token is required")]
        public string Token { get; set; }
        [Required(ErrorMessage = "Role is required")]
        public string Role { get; set; }

    }
}
