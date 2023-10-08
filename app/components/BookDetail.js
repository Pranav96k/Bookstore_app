// BookDetail.js
import React from 'react';

const BookDetail = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      {/* Add other book details here */}
    </div>
  );
};

export default BookDetail;
