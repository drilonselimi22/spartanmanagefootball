using Microsoft.EntityFrameworkCore;
using SpartanManageFootball.Models;

namespace SpartanManageFootball.DTOs
{
    public class MatchRefereeDTO
    {
        public int IDOfMatchId { get; set; }
        public int MatchId { get; set; }
        public List<Referee> RefListId { get; set; }
    }
}
