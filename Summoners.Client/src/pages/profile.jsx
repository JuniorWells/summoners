import Header from '../components/header';
import '../styles/search.css';
import '../styles/profile.css';
import SearchBar from '../components/searchBar';


export default function Profile() {
   
    return (
      <>
        <Header/>
        <div className="profile-background">
        <div className='profile-wrapper'>
          <div className='profile__search'>
            <SearchBar/>
          </div>
          </div>
        </div>
      </>
    );
  }