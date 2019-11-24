import React from 'react';
import logo from './assets/img/digitalarch-logo.png';
import './App.scss';
import ContactItems from './components/ContactItems'

function App() {
  return (
    <div className="App">
      <div className="bgOverlay">
      <header className="header">
        <div className="logoContainer">
          <img src={logo} alt=""/>
        </div>
        <nav>
          <ul>
            <li>oferta</li>
            <li>co zyskasz</li> 
            <li>portfolio</li>
            <li>o nas</li>
            <li>kontakt</li>
            <li>FAQ</li>
            <li className="langSelection">ENG</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="windowContainer">
          <h2>Fotorealizm to przeszłosć</h2>
          <h3>Odkryj unikatowy styl digital.<span>ARCH</span></h3>
          <p>Zajmujemy się tworzeniem unikatowych wizualizacji 3d architektury i wnętrz, które wyznaczają nowy styl w branży. Zwiększymy Twoje szanse na triumf w ważnym konkursie, pomożemy sprzedać Twój projekt! Zaufaj nam i wynieś swój projekt na wyższy poziom!</p>  
          <button>Poznaj naszą ofertę!</button>
        </div>
      </main>
      <footer> 
        <ContactItems />
      </footer>
      </div>

    </div>
  );
}

export default App;
