using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SpartanManageFootball.Application.Admin;
using SpartanManageFootball.Application.Login;
using SpartanManageFootball.Interfaces;
using SpartanManageFootball.Models;

namespace SpartanManageFootball.Controllers 
{ 
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly UserManager<RegisterUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly SignInManager<RegisterUser> _signInManager;
        private readonly IEmailSender _emailsender;
        private readonly IIdentityService _identityServices;

        public UserController(IMediator mediator,
            UserManager<RegisterUser> userManager,
            RoleManager<IdentityRole> roleManager,
            SignInManager<RegisterUser> signInManager,
            IConfiguration configuration,
            IEmailSender emailSender,
            IIdentityService identityServices
            )
        {
            _mediator = mediator;
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _emailsender = emailSender;
            _identityServices = identityServices;
        } 
        [HttpPost]
        [Route("register-admin")]
        public async Task<ActionResult<Unit>> RegisterAdmin([FromBody] Create.Command command)
        {
           return await _mediator.Send(command);
        }
        [AllowAnonymous]
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

            if (result.Succeeded)
            {
                return Ok(user);
            }

            return BadRequest();
        }

        [HttpPost("ForgetPassword")]
        public async Task<IActionResult> ForgetPassword(string email)
        {
            if (string.IsNullOrEmpty(email))
            {
                return NotFound();
            }

            var result = await _identityServices.ForgetPasswordAsync(email);

            if (result.IsSuccess)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("ResetPassword")]
        public async Task<IActionResult> ResetPassword([FromForm] ResetPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _identityServices.ResetPasswordAsync(model);

                if (result.IsSuccess)
                {
                    return Ok(result);
                }
                return BadRequest(result);
            }

            return BadRequest("Some properties are not valid");
        }
    }
}
