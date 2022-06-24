using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpartanManageFootball.Application.TeamStadiums;
using SpartanManageFootball.Models;
using static SpartanManageFootball.Application.TeamStadiums.CreateStadiums;
using static SpartanManageFootball.Application.TeamStadiums.EditStadium;

namespace SpartanManageFootball.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class StadiumsController : BaseApiController
    {
        private readonly IMediator _mediator;

        public StadiumsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [Authorize(AuthenticationSchemes = "Bearer", Roles = "admin")]
        [HttpPost("addStadium")]
        public async Task<ActionResult<Stadium>> CreateStadium([FromBody] StadiumCommand command)
        {
            return HandleResult(await _mediator.Send(command));
        }

        [Authorize(AuthenticationSchemes = "Bearer", Roles = "admin")]
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> DeleteStadium(int id)
        {
            return HandleResult(await _mediator.Send(new DeleteStadiums.Command { Id = id }));
        }

        [AllowAnonymous]
        [HttpGet] 
        public async Task<ActionResult<List<Stadium>>> List()
        {
            return await _mediator.Send(new ListStadiums.Query());
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult<Stadium>> StadiumDetails(int id)
        {
            return await _mediator.Send(new StadiumDetails.Query { Id = id });
        }

        [Authorize(AuthenticationSchemes = "Bearer", Roles = "admin")]
        [HttpPut("{id}")]
        public async Task<ActionResult<Stadium>> Edit(int id, StadiumEditCommand command)
        {
            command.Id = id;

            return HandleResult(await _mediator.Send(command));
        }
    }
}
