namespace Server.Models
{
    public sealed class UserGroup : ModelBase
    {
        public int IdUser { get; set; }
        public User User { get; set; } = null!;

        public int IdGroup { get; set; }
        public Group Group { get; set; } = null!;
    }
}