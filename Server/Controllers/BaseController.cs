using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Database;
using Server.Models;

namespace Server.Controllers
{

    public abstract class BaseController<T> : ControllerBase where T : class
    {
        #region attributes
        private readonly DataContext _context;
        #endregion

        #region constructor
        public BaseController(DataContext context)
        {
            _context = context;
        }
        #endregion

        #region CRUD

        [HttpGet]
        public async Task<ActionResult<IEnumerable<T>>> GetAll()
        {
            return await _context.T.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<T>> GetById(int id)
        {
            T item = await _context.T.FindAsync(id);

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, T item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.T.Any(i => i.Id == id))
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
        public async Task<ActionResult<T>> Create(T item)
        {
            _context.T.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(Create),
                new { id = item.Id },
                item
            );
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            T item = await _context.T.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            _context.T.Remove(item);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        #endregion
    }
}
