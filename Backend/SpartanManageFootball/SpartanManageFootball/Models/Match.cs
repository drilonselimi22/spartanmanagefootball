using System.ComponentModel.DataAnnotations;

namespace SpartanManageFootball.Models
{
    public class Match
    {
        [Key]
        public int MatchId { get; set; }
        [Required]
        public Squad EkipiVendas { get; set; }
        [Required] 
        public Squad EkipiMusafir { get; set; }

        [Required] 
        public List<Referee> Referees { get; set; }
        [Required] 
        public DateTime MatchDate { get; set; }
    }
}