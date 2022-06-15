using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.EntityFrameworkCore;
using SpartanManageFootball.DTOs;
using SpartanManageFootball.Interfaces;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;
using System.Text;

namespace SpartanManageFootball.Services
{
    public class IdentityServices : IIdentityService
    {
        private readonly UserManager<RegisterUser> _userManager;
        private readonly SignInManager<RegisterUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IEmailSender _emailSender;
        private readonly IConfiguration _configuration;
        private readonly SMFContext _smfcontext;

        public IdentityServices(UserManager<RegisterUser> userManager, SignInManager<RegisterUser> signInManager, IEmailSender emailSender, RoleManager<IdentityRole> roleManager, IConfiguration configuration, SMFContext smfcontext)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _emailSender = emailSender;
            _configuration = configuration;
            _smfcontext = smfcontext;

        }

        public async Task<(string id, string roleName)> GetRoleByIdAsync(string id)
        {
            var role = await _roleManager.FindByIdAsync(id);

            return (role.Id, role.Name);
        }

        public async Task<List<(string id, string roleName)>> GetRolesAsync()
        {
            var roles = await _roleManager.Roles.Select(x => new
            {
                x.Id,
                x.Name
            }).ToListAsync();

            return roles.Select(role => (role.Id, role.Name)).ToList();
        }

        public async Task<(string userId, string fullName, string UserName, string email, IList<string> roles)> GetUserDetailsAsync(string userId)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == userId);

            if (user == null)
            {
                throw new Exception("User not found");
            }

            var roles = await _userManager.GetRolesAsync(user);

            return (user.Id, user.UserName, user.UserName, user.Email, roles);
        }
        public async Task<string> GetUserIdAsync(string userName)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName == userName);

            if (user == null)
            {
                throw new Exception("User not found");
            }
            return await _userManager.GetUserIdAsync(user);
        }
        public async Task<bool> SigninUserAsync(string email, string password)
        {
            var result = await _signInManager.PasswordSignInAsync(email, password, true, false);
            return result.Succeeded;
        }
        public async Task<bool> UpdateUsersRole(string userName, IList<string> usersRole)
        {
            var user = await _userManager.FindByNameAsync(userName);
            var existingRoles = await _userManager.GetRolesAsync(user);
            var result = await _userManager.RemoveFromRolesAsync(user, existingRoles);

            result = await _userManager.AddToRolesAsync(user, usersRole);

            return result.Succeeded;
        }
        public async Task<UserManagerResponse> ForgetPasswordAsync(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
                return new UserManagerResponse
                {
                    IsSuccess = false,
                    Message = "No user associated with email",
                };

            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            var encodedToken = Encoding.UTF8.GetBytes(token);
            var validToken = WebEncoders.Base64UrlEncode(encodedToken);

            string url = $"{"http://localhost:7122}"}/ResetPassword?email={email}&token={validToken}";
            var senderEmail = _configuration["ReturnPaths:SenderEmail"];

            await _userManager.FindByEmailAsync(email);
            await _emailSender.SendEmailAsync(senderEmail, email, "Reset Password", "To reset the password click on the url" +
              $"{url}");

            return new UserManagerResponse
            {
                IsSuccess = true,
                Message = "Reset password URL has been sent to the email successfully!"
            };
        }
        public async Task<UserManagerResponse> ResetPasswordAsync(ResetPasswordViewModel model)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);

            if (user == null)

            {
                throw new Exception("No user associated with email");
            }

            if (model.NewPassword != model.ConfirmPassword)

            {
                throw new Exception("Passwords do not match");
            }

            var decodedToken = WebEncoders.Base64UrlDecode(model.token);
            string normalToken = Encoding.UTF8.GetString(decodedToken);

            var result = await _userManager.ResetPasswordAsync(user, normalToken, model.NewPassword);

            if (result.Succeeded)
                return new UserManagerResponse
                {
                    Message = "Password has been reset successfully!",
                    IsSuccess = true,
                };

            return new UserManagerResponse
            {
                Message = "Something went wrong",
                IsSuccess = false,
                Errors = result.Errors.Select(e => e.Description),
            };
        }

        public async Task<bool> IsInRoleAsync(string userId, string role)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == userId);

            if (user == null)
            {
                throw new Exception("User not found");
            }

            return await _userManager.IsInRoleAsync(user, role);
        }

        public async Task<List<string>> GetUserRolesAsync(string userId)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == userId);

            if (user == null)
            {
                throw new Exception("User not found");
            }

            var roles = await _userManager.GetRolesAsync(user);

            return roles.ToList();
        }

        public async Task<bool> AssignUserToRole(string userName, IList<string> roles)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName == userName);

            if (user == null)
            {
                throw new Exception("User not found");
            }

            var result = await _userManager.AddToRolesAsync(user, roles);
            return result.Succeeded;
        }
        public async Task<List<UserRoleViewModel>> GetUsersDetailsAsync()
        {
            var UserRolesView = new List<UserRoleViewModel>();
            var userRoles = _smfcontext.UserRoles.ToList();

            foreach (var userrole in userRoles)
            {
                
                var identitynumber = _smfcontext.Users.Where(x => x.Id == userrole.UserId).FirstOrDefault();
                var email = _smfcontext.Users.Where(x => x.Id == userrole.UserId).FirstOrDefault();
                var username = _smfcontext.Users.Where(x => x.Id == userrole.UserId).FirstOrDefault();
                var role = _smfcontext.Roles.Where(x => x.Id == userrole.RoleId).FirstOrDefault();
                var userid=_userManager.Users.Where(x => x.Id == userrole.UserId).FirstOrDefault();
                UserRolesView.Add(new UserRoleViewModel(username.UserName, role.Name, email.Email, identitynumber.IdentityNumber, userid.Id));
            }
            return UserRolesView;
        }

        public async Task<bool> DeleteUserAsync(string userId)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == userId);
            if (user == null)
            {
                throw new Exception("User not found");
                //throw new Exception("User not found");
            }

            if (user.UserName == "system" || user.UserName == "admin")
            {
                throw new Exception("You can not delete system or admin user");
                //throw new BadRequestException("You can not delete system or admin user");
            }
            var result = await _userManager.DeleteAsync(user);
            return result.Succeeded;
        }

        public async Task<Unit> AddSquadsToLeague(LeagueSquadDto dto)
        {
            var league = await _smfcontext.Leagues.FindAsync(dto.LeaguesLeagueId);

            /*var squads = await _smfcontext.Squads.Where(x => x.Squads == dto.SquadsTeamId).FirstOrDefaultAsync();*/

            var userRoles = _smfcontext.Squads;

            foreach (var userrole in userRoles)
            {

                var identitynumber = _smfcontext.Squads.Where(x => x.TeamId == userrole.TeamId).FirstOrDefault();

                league.Squads.Add(userrole);
            }

            if (league == null)
            {
                throw new Exception("League not found");
            }

            /*league.Squads.Add(squads);*/

            /*league.Squads.AddAsync(squads);*/

            /*_smfcontext.AddAsync(dto);*/

            await _smfcontext.SaveChangesAsync();

            return Unit.Value;

        }
    }
}
