using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SpartanManageFootball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SayHelloController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetNxenesit()
        {
            return Ok("Spartans");
        }
    }
}
