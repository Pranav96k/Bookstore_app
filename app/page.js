// pages/index.js
"use client"
import React, { useState, useEffect } from 'react';
import OpeningPage from './components/OpeningPage';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;

  // Fetch books based on currentPage using an API call.
  useEffect(() => {
    // Implement API call to fetch books for the current page.
    // Update the 'books' state with the fetched data.
  }, [currentPage]);

  // Define functions to handle pagination (Next and Previous buttons).
  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <OpeningPage
        books={books} // Pass the fetched books data as a prop
        currentPage={currentPage}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </div>
  );
};

export default Home;
