// pages/books/[bookId].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const BookDetailPage = () => {
  const router = useRouter();
  const { bookId } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (bookId) {
      // Fetch book details using the API route
      fetch(`/${bookId}`) // Use the correct API route
        .then((response) => response.json())
        .then((data) => setBook(data))
        .catch((error) => console.error('Error fetching book details:', error));
    }
  }, [bookId]);

  return (
    <div>
      <h1>Book Details</h1>
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          {/* Add other book details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetailPage;
