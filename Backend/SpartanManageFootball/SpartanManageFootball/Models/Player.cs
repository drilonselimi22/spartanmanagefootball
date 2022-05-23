using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class Player
    {
        [Key]
        public int Id { get; set; }
        [Required] 
        public string Name { get; set; }
        [Required] 
        public string LastName { get; set; }
        [Required] 
        public int Age { get; set; }
        [Required] 
        public int Number { get; set; }
        [Required] 
        public string Position { get; set; }
    }
}
