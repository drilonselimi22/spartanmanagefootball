using SpartanManageFootball.Models;
namespace SpartanManageFootball.DTOs
{
    public class LeagueSquadDto
    {
        public int LeaguesLeagueId { get; set; }

        public List<SquadDto> SquadsTeamId { get; set; }
    }
}