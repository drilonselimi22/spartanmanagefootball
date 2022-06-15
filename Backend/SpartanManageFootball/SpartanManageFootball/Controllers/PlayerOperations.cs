using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpartanManageFootball.Application.Players;
using SpartanManageFootball.Models;
using static SpartanManageFootball.Application.Players.CreatePlayer;
using static SpartanManageFootball.Application.Players.EditPlayer;

namespace SpartanManageFootball.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class PlayerOperations : BaseApiController
    {
        private readonly IMediator _mediator;

        public PlayerOperations(IMediator mediator)
        {
            _mediator = mediator;
        }

        [Authorize(AuthenticationSchemes = "Bearer", Roles = "admin")]
        [HttpPost("addPlayer")]
        public async Task<ActionResult<Player>> CreatePlayer([FromBody] PlayerAddCommand command)
        {
            return HandleResult(await _mediator.Send(command));
        }

        [Authorize(AuthenticationSchemes = "Bearer", Roles = "admin")]
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> DeletePlayer(int id)
        {
            return HandleResult(await _mediator.Send(new DeletePlayer.Command { Id = id }));
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<List<Player>>> List()
        {
            return HandleResult(await _mediator.Send(new ListPlayers.Query()));
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult<Player>> PlayerDetails(int id)
        {
            return HandleResult(await _mediator.Send(new PlayerDetails.Query { Id = id }));
        }

        [Authorize(AuthenticationSchemes = "Bearer", Roles = "admin")]
        [HttpPut("{id}")]
        public async Task<ActionResult<Player>> Edit(int id, PlayerEditCommand command)
        {
            command.Id = id;
            return HandleResult(await _mediator.Send(command));
        }
    }
}