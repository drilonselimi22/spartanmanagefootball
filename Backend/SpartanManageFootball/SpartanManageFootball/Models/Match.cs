using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpartanManageFootball.Models
{
    public class Match
    {
        [Key]
        public int MatchId { get; set; }
        [Required(ErrorMessage = "Ekipi vendas is required")]
        public Squad EkipiVendas { get; set; }
        [Required(ErrorMessage = "Ekipi musafir is required")]
        public Squad EkipiMusafir { get; set; }
        [Required(ErrorMessage = "List of referees is required")]
        public List<Referee> Referees { get; set; }
        [Required(ErrorMessage = "Match date is required")]
        public DateTime MatchDate { get; set; }
    }
}