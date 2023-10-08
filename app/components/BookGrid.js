import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { fetchBooks } from './api';
import BookCard from './BookCard'; // Import BookCard component
import Pagination from './Pagination'; // Import Pagination component

const BookGrid = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items to display on each page

  useEffect(() => {
    const getBooks = async () => {
      try {
        const bookData = await fetchBooks();
        setBooks(bookData);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    getBooks();
  }, []);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the books array to display only the items for the current page
  const booksToDisplay = books.slice(startIndex, endIndex);


  return (
    <div>
      <div className="book-grid">
        {booksToDisplay.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(books.length / itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
  // return (
  //   <div>
  //     <div className="book-grid">
  //       {booksToDisplay.map((book) => (
  //         <BookCard key={book._id} book={book} />
  //       ))}
  //     </div>
  //     <Pagination
  //       currentPage={currentPage}
  //       totalPages={Math.ceil(books.length / itemsPerPage)}
  //       onPageChange={(page) => setCurrentPage(page)}
  //     />
  //   </div>
  // );

  const apiUrl = 'http://localhost:5000';
return (
  <div>
    <div className="book-grid">
      {booksToDisplay.map((book) => (
        <Link key={book._id} href={`/components/index`}>
          <div>
            <BookCard book={book} />
          </div>
        </Link>
      ))}
    </div>
    <Pagination
      currentPage={currentPage}
      totalPages={Math.ceil(books.length / itemsPerPage)}
      onPageChange={(page) => setCurrentPage(page)}
    />
  </div>
);
  


};

export default BookGrid;
