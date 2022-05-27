using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using SpartanManageFootball.Interfaces;
using SpartanManageFootball.Persistence;
using System.Text;
using System.Web;

namespace SpartanManageFootball.Application.Admin
{
    public class Create
    {
        public class Command : IRequest
        {
            public string Username { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
            public string RoleId { get; set; }

            public class Handler : IRequestHandler<Command>
            {
                private readonly UserManager<IdentityUser> _userManager;
                private readonly RoleManager<IdentityRole> _roleManager;
                private readonly IConfiguration _configuration;
                private readonly SMFContext _context;
                private readonly IEmailSender _emailSender;

                public Handler(
                    UserManager<IdentityUser> userManager,
                    RoleManager<IdentityRole> roleManager,
                    SMFContext context,
                    IEmailSender emailSender,
                    IConfiguration configuration)
                {

                    _userManager = userManager;
                    _roleManager = roleManager;
                    _configuration = configuration;
                    _context = context;
                    _emailSender= emailSender;
                }
                

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {

                    var userExists = await _userManager.FindByNameAsync(request.Username);
                    if (userExists != null)
                    {
                        return Unit.Value;
                    }
                        
                    IdentityUser user = new()
                    {
                        Email = request.Email,
                        SecurityStamp = Guid.NewGuid().ToString(),
                        Id = Guid.NewGuid().ToString(),
                        
                        UserName = request.Username
                    };
                    var result = await _userManager.CreateAsync(user, request.Password);
                    if (!result.Succeeded)
                    {
                        return Unit.Value;
                    }else
                    {
                        

                            var userFromDb = await _userManager.FindByEmailAsync(request.Email);
                            //Send email to user for confirming email
                            var token = await _userManager.GenerateEmailConfirmationTokenAsync(userFromDb);
                              
                        /*     var enCodedPasswordToken = Encoding.UTF8.GetBytes(token);
                             var validemailToken = WebEncoders.Base64UrlEncode(enCodedPasswordToken);
                          */   var uriBuilder = new UriBuilder(_configuration["ReturnPaths:ConfirmEmail"]);
                             var query = HttpUtility.ParseQueryString(uriBuilder.Query);

                            query["token"] = token;
                            query["userid"] = userFromDb.Id;
                            uriBuilder.Query = query.ToString();
                            var urlString = uriBuilder.ToString();

                            var senderEmail = _configuration["ReturnPaths:SenderEmail"];

                            await _emailSender.SendEmailAsync(senderEmail, userFromDb.Email, "Confirm your email address", urlString);
                        
                    }
                    
                    if(request.RoleId.ToLower() == "agent")
                    {
                      
                            await _userManager.AddToRoleAsync(user, "agent");
                    }
                    else if (request.RoleId.ToLower() == "admin")
                    {
                      
                        
                            await _userManager.AddToRoleAsync(user, "admin");
                    }
                    else
                    {
                        return Unit.Value;
                    }
                    
                    
                    return Unit.Value;
                    throw new Exception("Problem saving changes");
                }
            }
        }
    }
}
