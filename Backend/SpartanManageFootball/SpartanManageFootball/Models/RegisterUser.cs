﻿using Microsoft.AspNetCore.Identity;

namespace SpartanManageFootball.Models
{
    public class RegisterUser : IdentityUser
    {
        public int IdentityNumber { get; set; }
        public DateTime BirthDate { get; set; }
        
        
    }
}