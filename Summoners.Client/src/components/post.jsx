import '../styles/post.css'
import LOLBackground from '../assets/images/league-of-legends.jpg';
import LOLBackgroundALT from '../assets/images/League-Jinx.jpg';

const Post = ({ postId, title, description, summonerName }) => {
    return (
        <div className='postdiv'> 
            
            <a href="" class="postcard">
            <img src={LOLBackground} class="postcard__image" alt="summoner icon" />
            <div class="postcard__overlay">
                <div class="postcard__header">
                <svg class="postcard__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                </svg>
                <img class="postcard__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                <div class="postcard__header-text">
                    <h3 class="postcard__title">title</h3>
                    <span class="postcard__tagline">Summoner Name</span>
                    {/* <span class="card__status">1 hour ago</span> */}
                </div>
                </div>
                <p class="postcard__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis voluptate fuga ipsam aperiam nisi a non saepe et hic. Dolore sunt dolorum, itaque consequuntur distinctio dolor numquam ex. Expedita, fuga. </p>
            </div>
            </a>
            
        </div>
    );
};

export default Post;