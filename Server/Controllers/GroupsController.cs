using System.CodeDom.Compiler;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Database;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class GroupsController : ControllerBase
    {
        #region attributes
        private readonly DataContext _context;
        #endregion

        #region constructor
        public GroupsController(DataContext context)
        {
            _context = context;
        }
        #endregion

        #region CRUD
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Group>>> GetGroups()
        {
            return await _context.Groups.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Group>> GetGroup(int id)
        {
            Groups groups = await _context.Groups.FindAsync(id);

            if (groups == null)
            {
                return NoContent();
            }
            return groups;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutGroups(int id, Group Groups)
        {
            if (id != Groups.Id)
            {
                return BadRequest();
            }
            _context.Entry(Groups).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GroupsExists(id))
                {
                    return NoContent();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Group>> PostGroups(Group groups)
        {
            _context.Groups.Add(groups);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(PostGroups), new { id = groups.Id }, groups);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGroups(int id)
        {
            var Groups = await _context.Groups.FindAsync(id);

            if (Groups == null)
            {
                return NotFound();
            }

            _context.Groups.Remove(Groups);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GroupsExists(int id)
        {
            return _context.Groups.Any(e => e.Id == id);
        }
    }
        #endregion
}
