import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} />
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      {/* Add other book details as needed */}
    </div>
  );
};

export default BookCard;
