import '../styles/postList.css';
import CreatePost from './createPost';
import Post from './post';
import { useEffect } from 'react';
import { useState } from 'react';

const PostList = ( {postList, name} ) => {

    const [flag, setFlag] = useState([false]);

    useEffect(() => {
        
    }, [flag]);



    return (
        <div className="postList__wrapper">
            <div className="postList">
                <CreatePost name={name} flag={flag} setFlag={setFlag} />
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