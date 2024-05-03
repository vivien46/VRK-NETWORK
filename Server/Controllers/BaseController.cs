using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Server.Database;

public abstract class BaseController<T> : ControllerBase where T : class
{
    private readonly DataContext _context;
    private readonly DbSet<T> _entities;

    public BaseController(DataContext context, Func<DataContext, DbSet<T>> dbSetAccessor)
    {
        _context = context;
        _entities = dbSetAccessor(context);
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<T>>> GetAll()
    {
        return await _entities.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<T>> GetById(int id)
    {
        T item = await _entities.FindAsync(id);

        if (item == null)
        {
            return NotFound();
        }

        return item;
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, T item)
    {
       int itemId = GetItemId(item);
        if (id != itemId)
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
            if (!await _entities.AnyAsync(i => GetItemId(i) == itemId))
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
        _entities.Add(item);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(Create),
            new { id = GetItemId(item) },
            item
        );
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        T item = await _entities.FindAsync(id);
        if (item == null)
        {
            return NotFound();
        }

        _entities.Remove(item);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private int GetItemId(T item)
    {
        return 8; // A corriger
    }
}
