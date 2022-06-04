using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpartanManageFootball.Application.TeamStadiums;
using SpartanManageFootball.Models;
using static SpartanManageFootball.Application.TeamStadiums.CreateStadiums;
using static SpartanManageFootball.Application.TeamStadiums.EditStadium;

namespace SpartanManageFootball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StadiumsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public StadiumsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("addSquad")]
        [AllowAnonymous]
        public async Task<ActionResult<Stadium>> CreatePlayer([FromBody] StadiumCommand command)
        {
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<Unit>> DeletePlayer(int id)
        {
            return await _mediator.Send(new DeleteStadiums.Command { Id = id });
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<List<Stadium>>> List()
        {
            return await _mediator.Send(new ListStadiums.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Stadium>> PlayerDetails(int id)
        {
            return await _mediator.Send(new StadiumDetails.Query { Id = id });
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Stadium>> Edit(int id, StadiumEditCommand command)
        {
            command.Id = id;

            return await _mediator.Send(command);
        }
    }
}
