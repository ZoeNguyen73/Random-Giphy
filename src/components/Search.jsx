import {useRef} from 'react';
import './Search.css';

function Search(props) {

  const formObj = {
    searchRef: useRef()
  };

  const searchSubmit = (evnt) => {
    evnt.preventDefault(); // this is to stop the page from refreshing
    const searchTerm = formObj.searchRef.current.value;
    props.onSearchSubmit(searchTerm);
  }

  return (
    <form onSubmit={searchSubmit}>
      <label>
        <h2>Search a Gif</h2>
        <input
          placeholder="search GIF by keyword"
          type="text"
          ref={formObj.searchRef}
        />
      </label>
      <input className='button' type="submit" value="Submit" />
    </form>
  )

}

export default Search;