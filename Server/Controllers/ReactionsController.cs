using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Database;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReactionsController : ControllerBase
    {
        #region attributes
        private readonly DataContext _context;
        #endregion

        #region constructor
        public ReactionsController(DataContext context)
        {
            _context = context;
        }
        #endregion

        #region CRUD

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reaction>>> GetReactions()
        {
            return await _context.Reactions.ToListAsync();
        }

        // GET: api/Reactions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Reaction>> GetReactions(int id)
        {
            var Reactions = await _context.Reactions.FindAsync(id);

            if (Reactions == null)
            {
                return NotFound();
            }

            return Reactions;
        }

        // PUT: api/Reactions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReactions(int id, Reaction Reactions)
        {
            if (id != Reactions.Id)
            {
                return BadRequest();
            }

            _context.Entry(Reactions).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReactionsExists(id))
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

        // POST: api/Reactions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Reaction>> PostReactions(Reaction Reactions)
        {
            _context.Reactions.Add(Reactions);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetReactions", new { id = Reactions.Id }, Reactions);
            return CreatedAtAction(nameof(PostReactions), new { id = Reactions.Id }, Reactions);
        }

        // DELETE: api/Reactions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReactions(int id)
        {
            var Reactions = await _context.Reactions.FindAsync(id);
            if (Reactions == null)
            {
                return NotFound();
            }

            _context.Reactions.Remove(Reactions);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReactionsExists(int id)
        {
            return _context.Reactions.Any(e => e.Id == id);
        }
    }
        #endregion
}
