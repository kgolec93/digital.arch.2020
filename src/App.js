import React, { Component } from 'react';
import './App.scss';
import ContactItems from './components/ContactItems'
import Header from './components/Header'
import { Link, Switch, Route } from 'react-router-dom'
import Offer from './components/Pages/Offer/Offer'
import Portfolio from './components/Pages/Portfolio/Portfolio'
import { sections } from './components/Pages/Offer/Offer'
import { About } from './components/Pages/About/About';
import { Contact } from './components/Pages/Contact/Contact';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export const Footer = (props) => {
  return (
    <footer className={props.landing}>
      <ContactItems />
      <p>website designed by <a href="https://www.webble.pl" target='blank'>webble.</a></p>
    </footer>
  )
}

export class LandingPage extends Component {

  render() {
    return (
      <div className='bgSpaceStation'>
        <div className="windowContainer">
          <h2>Fotorealizm to przeszłosć</h2>
          <h3>Odkryj unikatowy styl digital.<span>ARCH</span></h3>
          <p>Jesteśmy studiem graficznym z Wrocławia. Nasza specjalność to wizualizacje 3d architektury i wnętrz, które wyznaczają nowy styl w branży. Zwiększymy Twoje szanse na triumf w ważnym konkursie, pomożemy sprzedać Twój projekt! Zaufaj nam i wynieś swój projekt na wyższy poziom!</p>
          <Link to='/offer'><button>Poznaj naszą ofertę!</button></Link>
        </div>
        {/* <Footer landing='landingPageFooter'/> */}
      </div>
    )
  }

}


export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route exact path='/offer'>
            <Offer />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>

        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
