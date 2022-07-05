using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpartanManageFootball.Models
{
    public class Match
    {
        [Key]
        public int MatchId { get; set; }
        public int HomeTeamTeamId { get; set; }
        public int AwayTeamTeamId { get; set; }
        public int RefereeId { get; set; }
        public DateTime MatchDate { get; set; }
        public string Result { get; set; }
        public bool IsPlayed { get; set; }

        public int MatchWeek { get; set; } 

    }
}
