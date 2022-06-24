using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace SpartanManageFootball.Models
{
    public class Squad
    {
        [Key]
        public int TeamId { get; set; }
        public int StadiumId { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string SquadLogoNum { get; set; }
        public string SquadLogoUrl { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public bool isVerified { get; set; }
        public string photoNum { get; set; }
        public string photoUrl { get; set; }
        [JsonIgnore]
        public List<League> Leagues { get; set; }

        public Stadium Stadium { get; set; }

        public RegisterUser RegisterUser { get; set; }
        public string RegisterUserId { get; set; }
    }
}