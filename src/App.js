import React, { Component } from 'react';
import './App.scss';
import ContactItems from './components/ContactItems'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Offer from './components/Pages/Offer'

export class App extends Component {
  render() {
    return (
      <div className={window.location.pathname === '/' ? 'bgSpaceStation App' : 'App'}>
        <div className={window.location.pathname === '/' ? 'bgOverlay' : undefined}>
          <Header />
          <main>
            <Switch>
              <Route exact path='/'>
                {/* <div className="loader">
                  LOADING
                </div> */}
                <div className="windowContainer">
                  <h2>Fotorealizm to przeszłosć</h2>
                  <h3>Odkryj unikatowy styl digital.<span>ARCH</span></h3>
                  <p>Zajmujemy się tworzeniem unikatowych wizualizacji 3d architektury i wnętrz, które wyznaczają nowy styl w branży. Zwiększymy Twoje szanse na triumf w ważnym konkursie, pomożemy sprzedać Twój projekt! Zaufaj nam i wynieś swój projekt na wyższy poziom!</p>
                  <a href='/offer'><button>Poznaj naszą ofertę!</button></a>
                </div>
              </Route>
              <Route path='/offer'>
                <Offer />
              </Route>
  
            </Switch>
  
          </main>
          <footer className={window.location.pathname === '/' ? 'footerTransparent' : undefined}>
            <ContactItems />
          </footer>
        </div>
  
      </div>
    )
  }
}

export default App;
