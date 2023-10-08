
// // components/Pagination.js
// import React from 'react';

// const Pagination = ({ currentPage, totalPages, nextPage, prevPage }) => {
//   return (
//     <div className="pagination">
//       <button onClick={prevPage} className="px-3 py-1 m-5 bg-black text-white text-2xl rounded">Previous</button>
//       <span>Page {currentPage} of {totalPages}</span>
//       <button onClick={nextPage} className="px-3 py-1 m-5 bg-black text-white text-2xl rounded" >Next</button>
//     </div>
//   );
// };

// export default Pagination;

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((page) => page + 1);

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-3 py-1 m-5 bg-black text-white text-2xl rounded'

      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='px-3 py-1 m-5 bg-black text-white text-2xl rounded'

      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
