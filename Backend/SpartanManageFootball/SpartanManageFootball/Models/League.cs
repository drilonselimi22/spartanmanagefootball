using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class League
    {
        [Key]
        public int LeagueId { get; set; }
        [Required]
        public string LeagueName { get; set; }
        [Required]
        public List<Referee> Referees { get; set; }
        [Required]
        public List<Squad> Squads { get; set; } 
    }
}
