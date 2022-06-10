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

        [Authorize(AuthenticationSchemes = "Bearer", Roles = "admin")]
        [HttpPost("addSquad")] 
        public async Task<ActionResult<Squad>> CreateTeam([FromBody] TeamCommand command)
        {
            return await _mediator.Send(command);
        }

        [Authorize(AuthenticationSchemes = "Bearer", Roles = "agent")]
        [HttpDelete("{id}")] 
        public async Task<ActionResult<Unit>> DeleteTeam(int id)
        {
            return await _mediator.Send(new DeleteTeams.Command { Id = id });
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<List<Squad>>> ListTeam()
        {
            return await _mediator.Send(new ListTeams.Query());
        }
        
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult<Squad>> TeamDetails(int id)
        {
            return await _mediator.Send(new TeamsDetails.Query { Id = id });
        }

        //AGENT only verifies the team nothing else
        [Authorize(AuthenticationSchemes = "Bearer", Roles = "agent, admin")]
        [HttpPut("{id}")]
        public async Task<ActionResult<Squad>> Edit(int id, TeamEditCommand command)
        {
            command.TeamId = id;

            return await _mediator.Send(command);
        }
    }
}
