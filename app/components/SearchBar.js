import React from 'react';

const SearchBar = ({ searchQuery, handleSearchInputChange, handleSearchSubmit }) => {
  return (
    <div>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">Bookstore</h1>
      <input
        type="text"
        placeholder="Search for a book"
        className="text-2xl border-zinc-800 border-2 m-5 px-5 py-2"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button className="btn" onClick={handleSearchSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
