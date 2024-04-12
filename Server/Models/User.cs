using Microsoft.Net.Http.Headers;

namespace Server.Models
{
    public sealed class User : ModelBase
    {
        public string Username { get; set; } = null!;
        //public string Password { get; set; } = null!; // à hacher
        public string Email { get; set; } = null!;
        // public enum Role
        // {
        //     User = 0,
        //     Administrator = 1
        // }
        public string? Avatar { get; set; } = null; 
        public DateTime? LastLoginDate { get; set; } = null; 
        public enum UserStatus 
        {
            Online = 0,
            Offline = 1,
            Busy = 2,
            Away = 3,
        }
        public UserStatus Status { get; set; } = UserStatus.Offline;
    }
}
