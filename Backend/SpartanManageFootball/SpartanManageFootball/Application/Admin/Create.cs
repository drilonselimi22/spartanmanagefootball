using MediatR;
using Microsoft.AspNetCore.Identity;
using SpartanManageFootball.Models;

namespace SpartanManageFootball.Application.Admin
{
    public class Create
    {
        public class Command : IRequest
        {
            public string Username { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
            public int RoleId { get; set; }

            public class Handler : IRequestHandler<Command>
            {
                private readonly UserManager<IdentityUser> _userManager;
                private readonly RoleManager<IdentityRole> _roleManager;
                private readonly IConfiguration _configuration;

                public Handler(
                    UserManager<IdentityUser> userManager,
                    RoleManager<IdentityRole> roleManager,
                    IConfiguration configuration)
                {
                    _userManager = userManager;
                    _roleManager = roleManager;
                    _configuration = configuration;
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

                    
                    if(request.RoleId == 1)
                    {
                        Console.WriteLine("SPARTAN AGENT IF ROLE");
                            await _userManager.AddToRoleAsync(user, UserRoles.SpartanAgent);
                    }
                    else if (request.RoleId == 2)
                    {
                        Console.WriteLine("hini");
                        
                            await _userManager.AddToRoleAsync(user, UserRoles.SquadAdmin);
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
