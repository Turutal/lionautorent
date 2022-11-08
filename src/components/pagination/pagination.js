import React from 'react';
import './style.scss';

const Pagination = ({ carsPerPage, totalCars, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="catalog__pagination">
      {pageNumbers.map((number) => (
        <li className="catalog__pagination-item" key={number}>
          <a
            href="!#"
            className={`catalog__pagination-link ${
              currentPage === number ? 'catalog__pagination-current' : ''
            }`}
            onClick={() => {
              paginate(number);
              paginate.preventdefault();
            }}
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
