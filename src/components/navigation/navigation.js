import { Link } from 'react-scroll';
import './style.scss';

const navLinks = [
  { title: 'Условия', id: 'terms' },
  { title: 'Каталог', id: 'catalog' },
  { title: 'Контакты', id: 'footer' },
];

function Navigation() {
  return (
    <nav className="navigation" id="nav">
      <a href="https://lionautorent.vercel.app/" className="navigation__logo">
        <img src="./img/logo-footer.svg" width="130px" alt="Логотип" />
      </a>
      <div className="navigation__links">
        {navLinks.map((item) => {
          return (
            <Link
              key={item.title}
              to={item.id}
              smooth="easeInOutQuad"
              offset={-10}
              duration={1000}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="navigation__phone">
        <img
          className="navigation__phone-logo"
          src="./img/phone-call.svg"
          alt="phone"
        />
        <span className="navigation__phone-line"></span>
        <div className="navigation__phone-number">
          <span>
            Позвоните нам!
            <a href="tel: +77001555055">+7 700 155 5055</a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
