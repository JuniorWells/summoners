import Header from '../components/header';
import '../styles/search.css';
import {
  bg2
} from '../components/images'

export default function Search() {
    return (
      <>
        <Header/>
        <div className="search-background" style={{ backgroundImage: `url(${bg2})` }}>
        <div>
            <h2 className='search__contents'>
              This is our Search Page
            </h2>
          </div>
        </div>
      </>
    );
  }