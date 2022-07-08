using Microsoft.EntityFrameworkCore;

namespace SpartanManageFootball.Models
{

    public class MatchReferee
    {
        public int IDOfMatchId { get; set; }
        public int IDOfMatchMatchId { get; set; }
        public int RefOfMatchMatchId { get; set; }
    }
}
