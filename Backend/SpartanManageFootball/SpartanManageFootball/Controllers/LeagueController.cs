using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpartanManageFootball.Application.League;
using SpartanManageFootball.Application.LeagueSquad;
using SpartanManageFootball.DTOs;
using SpartanManageFootball.Models;
using static SpartanManageFootball.Application.LeagueSquad.Add;

namespace SpartanManageFootball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeagueController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<League>>> GetLeagues()
        {
            return await Mediator.Send(new ListLeague.Query());
        }

        [HttpPost("createleague")]
        public async Task<IActionResult> CreateLeague(League league)
        {
            return Ok(await Mediator.Send(new CreateLeague.LeagueCommand { League = league}));
        }

        [HttpPost("addsquadstoleague")]
        public async Task<ActionResult<League>> AddSquadsToLeague(LeagueSquadDto dto)
        {
            return Ok(await Mediator.Send(new Add.Command { dto = dto }));
        }
    }
}
