using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class Stadium
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Name of stadium is required")] 
        public string Name { get; set; }
        [Required(ErrorMessage = "Location is required")]
        public string Location { get; set; }
        [Required(ErrorMessage = "Capacity is required")]
        public int Capacity { get; set; }
    }
}