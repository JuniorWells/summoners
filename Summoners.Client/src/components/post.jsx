import '../styles/post.css'
import LOLBackground from '../assets/images/league-of-legends.jpg';
import LOLBackgroundALT from '../assets/images/League-Jinx.jpg';

const Post = ({ postId, title, description, summonerName, flag, setFlag }) => {

    const handleDelete = async (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'DELETE',
            mode: 'cors',
            headers: myHeaders,
            // body: body,
            redirect: 'follow'
        };
        const response = await fetch(`https://localhost:7261/api/Post/${postId}`, requestOptions);
        setFlag(!flag);
    }

    return (
        <div className='postdiv'> 
            <div>
                <button onClick={handleDelete}>X</button>
            </div>
            <a href="" className="postcard">
            <img src={LOLBackground} className="postcard__image" alt="summoner icon" />
            <div className="postcard__overlay">
                <div className="postcard__header">
                <svg className="postcard__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                </svg>
                <img className="postcard__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                <div className="postcard__header-text">
                    <h3 className="postcard__title">title</h3>
                    <span className="postcard__tagline">Summoner Name</span>
                </div>
                </div>
                <p className="postcard__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis voluptate fuga ipsam aperiam nisi a non saepe et hic. Dolore sunt dolorum, itaque consequuntur distinctio dolor numquam ex. Expedita, fuga. </p>
            </div>
            </a>
            
        </div>
    );
};

export default Post;