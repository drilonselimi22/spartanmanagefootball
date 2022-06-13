﻿using SpartanManageFootball.Models;

namespace SpartanManageFootball.Interfaces
{
    public interface IIdentityService
    {
        Task<(string userId, string fullName, string UserName, string email, IList<string> roles)> GetUserDetailsAsync(string userId);
        Task<List<(string id, string roleName)>> GetRolesAsync();
        Task<(string id, string roleName)> GetRoleByIdAsync(string id);
        Task<string> GetUserIdAsync(string userName);
        Task<bool> SigninUserAsync(string email, string password);
        Task<UserManagerResponse> ForgetPasswordAsync(string email);
        Task<UserManagerResponse> ResetPasswordAsync(ResetPasswordViewModel model);
        Task<List<UserRoleViewModel>> GetUsersDetailsAsync();
        Task<bool> IsInRoleAsync(string userId, string role);
        Task<List<string>> GetUserRolesAsync(string userId);
        Task<bool> AssignUserToRole(string userName, IList<string> roles);
        Task<bool> UpdateUsersRole(string userName, IList<string> usersRole);
        Task<bool> DeleteUserAsync(string userId);

    }

}
