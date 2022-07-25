const Post = ({ postId, title, description }) => {
    return (
        <div>
            <h1>{postId}</h1>
            <h1>{title}</h1>
            <h1>{description}</h1>
        </div>
    );
};

export default Post;