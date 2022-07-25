using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Summoners.Api.Models;
// using Summoners.Api.Data;

namespace Summoners.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly SummonersContext _context;

        public PostController(SummonersContext context)
        {
            _context = context;
        }

        // Unnecessary atm
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Post>>> GetAllPosts()
        {
            if (_context.Posts == null)
            {
                return NotFound();
            }

            return await _context.Posts.ToListAsync();
        }

        // GET: api/Post
        [HttpGet("{name}")]
        public async Task<ActionResult<IEnumerable<Post>>> GetPosts(string name)
        {
            if (_context.Posts == null)
            {
                return NotFound();
            }

            var user = await GetOrCreateUser(name);

            var posts = await _context.Posts
                .Where(c => c.UserId == user.Id)
                .ToListAsync();

            var postDTO = new List<PostDTO>();

            foreach (var p in posts)
            {
                postDTO.Add(
                    new PostDTO
                    {
                        PostId = p.Id,
                        Title = p.Title,
                        Description = p.Description
                    });
            }

            return Ok(postDTO);
        }

        [HttpGet("{id}/comments")]
        public async Task<ActionResult<IEnumerable<CommentDTO>>> GetComments(int id)
        {
            if (_context.Comments == null)
            {
                return NotFound();
            }

            var comments =  await _context.Comments.ToListAsync();

            var commentDTO = new List<CommentDTO>();

            foreach(var c in comments)
            {
                commentDTO.Add(
                    new CommentDTO
                    {
                        Text = c.Text,
                        Author = c.Author,
                        PostId = c.PostId
                    }
                );
            }

            return commentDTO;
        }

        // POST: api/Post/{name}
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{name}")]
        public async Task<ActionResult<Post>> PostPost(string name, PostDTO postDTO)
        {
            if (_context.Posts == null)
            {
                return Problem("Entity set 'SummonersContext.Posts'  is null.");
            }

            var user = await GetOrCreateUser(name);

            _context.Posts.Add(
                new Post
                {
                    UserId = user.Id,
                    Title = postDTO.Title,
                    Description = postDTO.Description
                }
            );
            await _context.SaveChangesAsync();

            return Ok();
        }

         // POST: api/Post/{id}/comments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}/comments")]
        public async Task<ActionResult<Post>> PostComment(int id, CommentDTO commentDTO)
        {

            if (id != commentDTO.PostId)
            {
                return BadRequest();
            }

            if (!PostExists(id))
            {
                return NotFound();
            }

            _context.Comments.Add(
                new Comment
                {
                    Author = commentDTO.Author,
                    Text = commentDTO.Text,
                    PostId = commentDTO.PostId
                }
            );

            await _context.SaveChangesAsync();

            return Ok();
        }
    
        // DELETE: api/Post/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            if (_context.Posts == null)
            {
                return NotFound();
            }

            var post = await _context.Posts.FindAsync(id);

            if (post == null)
            {
                return NotFound();
            }

            _context.Posts.Remove(post);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private async Task<User> GetOrCreateUser(string summonerName)
        {
            var user = await _context.Users
                .Where(c => c.SummonerName == summonerName)
                .SingleOrDefaultAsync();

            if (_context.Users.Count() == 0 || user == null)
            {
                var newUser = new User
                {
                    SummonerName = summonerName
                };
                _context.Users.Add(newUser);
                await _context.SaveChangesAsync();
                user = newUser;
            }

            return user;
        }

        private bool PostExists(int id)
        {
            return (_context.Posts?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
