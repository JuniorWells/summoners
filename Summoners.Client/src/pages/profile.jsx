import Header from '../components/header';
import '../styles/search.css';
import {
  bg2
} from '../components/images'
import SearchBar from '../components/searchBar';


export default function Profile() {
   
    return (
      <>
        <Header/>
        <div className="search-background" style={{ backgroundImage: `url(${bg2})` }}>
        <div>
            <h2 className='search__contents'>
              This is our Search Page
            </h2>
            <SearchBar/>
          </div>
        </div>
      </>
    );
  }