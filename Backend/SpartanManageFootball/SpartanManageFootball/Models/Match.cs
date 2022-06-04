using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpartanManageFootball.Models
{
    public class Match
    {
        [Key]
        public int MatchId { get; set; }

        [Required(ErrorMessage = "Home team is required")]
        public Squad HomeTeam { get; set; }

        [Required(ErrorMessage = "Team away is required")]
        public Squad AwayTeam { get; set; }

        [Required(ErrorMessage = "Referee is required")]
        public Referee Referee { get; set; }

        [Required(ErrorMessage = "Match date is required")]
        public DateTime MatchDate { get; set; }
    }
}
