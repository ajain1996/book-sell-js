// SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS file

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
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
