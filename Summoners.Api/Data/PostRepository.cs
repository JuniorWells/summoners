// using Summoners.Api.Models;

// namespace Summoners.Api.Data;

// public class PostRepository
// {
//     private readonly SummonersContext _context;
//     public PostRepository(SummonersContext context) => _context = context;
//     public Post Create(string summonerName, PostDTO postDTO)
//     {
// 		var user = GetOrCreateUser(summonerName);

// 		var post = new Post
// 		{
// 			SummonerId = user.Id,
// 			Title = postDTO.Title,
// 			Description = postDTO.Description
// 		};

// 		_context.Posts.Add(post);
// 		_context.SaveChanges();
// 		return post;
//     }

//     public void Delete(int id)
//     {
//       var post = GetOne(id);
//       if (post == null)
//         return;

//       _context.Posts.Remove(post);
//       _context.SaveChanges();
//     }

//     // public IEnumerable<Post> GetAll() => _context.Posts.ToList();

//     public Post GetOne(int id) =>
// 		// if (_context.Posts.Count() == 0)
// 		// 	return 
// 		_context.Posts.Where(c => c.Id == id)
// 			.SingleOrDefault();

// 	public IEnumerable<Post> GetPostsForUser(int userId) =>
// 		_context.Posts.Where(c => c.SummonerId == userId);

//     public bool SaveChanges() => (_context.SaveChanges() >= 0);
//     public Post Update(string id, string name, string from, string to)
//     {
//       var Post = GetOne(id);

//       Post.Name = name;
//       Post.To = to;
//       Post.From = from;

//       var updatedPost = _context.Posts.Update(Post);
//       _context.SaveChanges();
//       return updatedPost.Entity;
//     }

// }

