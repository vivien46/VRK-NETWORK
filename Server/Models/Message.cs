namespace Server.Models
{
    public sealed class Message : ModelBase
    {
        public int IdConversation { get; set; }
        public int IdUser { get; set; }
        public string Content { get; set; } = null!;
        //public bool ReadStatus { get; set; } = null; 
    }
}
