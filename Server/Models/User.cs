namespace Server.Models
{
    public sealed class User : ModelBase
    {
        public string Username { get; set; } = null!;
        //public string Password { get; set; } = null!; // à hacher
        public string Email { get; set; } = null!;
        public enum Role
        {
            User = 0,
            Administrator = 1
        }
    }
}
