using Microsoft.AspNetCore.Mvc;
using Server.Database;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController : BaseController<Notification>
    {
        public NotificationsController(DataContext context)
            : base(context, c => c.Notifications) { }
    }
}
