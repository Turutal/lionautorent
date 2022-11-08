import './style.scss';

const navLinks = [
  { title: 'Условия' },
  { title: 'Каталог' },
  { title: 'Контакты' },
];

function Navigation() {
  return (
    <nav className="navigation">
      <a href="https://lionautorent.vercel.app/!#" className="navigation__logo">
        <img src="/img/logo-footer.svg" width="130px" alt="Логотип" />
      </a>
      <div className="navigation__links">
        {navLinks.map((item) => {
          return (
            <a href="!#" key={item.title}>
              {item.title}
            </a>
          );
        })}
      </div>
      <div className="navigation__phone">
        <img
          className="navigation__phone-logo"
          src="/img/phone-call.svg"
          alt="phone"
        />
        <span className="navigation__phone-line"></span>
        <div className="navigation__phone-number">
          <span>
            Позвоните нам!
            <a href="tel: +7001555055">+7 700 155 5055</a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
