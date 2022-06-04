using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SpartanManageFootball.Controllers
{
    [Authorize(Roles = "agent")]
    [Route("api/[controller]")]
    [ApiController]
    public class TestRolesController : ControllerBase
    {
        [Authorize(Roles = "agent")]
        [HttpGet]
        public async Task<IActionResult> GetNxenesit()
        {
            return Ok("Spartans");
        }
    }
}
