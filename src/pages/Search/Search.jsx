import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <h2>Search for a Show</h2>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a show"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div
              className="search-result-card"
              key={result.show.id}
              onClick={() => navigate(`/details/${result.show.id}`)}
            >
              <img
                src={result.show.image?.medium || 'https://via.placeholder.com/210x295'}
                alt={result.show.name}
              />
              <p>{result.show.name}</p>
            </div>
          ))
        ) : (
          <p>No results found. Try searching for a show.</p>
        )}
      </div>

      <button className="home-button" onClick={handleHomeClick}>
        Go to Home
      </button>
    </div>
  );
};

export default Search;
