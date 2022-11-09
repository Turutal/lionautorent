import React from 'react';
import { Link } from 'react-scroll';
import './style.scss';

const Pagination = ({ carsPerPage, totalCars, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="catalog__pagination">
      {pageNumbers.map((number) => (
        <li key={number}>
          <Link
            className={`catalog__pagination-item ${
              currentPage === number ? 'catalog__pagination-item--current' : ''
            }`}
            onClick={() => paginate(number)}
            key={number}
            to="catalog"
            smooth="easeInOutQuad"
            offset={-10}
            duration={1000}
          >
            {number}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
