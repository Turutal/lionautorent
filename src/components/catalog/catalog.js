import React, { useState } from 'react';
import './style.scss';
import Pagination from '../pagination/';

const catalogArray = [
  {
    url: './img/cars/merc-g.jpg',
    title: 'Mercedes-Benz G550',
    year: '2020',
    color: 'Чёрный',
    volume: '5.5',
    price: '300 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Mercedes-Benz%20G550%202020%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9',
  },
  {
    url: './img/cars/merc-g-2014.jpeg',
    title: 'Mercedes-Benz G550',
    year: '2014',
    color: 'Чёрный',
    volume: '5.5',
    price: '120 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Mercedes-Benz%20G550%202014%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9',
  },
  {
    url: './img/cars/merc-g2009.jpeg',
    title: 'Mercedes-Benz G550',
    year: '2009',
    color: 'Чёрный',
    volume: '5.5',
    price: '65 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Mercedes-Benz%20G550%202009%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9',
  },
  {
    url: './img/cars/merc-vito1.jpg',
    title: 'Mercedes V-class',
    year: '2013',
    color: 'Чёрный',
    volume: '2.1',
    price: '150 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Mercedes%20V-class%202013%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9',
  },
  {
    url: './img/cars/cadillac-escalade1.jpeg',
    title: 'Cadillac Escalade',
    year: '2016',
    color: 'Чёрный',
    volume: '6.2',
    price: '140 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Cadillac%20Escalade%202016%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9',
  },
  {
    url: './img/cars/merc-sclass1.jpg',
    title: 'Mercedes-Benz W222',
    year: '2017',
    color: 'Белый',
    volume: '4',
    price: '120 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Mercedes-Benz%20W222%202017%20%D0%91%D0%B5%D0%BB%D1%8B%D0%B9',
  },
  {
    url: './img/cars/bmw-x5.jpg',
    title: 'BMW X5',
    year: '2020',
    color: 'Тёмно-синий',
    volume: '3',
    price: '150 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20BMW%20X5%202020%20%D0%A2%D1%91%D0%BC%D0%BD%D0%BE-%D1%81%D0%B8%D0%BD%D0%B8%D0%B9',
  },
  {
    url: './img/cars/range-rover1.jpg',
    title: 'Range Rover',
    year: '2017',
    color: 'Чёрный',
    volume: '5',
    price: '110 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Range%20Rover%202017%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9',
  },
  {
    url: './img/cars/lexus-570.jpg',
    title: 'Lexus 570',
    year: '2017',
    color: 'Белый',
    volume: '5.7',
    price: '120 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Lexus%20570%202017%20%D0%91%D0%B5%D0%BB%D1%8B%D0%B9',
  },
  {
    url: './img/cars/toyota-land.jpeg',
    title: 'Toyota Land Cruiser',
    year: '2018',
    color: 'Белый',
    volume: '5.7',
    price: '100 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Toyota%20Land%20Cruiser%202018%20%D0%91%D0%B5%D0%BB%D1%8B%D0%B9',
  },
  {
    url: './img/cars/tayota-land-black.jpeg',
    title: 'Toyota Land Cruiser Prado',
    year: '2017',
    color: 'Чёрный',
    volume: '4',
    price: '80 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Toyota%20Land%20Cruiser%20Prado%202017%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9',
  },
  {
    url: './img/cars/bmw-7501.jpeg',
    title: 'BMW 750',
    year: '2016',
    color: 'Чёрный',
    volume: '4.4',
    price: '100 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20BMW%20750%202016%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9',
  },
  {
    url: './img/cars/bmw-m5.jpg',
    title: 'BMW M5',
    year: '2018',
    color: 'Тёмно-синий',
    volume: '4.4',
    price: '100 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20BMW%20M5%202018%20%D0%A2%D1%91%D0%BC%D0%BD%D0%BE-%D1%81%D0%B8%D0%BD%D0%B8%D0%B9',
  },
  {
    url: './img/cars/ford-mustang.jpeg',
    title: 'Ford Mustang',
    year: '2015',
    color: 'Тёмно-синий',
    volume: '2.3',
    price: '90 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Ford%20Mustang%202015%20%D0%A2%D1%91%D0%BC%D0%BD%D0%BE-%D1%81%D0%B8%D0%BD%D0%B8%D0%B9',
  },
  {
    url: './img/cars/merc-e200.jpeg',
    title: 'Mercedes e200',
    year: '2018',
    color: 'Чёрный',
    volume: '2',
    price: '80 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Mercedes%20e200%202018%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9',
  },
  {
    url: './img/cars/merc-e200-white.jpeg',
    title: 'Mercedes E200',
    year: '2019',
    color: 'Белый',
    volume: '2',
    price: '85 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Mercedes%20E200%202019%20%D0%91%D0%B5%D0%BB%D1%8B%D0%B9',
  },
  {
    url: './img/cars/merc-c180.jpg',
    title: 'Mercedes C180',
    year: '2015',
    color: 'Чёрный',
    volume: '1.6',
    price: '50 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Mercedes%20C180%202015%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9',
  },
  {
    url: './img/cars/merc-c200.jpg',
    title: 'Mercedes C200',
    year: '2017',
    color: 'Тёмно-синий',
    volume: '2',
    price: '55 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Mercedes%20C200%202017%20%D0%A2%D1%91%D0%BC%D0%BD%D0%BE-%D1%81%D0%B8%D0%BD%D0%B8%D0%B9',
  },
  {
    url: './img/cars/lexus-es250.jpg',
    title: 'Lexus ES 250',
    year: '2016',
    color: 'Чёрный/Белый',
    volume: '2.5',
    price: '40 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Lexus%20ES%20250%202016%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9%2F%D0%91%D0%B5%D0%BB%D1%8B%D0%B9',
  },
  {
    url: './img/cars/lexus-gs-350.jpeg',
    title: 'Lexus GS 350',
    year: '2015',
    color: 'Белый',
    volume: '3.5',
    price: '40 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Lexus%20GS%20350%202015%20%D0%91%D0%B5%D0%BB%D1%8B%D0%B9',
  },
  {
    url: './img/cars/camry-75.jpg',
    title: 'Toyota Camry 75',
    year: '2021',
    color: 'Чёрный/Белый',
    volume: '2.5',
    price: '40 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Toyota%20Camry%2075%202021%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9%2F%D0%91%D0%B5%D0%BB%D1%8B%D0%B9',
  },
  {
    url: './img/cars/camry-70.jpg',
    title: 'Toyota Camry 70',
    year: '2019/2020',
    color: 'Чёрный/Белый',
    volume: '2.5',
    price: '35 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Toyota%20Camry%2070%202019%2F2020%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9%2F%D0%91%D0%B5%D0%BB%D1%8B%D0%B9',
  },
  {
    url: './img/cars/camry-55.jpg',
    title: 'Toyota Camry 55',
    year: '2016/2017',
    color: 'Белый/Чёрный',
    volume: '2.5',
    price: '30 000',
    link: 'https://api.whatsapp.com/send?phone=77001555055&text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Toyota%20Camry%2055%202016%2F2017%20%D0%91%D0%B5%D0%BB%D1%8B%D0%B9%2F%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9',
  },
];

function Catalog() {
  const [cars, setCars] = useState(catalogArray);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(12);

  const lastCarIndex = currentPage * carsPerPage;
  const firstCarIndex = lastCarIndex - carsPerPage;
  const currentCar = cars.slice(firstCarIndex, lastCarIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="catalog__wrapper" id="catalog">
        {currentCar.map((item) => {
          return (
            <div className="catalog__item" key={item.url}>
              <div className="catalog__item-img">
                <img src={item.url} alt={item.title} />
              </div>

              <div className="catalog__item-descr">
                <h3 className="catalog__item-title">{item.title}</h3>
                <ul className="catalog__item-options">
                  <li>{item.year}</li>
                  <li>{item.color}</li>
                  <li>{item.volume} л.</li>
                </ul>
                <b className="catalog__item-price">
                  {item.price}
                  <span className="catalog__item-value"> тг/сутки</span>
                </b>
                <a className="catalog__item-book" href={item.link}>
                  Забронировать
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        carsPerPage={carsPerPage}
        totalCars={cars.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}

export default Catalog;
