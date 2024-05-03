using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Database;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        #region Attributes

        private readonly DataContext _context;

        #endregion

        #region Constructor

        public MessagesController(DataContext context)
        {
            _context = context;
        }

        #endregion

        #region CRUD

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Message>>> GetMessages()
        {
            return await _context.Messages.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Message>> GetMessages(int id)
        {
            var messages = await _context.Messages.FindAsync(id);

            if (messages == null)
            {
                return NotFound();
            }

            return messages;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutMessages(int id, Message Messages)
        {
            if (id != Messages.Id)
            {
                return BadRequest();
            }

            _context.Entry(Messages).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MessagesExists(id))
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

        [HttpPost]
        public async Task<ActionResult<Message>> PostMessages(Message Messages)
        {
            _context.Messages.Add(Messages);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetMessages", new { id = Messages.Id }, Messages);
            return CreatedAtAction(nameof(PostMessages), new { id = Messages.Id }, Messages);
        }

        // DELETE: api/Messages/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMessages(int id)
        {
            var Messages = await _context.Messages.FindAsync(id);
            if (Messages == null)
            {
                return NotFound();
            }

            _context.Messages.Remove(Messages);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MessagesExists(int id)
        {
            return _context.Messages.Any(e => e.Id == id);
        }
    }
        #endregion
}
