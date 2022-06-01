using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpartanManageFootball.Models
{
    public class Match
    {
        [Key]
        public int MatchId { get; set; }
        [Required(ErrorMessage = "Team home is required")]
        public Squad EkipiVendas { get; set; }
        [Required(ErrorMessage = "Team away is required")]
        public Squad EkipiMusafir { get; set; }
        [Required(ErrorMessage = "List of referees is required")]
        public List<Referee> Referees { get; set; }
        [Required(ErrorMessage = "Match date is required")]
        public DateTime MatchDate { get; set; }
    }
}
