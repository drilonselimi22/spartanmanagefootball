namespace SpartanManageFootball.Models
{
    public class UserRoleViewModel
    {
        public string Username { get; set; }
        public string RoleName { get; set; }
        public string Email { get; set; }
        public int IdentityNumber { get; set; }

        public UserRoleViewModel(string Username, string RoleName, string Email, int IdentityNumber)
        {
            this.Username = Username;
            this.RoleName = RoleName;
            this.Email = Email;
            this.IdentityNumber = IdentityNumber;
        }
    }
}
