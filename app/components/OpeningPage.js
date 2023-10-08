// components/OpeningPage.js
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import BookGrid from './BookGrid';
import Pagination from './Pagination';

const OpeningPage = () => {
  // State for book data, search query, and current page
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;

  // Mock book data (replace with API call)
  const mockBooks = [
    // Your book objects here
  ];

  // Simulate fetching data when the component mounts
  useEffect(() => {
    // You can replace this with an actual API call
    setTimeout(() => {
      setBooks(mockBooks);
    }, 1000);
  }, []);

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset page to 1 when a new search is performed
  };

  // Function to handle pagination (next page)
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Function to handle pagination (previous page)
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Filter and paginate book data based on search and current page
  const filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(
      (currentPage - 1) * booksPerPage,
      currentPage * booksPerPage
    );

  return (
    <div>
      <h1>Bookstore</h1>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchInputChange={handleSearchInputChange}
      />
      <BookGrid books={filteredBooks} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredBooks.length / booksPerPage)}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default OpeningPage;
