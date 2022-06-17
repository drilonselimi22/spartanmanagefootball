using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeagueSquadsController : ControllerBase
    {
        private readonly SMFContext _context;

        public LeagueSquadsController(SMFContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<League>>> Get(int leagueId)
        {
            var squads = await _context.Leagues
                .Where(x => x.LeagueId == leagueId)
                .Include(x => x.Squads)
                .ToListAsync();

            return squads;
        }
    }
}
