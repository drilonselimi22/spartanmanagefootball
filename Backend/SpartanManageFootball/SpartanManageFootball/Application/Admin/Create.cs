using MediatR;
using Microsoft.AspNetCore.Identity;
using SpartanManageFootball.Interfaces;
using SpartanManageFootball.Persistence;
using System.Web;
using SpartanManageFootball.Models;

namespace SpartanManageFootball.Application.Admin
{
    public class Create
    {
        public class Command : IRequest
        {
            public string Username { get; set; }
            public string Email { get; set; }
            public int IdentityNumber { get; set; }
            public DateTime Birthdate { get; set; }
            public string Password { get; set; }
            public string RoleId { get; set; }

            public class Handler : IRequestHandler<Command>
            {
                private readonly UserManager<RegisterUser> _userManager;
                private readonly RoleManager<IdentityRole> _roleManager;
                private readonly IConfiguration _configuration;
                private readonly SMFContext _context;
                private readonly IEmailSender _emailSender;

                public Handler(
                    UserManager<RegisterUser> userManager,
                    RoleManager<IdentityRole> roleManager,
                    SMFContext context,
                    IEmailSender emailSender,
                    IConfiguration configuration)
                {

                    _userManager = userManager;
                    _roleManager = roleManager;
                    _configuration = configuration;
                    _context = context;
                    _emailSender = emailSender;
                }

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    var userExists = await _userManager.FindByNameAsync(request.Username);

                    if (userExists != null)
                    {
                        return Unit.Value;
                    }

                    RegisterUser user = new()
                    {
                        UserName = request.Username,
                        Email = request.Email,
                        IdentityNumber = request.IdentityNumber,
                        BirthDate = request.Birthdate,
                        SecurityStamp = Guid.NewGuid().ToString(),
                        Id = Guid.NewGuid().ToString(),
                    };

                    var result = await _userManager.CreateAsync(user, request.Password);

                    if (!result.Succeeded)
                    {
                        return Unit.Value;
                    }
                    else
                    {
                        var userFromDb = await _userManager.FindByEmailAsync(request.Email);
                        //Send email to user for confirming email
                        var token = await _userManager.GenerateEmailConfirmationTokenAsync(userFromDb);

                        var uriBuilder = new UriBuilder(_configuration["ReturnPaths:ConfirmEmail"]);
                        var query = HttpUtility.ParseQueryString(uriBuilder.Query);

                        query["token"] = token;
                        query["userid"] = userFromDb.Id;
                        uriBuilder.Query = query.ToString();

                        var urlString = uriBuilder.ToString();
                        var senderEmail = _configuration["ReturnPaths:SenderEmail"];

                        await _emailSender.SendEmailAsync(senderEmail, userFromDb.Email, "Confirm your email address", urlString);
                    }

                    if (request.RoleId.ToLower() == "agent")
                    {
                        await _userManager.AddToRoleAsync(user, "agent");
                    }
                    else if (request.RoleId.ToLower() == "admin")
                    {
                        await _userManager.AddToRoleAsync(user, "admin");
                    }

                    return Unit.Value;
                }
            }
        }
    }
}
