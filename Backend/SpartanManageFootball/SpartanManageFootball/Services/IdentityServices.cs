using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.EntityFrameworkCore;
using SpartanManageFootball.Interfaces;
using System.Text;

namespace SpartanManageFootball.Services
{
    public class IdentityServices : IIdentityService
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IEmailSender _emailSender;
        private readonly  IConfiguration configuration;



        public IdentityServices(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager,IEmailSender emailSender, RoleManager<IdentityRole> roleManager, IConfiguration _configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _emailSender = emailSender;
            _configuration= configuration;
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
                //throw new Exception("User not found");
            }
            return await _userManager.GetUserIdAsync(user);
        }
        public async Task<bool> SigninUserAsync(string email, string password)
        {
            var result = await _signInManager.PasswordSignInAsync(email, password, true, false);
            return result.Succeeded;


        }
      
      /*  public async Task<bool> ForgetPasswordaSync(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
               
            {
                return false;
            };

            var token= await _userManager.GenerateEmailConfirmationTokenAsync(user);
            var enCodedPasswordToken = Encoding.UTF8.GetBytes(token);
            var validPasswordToken = WebEncoders.Base64UrlEncode(enCodedPasswordToken);
            string url = $"http://localhost:7122/api/User/resetpassword?email={email}&token={validPasswordToken}";


            var senderEmail = configuration["ReturnPaths:SenderEmail"];
            await _emailSender.SendEmailAsync(senderEmail, user.Email, "Reset your password", url);

            return true;    

        }

*/       

   
    
    }
}
