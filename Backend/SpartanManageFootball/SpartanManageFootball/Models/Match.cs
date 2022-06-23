using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpartanManageFootball.Models
{
    public class Match
    {
        [Key]
        public int MatchId { get; set; }
        public Squad HomeTeam { get; set; }
        public Squad AwayTeam { get; set; }
        public Referee Referee { get; set; }
        public DateTime MatchDate { get; set; }
    }
}
