using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpartanManageFootball.Interfaces;

namespace SpartanManageFootball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MatchesController : BaseApiController
    {
        private readonly IIdentityService _identityService;
        public MatchesController(IIdentityService identityService)
        { 
            _identityService = identityService;
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> GenerateMatches(int id)
        {
           var a = await _identityService.GenerateGames(id);
            return Ok(a);
        }
    }
}
