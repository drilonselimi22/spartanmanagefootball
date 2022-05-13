using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class Squad
    {
        [Key]public int TeamId { get; set; }
        [Required] 
        public int StadiumId { get; set; }
        [Required] 
        public string Name { get; set; }
        [Required] 
        public string City { get; set; }
        [Required] 
        public List<Player> Players { get; set; }
        //formation 

    }
}
