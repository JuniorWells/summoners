namespace Summoners.Api.Models;

public class Post
{
    public int Id { get; set; }
    public int SummonerId { get; set; }
    public User? User { get; set; }
    public string? Image { get; set; }
    public string? Description { get; set; }
    public List<Comment>? Comments { get; set; }
}