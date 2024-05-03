using Microsoft.AspNetCore.Mvc;
using Server.Database;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReactionsController : BaseController<Reaction>
    {
        public ReactionsController(DataContext context) : base(context, c => c.Reactions)
        {
        }
    }
}
