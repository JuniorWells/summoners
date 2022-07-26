import '../styles/post.css'
import LOLBackground from '../assets/images/league-of-legends.jpg';
import LOLBackgroundALT from '../assets/images/League-Jinx.jpg';
import CreateComment from './createComment';
import CommentList from './commentList';
import { useState, useEffect } from 'react';
import { getComments } from '../utils/postsApi';

const Post = ({ postId, title, description, summonerName, flag, setFlag }) => {

    const [comments, setComments] = useState([]);

    const handleDelete = async (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'DELETE',
            mode: 'cors',
            headers: myHeaders,
            redirect: 'follow'
        };
        const response = await fetch(`https://localhost:7261/api/Post/${postId}`, requestOptions);
        setFlag(!flag);
    }

    const handleComments = async () => {
        setComments(await getComments(postId));
    }

    return (
        <div className='postdiv'> 
            <div>
                <button onClick={handleDelete}>X</button>
            </div>
            <div class="blog_post">
                <div class="img_pod">
                    <img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg" alt="random image" />
                </div>
                <div class="container_copy">
                    <h3>{summonerName}</h3>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <a class="btn_primary" href='#' target="_blank">Read More</a>
                </div>
            </div>
            <CreateComment postId={postId} flag={flag} setFlag={setFlag} />
            <CommentList commentList={comments} />
            <div>
                <button onClick={handleComments}>See comments</button>
            </div>
        </div>
    );
};

export default Post;