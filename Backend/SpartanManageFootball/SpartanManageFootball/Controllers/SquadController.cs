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
    public class SquadController : ControllerBase
    {
        private readonly IMediator _mediator;

        public SquadController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("addSquad")]
        [AllowAnonymous]
        public async Task<ActionResult<Squad>> CreateTeam([FromBody] TeamCommand command)
        {
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<Unit>> DeleteTeam(int id)
        {
            return await _mediator.Send(new DeleteTeams.Command { Id = id });
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        public async Task<ActionResult<List<Squad>>> ListTeam()
        {
            return await _mediator.Send(new ListTeams.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Squad>> PlayerDetails(int id)
        {
            return await _mediator.Send(new TeamsDetails.Query { Id = id });
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPut("{id}")]
        public async Task<ActionResult<Squad>> Edit(int id, TeamEditCommand command)
        {
            command.TeamId = id;

            return await _mediator.Send(command);
        }
    }
}
