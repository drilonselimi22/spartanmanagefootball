﻿using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class ResetPasswordViewModel
    {
        [Required]
        public string token { get; set; } 
        
        [Required(ErrorMessage ="Email is required")]
        public string Email { get; set; }
        
        [Required(ErrorMessage ="password is required")]
        [StringLength(50, MinimumLength = 6)]
        public string NewPassword { get; set; }
        
        [Required(ErrorMessage ="password is required")]
        [StringLength(50, MinimumLength = 6)]
        public string ConfirmPassword { get; set; }
    }
}
