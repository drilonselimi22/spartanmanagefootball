using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class Referee
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required] 
        public string LastName { get; set; }
        [Required] 
        public string Experience { get; set; }
        [Required] 
        public string City { get; set; }
        [Required] 
        public string Position { get; set; }

    }
}
