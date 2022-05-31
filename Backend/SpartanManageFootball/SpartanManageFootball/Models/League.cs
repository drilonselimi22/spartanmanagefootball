using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class League
    {
        [Key]
        public int LeagueId { get; set; }
        [Required(ErrorMessage = "League name is required!")]
        public string LeagueName { get; set; }
        [Required(ErrorMessage = "List of referees is required")]
        public List<Referee> Referees { get; set; }
        [Required(ErrorMessage = "List of squads is required")]
        public List<Squad> Squads { get; set; } 
    }
}
