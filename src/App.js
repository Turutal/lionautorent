import './reset.scss';
import './App.scss';
import Navigation from './components/navigation/';
import Catalog from './components/catalog/';
import Terms from './components/terms/';
import Footer from './components/footer/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navigation__wrapper">
          <div className="container">
            <Navigation />
          </div>
        </div>
        <div className="banner">
          <div className="banner__wrapper">
            <h1 className="banner__title">Lion Auto Rent</h1>
            <h2 className="banner__subtitle">Аренда авто</h2>
          </div>
        </div>
      </header>
      <main>
        <section className="catalog">
          <div className="container">
            <Catalog />
          </div>
        </section>
        <section className="terms">
          <div className="terms__background-wrapper">
            <div className="container">
              <Terms />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
