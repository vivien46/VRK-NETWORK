using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    public abstract class ModelBase
    {
        #region attributes
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public bool IsDeleted { get; set; } = false;
        public DateTime? DeletedOn { get; set; } = null;
        #endregion

        #region methods
        public void Delete()
        {
            if (!IsDeleted)
            {
                IsDeleted = true;
                DeletedOn = DateTime.Now;
            }
        }
        #endregion
    }
}
