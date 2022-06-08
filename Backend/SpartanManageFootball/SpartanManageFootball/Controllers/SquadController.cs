using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpartanManageFootball.Application.Teams;
using SpartanManageFootball.Models;
using static SpartanManageFootball.Application.Teams.CreateTeams;
using static SpartanManageFootball.Application.Teams.EditTeams;

namespace SpartanManageFootball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SquadController : BaseApiController
    {
        [HttpPost("addSquad")]
        [AllowAnonymous]
        public async Task<IActionResult> CreateTeam([FromForm] CreateTeams.TeamCommand command)
        {
            return HandleResult(await Mediator.Send(command)); ;
        }

        [HttpDelete("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<Unit>> DeleteTeam(int id)
        {
            return await Mediator.Send(new DeleteTeams.Command { Id = id });
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        public async Task<ActionResult<List<Squad>>> ListTeam()
        {
            return await Mediator.Send(new ListTeams.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Squad>> PlayerDetails(int id)
        {
            return await Mediator.Send(new TeamsDetails.Query { Id = id });
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPut("{id}")]
        public async Task<ActionResult<Squad>> Edit(int id, [FromForm] TeamEditCommand command)
        {
            command.TeamId = id;
            return await Mediator.Send(command);
        }
    }
}
