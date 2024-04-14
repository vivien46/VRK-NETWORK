using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    public sealed class Group : ModelBase
    {
        public string? GroupName {  get; set; }

        [Column(TypeName = "text")]
        public string? Description { get; set; }
        public int IdUser { get; set; }
    }
}
