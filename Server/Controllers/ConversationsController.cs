using Microsoft.AspNetCore.Mvc;
using Server.Database;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConversationsController : BaseController<Conversation>
    {
        public ConversationsController(DataContext context) : base(context, c => c.Conversations)
        {
        }
    }
}
