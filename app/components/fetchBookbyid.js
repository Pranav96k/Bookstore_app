import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BookDetails = () => {
  const router = useRouter();
  const { bookId } = router.query;
  const [book, setBook] = useState(null);

  const apiUrl = 'http://localhost:5000';

  useEffect(() => {
    // Fetch book details from your Flask API using Axios
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`${apiUrl}/books/${bookId}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    if (bookId) {
      fetchBookDetails();
    }
  }, [bookId]);

  if (!book) {
    // Handle the case where the book is still loading or not found
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      {/* Add other book details here */}
    </div>
  );
};

export default BookDetails;
