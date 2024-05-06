using Microsoft.AspNetCore.Mvc;
using Server.Database;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : BaseController<User>
    {
        public UsersController(DataContext context)
            : base(context, c => c.Users) { }
    }
}
