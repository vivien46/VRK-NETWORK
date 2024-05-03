namespace Server.Models
{
    public sealed class Conversation : ModelBase
    {
        public int IdUser { get; set; }
    }

    //penser à mettre la jointure en manyToMany entre user et conversation
}
