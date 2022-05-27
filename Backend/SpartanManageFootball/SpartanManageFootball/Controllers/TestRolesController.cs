using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

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
