using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class Referee
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Referee name is required")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Referee last name is required")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Referee experience is required")] 
        public string Experience { get; set; }
        [Required(ErrorMessage = "Referee city is required")]
        public string City { get; set; }
        [Required(ErrorMessage = "Referee position is required")] 
        public string Position { get; set; }

    }
}
