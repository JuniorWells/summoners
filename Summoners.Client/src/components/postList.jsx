import '../styles/postList.css'

const PostList = ({ extraData }) => {
    const profileIcon = `http://ddragon.leagueoflegends.com/cdn/12.13.1/img/profileicon/${extraData.profileIconId}.png`
    return (
        <div className="postList__wrapper">
            <div className="postList">
                <div className='post__create'>
                    <h4>Create a Post here</h4>
                </div>
                <div className='post__board'>
                    <h4>Post Board to show all Posts</h4>
                    <div className='post__item'>
                    <img className='postList__dp' src={profileIcon}/>
                    <h5>This is my first post</h5>
                    </div>
                    <div className='post__item'>
                    <img className='postList__dp' src={profileIcon}/>
                    <h5>This is my second post</h5>
                    </div>
                    <div className='post__item'>
                    <img className='postList__dp' src={profileIcon}/>
                    <h5>This is my third post</h5>
                    </div>
                    <div className='post__item'>
                    <img className='postList__dp' src={profileIcon}/>
                    <h5>This is my scroll post</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostList;