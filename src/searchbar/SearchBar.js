// SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS file
import { searchAllBooksAPI } from '../API/API';
import { useDispatch } from 'react-redux';
import { setBooksData } from '../redux/reducer/booksReducer';

const SearchBar = ({ }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    searchAllBooksAPI(searchTerm, (res) => {
      if (res !== null) {
        dispatch(setBooksData(res?.data))
      }
    });
  };

  return (

    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>


    </div>



  );
};

export default SearchBar;
