using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpartanManageFootball.Application.Players;
using SpartanManageFootball.Models;
using System.Collections.Generic;
using static SpartanManageFootball.Application.Players.CreatePlayer;
using static SpartanManageFootball.Application.Players.EditPlayer;

namespace SpartanManageFootball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerOperations: ControllerBase
    {
        private readonly IMediator _mediator;

        public PlayerOperations(IMediator mediator
            )
        {
            _mediator = mediator;
        }

        [HttpPost("addPlayer")]
        [AllowAnonymous]
        public async Task<ActionResult<Player>> CreatePlayer([FromBody] PlayerAddCommand command)
        {
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<Unit>> DeletePlayer(int id)
        {
           return await _mediator.Send(new DeletePlayer.Command { Id = id } );
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<List<Player>>> List()
        {
            return await _mediator.Send(new ListPlayers.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Player>> PlayerDetails(int id)
        {
            return await _mediator.Send(new PlayerDetails.Query { Id = id});
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Player>>Edit(int id, PlayerEditCommand command)
        {
            command.Id = id;
            return await _mediator.Send(command);
        }
    }
}