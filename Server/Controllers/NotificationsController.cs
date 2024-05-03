using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Database;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController : ControllerBase
    {
        #region attributes
        private readonly DataContext _context;
        #endregion

        #region constructor
        public NotificationsController(DataContext context)
        {
            _context = context;
        }
        #endregion

        #region CRUD

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Notification>>> GetNotifications()
        {
            return await _context.Notifications.ToListAsync();
        }

        // GET: api/Notifications/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Notification>> GetNotifications(int id)
        {
            var Notifications = await _context.Notifications.FindAsync(id);

            if (Notifications == null)
            {
                return NotFound();
            }

            return Notifications;
        }

        // PUT: api/Notifications/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNotifications(int id, Notification Notifications)
        {
            if (id != Notifications.Id)
            {
                return BadRequest();
            }

            _context.Entry(Notifications).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NotificationsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Notifications
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Notification>> PostNotifications(Notification Notifications)
        {
            _context.Notifications.Add(Notifications);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetNotifications", new { id = Notifications.Id }, Notifications);
            return CreatedAtAction(
                nameof(PostNotifications),
                new { id = Notifications.Id },
                Notifications
            );
        }

        // DELETE: api/Notifications/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNotifications(int id)
        {
            var Notifications = await _context.Notifications.FindAsync(id);
            if (Notifications == null)
            {
                return NotFound();
            }

            _context.Notifications.Remove(Notifications);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NotificationsExists(int id)
        {
            return _context.Notifications.Any(e => e.Id == id);
        }
    }
        #endregion
}
