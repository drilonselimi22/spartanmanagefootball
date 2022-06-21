using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class Squad
    {
        [Key]
        public int TeamId { get; set; }
        public int StadiumId { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public bool isVerified { get; set; }
        public string photoNum { get; set; }
        public string photoUrl { get; set; }
    }
}