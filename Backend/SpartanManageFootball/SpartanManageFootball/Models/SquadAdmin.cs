using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class SquadAdmin
    {
        [Key]
        public int Email { get; set; }
        [Required] 
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        [Required] 
        public string Name { get; set; }
        [Required] 
        public string PhoneNumber { get; set; }
    }
}
