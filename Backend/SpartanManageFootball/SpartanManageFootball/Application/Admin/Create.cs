using MediatR;
using Microsoft.AspNetCore.Identity;
using SpartanManageFootball.Persistence;

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
                
                public Handler(
                    UserManager<IdentityUser> userManager,
                    RoleManager<IdentityRole> roleManager,
                    SMFContext context,
                    IConfiguration configuration)
                {
                    _userManager = userManager;
                    _roleManager = roleManager;
                    _configuration = configuration;
                    _context = context;
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
                        return Unit.Value;

                    
                    if(request.RoleId.ToLower() == "agent")
                    {
                        Console.WriteLine("SPARTAN AGENT IF ROLE");
                            await _userManager.AddToRoleAsync(user, "agent");
                    }
                    else if (request.RoleId.ToLower() == "admin")
                    {
                        Console.WriteLine("hini");
                        
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
