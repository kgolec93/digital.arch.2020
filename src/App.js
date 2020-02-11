import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.scss';
import ContactItems from './components/ContactItems';
import Header from './components/Header';
import { About } from './components/Pages/About/About';
import { Contact } from './components/Pages/Contact/Contact';
import { FAQ } from './components/Pages/FAQ/FAQ';
import Offer from './components/Pages/Offer/Offer';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import { Helmet } from 'react-helmet'
import { CSSTransition } from 'react-transition-group'
import Cookies from './components/Elements/Cookies/Cookies'
import LandingPage from './components/Pages/LandingPage/LandingPage'

export const Footer = (props) => {
  return (
    <footer className={props.landing}>
      <ContactItems />
      <p>website designed by <a href="https://www.webble.pl" target='blank'>webble.</a></p>
    </footer>
  )
}

// export class LandingPage extends Component {

//   render() {
//     return (
//       <div className='bgSpaceStation'>
//         <div className="windowContainer">
//           <h1>Wizualizacje architektoniczne dla najlepszych</h1>
//           <h2>Odkryj unikatowy styl digital.<span>ARCH</span></h2>
//           <p>Jesteśmy studiem graficznym z Wrocławia. Nasza specjalność to wizualizacje 3d architektury i wnętrz, które wyznaczają nowy styl w branży. Zwiększymy Twoje szanse na triumf w ważnym konkursie, pomożemy sprzedać Twój projekt! Zaufaj nam i wynieś swój projekt na wyższy poziom!</p>
//           <Link to='/offer'><button>Poznaj naszą ofertę!</button></Link>
//         </div>
//       </div>
//     )
//   }

// }

const Page404 = () => {
  return (
    [
      <div className="Wrapper404">
        <Helmet>
          <meta charSet="utf-8" />
          <title>404 | digital.ARCH wizualizacje</title>
          <link rel="canonical" href="https://digitalarch.pl/404" />
        </Helmet>
        <h1>404</h1>
        <p>Nie ma takiej strony w tej domenie :(</p>
        <Link to='/'>Wróć do strony głównej</Link>
      </div>,
      <div className="header404"></div>
    ]
  )
}

export class App extends Component {

  constructor() {
    super();
    this.state = {
      cookiesAccepted: null
    }
  }

  componentDidMount() {
    console.log('website developed by WEBBLE');
    const cookiesAccepted = localStorage.getItem('digitalarch-cookiesAccepted');
    const currentDate = Date.now();

    if (cookiesAccepted) {
      if (currentDate - cookiesAccepted < 604800000) {
        this.setState({ cookiesAccepted: true });
      }
    }
    else {
      this.setState({ cookiesAccepted: false })
    }
  }

  acceptCookies = () => {
    this.setState({ cookiesAccepted: true });
    localStorage.setItem("digitalarch-cookiesAccepted", Date.now());
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <Switch>
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
            <Route path='/faq'>
              <FAQ />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </main>
        <CSSTransition
          in={this.state.cookiesAccepted === false}
          timeout={300}
          classNames="cookies"
          unmountOnExit>
          <Cookies
            acceptCookies={this.acceptCookies}
          />
        </CSSTransition>
        <Footer />
      </div>
    )
  }
}

export default App;
