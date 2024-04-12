using Microsoft.AspNetCore.Identity;

namespace Server.Models
{
    public sealed class Notification : ModelBase
    {
        public int IdUser { get; set; }
        public string Content { get; set; } = null!;
        public bool Seen { get; set; } = false;
    }
}
