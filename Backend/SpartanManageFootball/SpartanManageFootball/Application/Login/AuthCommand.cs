using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SpartanManageFootball.DTOs;
using SpartanManageFootball.Interfaces;
using SpartanManageFootball.JwtToken;
using SpartanManageFootball.Persistence;
using SpartanManageFootball.Models;

namespace SpartanManageFootball.Application.Login
{
    public class AuthCommand : IRequest<UserDTO>
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class AuthCommandHandler : IRequestHandler<AuthCommand, UserDTO>
    {
        private readonly ITokenGenerator _tokenGenerator;
        private readonly UserManager<RegisterUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly SignInManager<RegisterUser> _signInManager;
        private readonly IIdentityService _identityService;
        private readonly SMFContext _context;
        public AuthCommandHandler(ITokenGenerator tokenGenerator,
            UserManager<RegisterUser> userManager,
            RoleManager<IdentityRole> roleManager,
            SignInManager<RegisterUser> signInManager,
            IIdentityService identityService,
            SMFContext context)
        {
            _tokenGenerator = tokenGenerator;
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _identityService = identityService;
            _context = context;
        }

        public async Task<UserDTO> Handle(AuthCommand request, CancellationToken cancellationToken)
        {
            var result = await _identityService.SigninUserAsync(request.Email, request.Password);

            if (!result)
            {
                throw new Exception("Invalid username or password");
            }

            var (userId, fullName, userName, email, roles) = await _identityService.GetUserDetailsAsync(await _identityService.GetUserIdAsync(request.Email));

            string token = _tokenGenerator.GenerateJWTToken((fullName: fullName, userName: userName, roles: roles));
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Email == email);
            var rolesOfUser = await _userManager.GetRolesAsync(user);
            string role = rolesOfUser[0];

            return new UserDTO()
            {
                UserName = fullName,
                Email = email,
                Token = token,
                Role = role,
            };
        }
    }
}