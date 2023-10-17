import React from 'react';

function Pagination({ currentPage, totalPages, onNextPage, onPrevPage, onSearchChange ,onSearchSubmit}) {
  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Search"
          onChange={onSearchChange}
        />
        <button onClick={onSearchSubmit}>Search</button>
      </div>
      <div>
        <button onClick={onPrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={onNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
