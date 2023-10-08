import React, { useState, useEffect } from 'react';
import { fetchBookByQuery  } from './fetchbookbyquery'; // Import the function to fetch books by query

import SearchBar from './SearchBar'; // Import the SearchBar component
import SearchResult from './SearchResult'; // Import the SearchResult component

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);


  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async () => {
    // Fetch the book by query and set the result
    const book = await fetchBookByQuery(searchQuery);
    setSearchResult(book);
  };

  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchInputChange={handleSearchInputChange}
        handleSearchSubmit={handleSearchSubmit}
      />
      <SearchResult book={searchResult} />
    </div>
  );
};

export default SearchPage;
