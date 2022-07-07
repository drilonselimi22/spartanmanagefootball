using Microsoft.EntityFrameworkCore;

namespace SpartanManageFootball.Models
{
    [Keyless]
    public class MatchReferee
    {
        public int IDOfMatch { get; set; }
        public int RefOfMatch { get; set; }
    }
}
