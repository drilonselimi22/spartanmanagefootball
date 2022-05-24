using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpartanManageFootball.Models
{
    public class Match
    {
        [Key]
        public int MatchId { get; set; }
       
        public Squad EkipiVendas { get; set; }
      
        public Squad EkipiMusafir { get; set; }
        public List<Referee> Referees { get; set; }
       
        public DateTime MatchDate { get; set; }
    }
}