using Microsoft.AspNetCore.Mvc;
using Server.Database;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : BaseController<Message>
    {
        public MessagesController(DataContext context)
            : base(context, c => c.Messages) { }
    }
}
