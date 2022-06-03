using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class Squad
    {
        [Key]
        public int TeamId { get; set; }
        [Required(ErrorMessage = "Stadium ID is required")]
        public int StadiumId { get; set; }
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }
        [Required(ErrorMessage = "City is required")]
        public string City { get; set; }
        public bool isVerified { get; set; }
    }
}