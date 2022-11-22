import './style.scss';

const Terms = () => {
  return (
    <>
      <h2 className="terms__title">Условия Аренды</h2>
      <div className="terms__wrapper" id="terms">
        <div className="terms__wrapper-item">
          <img src="./img/terms/driver.png" alt="driver" />
          <ul className="terms__list">
            <lh className="terms__list-title">К водителю</lh>
            <li>Удостоверение личности</li>
            <li>Водительские права</li>
            <li>Стаж вождения от 1 года</li>
            <li>Возраст от 19 лет</li>
          </ul>
        </div>
        <div className="terms__wrapper-item">
          <img src="./img/terms/car.png" alt="car" />
          <ul className="terms__list" type="circle">
            <lh className="terms__list-title">К автомобилю</lh>
            <li>Ограничение скорости 80 км/ч</li>
            <li>Суточный пробег 200 км, после каждый км 100 тг</li>
          </ul>
        </div>
        <div className="terms__wrapper-item">
          <img src="./img/terms/location.png" alt="location" />
          <ul className="terms__list">
            <lh className="terms__list-title">По территории</lh>
            <li>Машины сдаются только по г. Алматы</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Terms;
