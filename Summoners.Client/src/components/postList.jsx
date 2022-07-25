import '../styles/postList.css';
import Post from './post';

const PostList = ( {postList} ) => {
    return (
        <div className="postList__wrapper">
            <div className="postList">
                {postList.map((item) => {
                    return (
                        <Post key={item.postId} postId={item.postId} title={item.title} description={item.description} />
                    )
                })}
                {/* <h1>Posts</h1> */}
            </div>
        </div>
    );
}

export default PostList;