import React from 'react';

const SearchResult = ({ book }) => {
  if (!book) {
    return <div></div>;
  }

  const isPaid = book.price ? 'Paid' : 'Free';
<<<<<<< HEAD
  const buttonColorClass = book.price ? 'bg-blue-400' : 'bg-green-400';
  const textColorClass = book.price ? 'text-blue-900' : 'text-green-900';

  return (
    <>
    <div className="flex items-center justify-center ">
      <img src={book.coverImage} alt={book.title} />
    </div>  
    <div className='text-center'>
=======
  const buttonColorClass = book.price ? 'bg-blue-500' : 'bg-green-500';

  return (
    <>
    <div className='flex items-center justify-center'>
      <img src={book.coverImage} alt={book.title} />
    </div>
    <div className=' text-center'>
>>>>>>> 093bd1c (new deploy)
      <h2 className='text-2xl font-bold'>{book.title}</h2>
      <p className='py-2'>Author: {book.author}</p>
      <p className='py-2'>Genre: {book.genre}</p>
      <p className='py-2'>Publication Date: {book.publicationdate}</p>
<<<<<<< HEAD
      <span className={`py-2 ${buttonColorClass} ${textColorClass} rounded px-2 inline-block`}>
          {isPaid}
        </span> 
      {/* Add other book details here */}
    </div>
    </>
=======
      <p className={`py-2 ${buttonColorClass} text-white rounded px-2 inline-block text-xl`}>
          {isPaid}
        </p> {/* Display "Paid" or "Free" with background color */}
      {/* Add other book details here */}
    </div>  
    </>
    
>>>>>>> 093bd1c (new deploy)
  );
};

export default SearchResult;
