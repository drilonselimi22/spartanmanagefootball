using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SpartanManageFootball.Application.Admin;
using SpartanManageFootball.Application.Login;
using SpartanManageFootball.DTOs;
using SpartanManageFootball.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Web;

namespace SpartanManageFootball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMediator _mediator;


        private readonly UserManager<IdentityUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly SignInManager<IdentityUser> _signInManager;

        public UserController(IMediator mediator,
            UserManager<IdentityUser> userManager,
            RoleManager<IdentityRole> roleManager,
            SignInManager<IdentityUser> signInManager,
            IConfiguration configuration
            )
        {
            _mediator = mediator;
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
        }
        [HttpPost]
        [Route("register-admin")]
        public async Task<ActionResult<Unit>> RegisterAdmin([FromBody] Create.Command command)
        {

            return await _mediator.Send(command);
        }


        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] AuthCommand command)
        {
            return Ok(await _mediator.Send(command));
        }


        [HttpGet("confirmemail")]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail(string token, string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            var result = await _userManager.ConfirmEmailAsync(user, token);
            Console.WriteLine(result);
            if (result.Succeeded)
            {
                return Ok(user);
            }
            return BadRequest();
        }
    }
}

