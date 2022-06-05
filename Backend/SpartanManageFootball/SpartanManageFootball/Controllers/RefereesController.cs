using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpartanManageFootball.Application.RefereesOperations;
using SpartanManageFootball.Models;
using static SpartanManageFootball.Application.RefereesOperations.CreateReferee;
using static SpartanManageFootball.Application.RefereesOperations.EditReferee;

namespace SpartanManageFootball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RefereesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public RefereesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("addReferee")]
        [AllowAnonymous]
        public async Task<ActionResult<Referee>> CreatePlayer([FromBody] RefereeCommand command)
        {
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<Unit>> DeletePlayer(int id)
        {
            return await _mediator.Send(new DeleteReferees.Command { Id = id });
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<List<Referee>>> List()
        {
            return await _mediator.Send(new ListReferees.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Referee>> PlayerDetails(int id)
        {
            return await _mediator.Send(new RefereeDetails.Query { Id = id });
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Referee>> Edit(int id, RefereeEditCommand command)
        {
            command.Id = id;

            return await _mediator.Send(command);
        }
    }
}
