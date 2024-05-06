using Microsoft.AspNetCore.Mvc;
using Server.Database;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupsController : BaseController<Group>
    {
        public GroupsController(DataContext context)
            : base(context, c => c.Groups) { }
    }
}
