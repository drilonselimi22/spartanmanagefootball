using Microsoft.AspNetCore.Identity;

namespace SpartanManageFootball.DTOs
{
    public class UserDTO
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }  

        public string Role { get; set; }

    }
}
