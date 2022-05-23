using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class Stadium
    {
        [Key]
        public int Id { get; set; }
        [Required] 
        public string Name { get; set; }
        [Required] 
        public string Location { get; set; }
        [Required] 
        public int Capacity { get; set; }

    }
}