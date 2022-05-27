namespace SpartanManageFootball.Interfaces
{
    public interface IIdentityService
    {
        public Task<(string userId, string fullName, string UserName, string email, IList<string> roles)> GetUserDetailsAsync(string userId);
        Task<List<(string id, string roleName)>> GetRolesAsync();
        Task<(string id, string roleName)> GetRoleByIdAsync(string id);
        Task<string> GetUserIdAsync(string userName);
        Task<bool> SigninUserAsync(string email, string password);
     //  Task<bool> ForgetPasswordAsync(string email);
        
    }
}
