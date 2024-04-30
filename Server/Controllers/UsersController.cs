﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Server.Database;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        #region attributes
        private readonly DataContext _context;
        #endregion

        #region constructor
        public UsersController(DataContext context)
        {
            _context = context;
        }
        #endregion

        #region CRUD

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUsers(int id)
        {
            var users = await _context.Users.FindAsync(id);

            if (users == null)
            {
                return NotFound();
            }

            return users;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsers(long id, User Users)
        {
            if (id != Users.Id)
            {
                return BadRequest();
            }

            _context.Entry(Users).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsersExists(id))
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

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUsers(User Users)
        {
            _context.Users.Add(Users);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetUsers", new { id = Users.Id }, Users);
            return CreatedAtAction(nameof(PostUsers), new { id = Users.Id }, Users);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsers(long id)
        {
            var Users = await _context.Users.FindAsync(id);
            if (Users == null)
            {
                return NotFound();
            }

            _context.Users.Remove(Users);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsersExists(long id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
    #endregion
   
