using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class League
    {
        [Key]
        public int LeagueId { get; set; }
        public string LeagueName { get; set; }
        public List<Referee> Referees { get; set; }
        public List<Squad> Squads { get; set; }
    }
}
