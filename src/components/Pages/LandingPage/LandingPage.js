import React, { Component } from 'react'
import './LandingPage.scss'
import bannerImage from '../../../assets/landing-page/banner_image.jpg'
import logo from '../../../assets/landing-page/digitalarch-logo-white.svg'
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom'
import img01 from '../../../assets/landing-page/img01.jpg'

import offer01 from '../../../assets/landing-page/offer01.jpg'
import offer02 from '../../../assets/landing-page/offer02.jpg'
import offer03 from '../../../assets/landing-page/offer03.jpg'

import about from '../../../assets/landing-page/about.jpg'

import PortfolioItems from '../Portfolio/PortfolioItems';

import '../Portfolio/Portfolio.scss'
import ContactItems from '../../ContactItems';

import { clients } from '../About/About'




const offerItems = [
    {
        img: offer01,
        header: 'Wizualizacje architektoniczne',
        text: `Naszą specjalnością są wizualizacje architektoniczne dla pracowni projektowych, deweloperów oraz projektantów wnętrz. Gdy jednak wszystko idzie w stronę fotorealizmu, my poszliśmy o krok dalej opracowując unikatowy styl graficzny, który udało się nam zyskać dzięki zastosowaniu najnowszych technologii oraz odrobiny magii. Nasze wizualizacje wyróżnią Cię na tle konkurencji, ułatwiając sprzedanie projektu, czy wygranie ważnego konkursu. Nie ogranicza nas również forma. Standardowo nasze wizualizacje są tworzone pod kątem wydruku w formacie A3 lub na stronę internetową, ale nie jest dla nas wyzwaniem stworzyć znacznie większy obraz, jeśli jest taka potrzeba. Nie czekaj, aż ktoś inny wykorzysta okazję, prześlij nam już dziś do wyceny swoje materiały, a otrzymasz ofertę z wyceną już kolejnego dnia roboczego.`,
    },
    {
        img: offer02,
        header: 'Wizualizacje wnętrz',
        text: `Kupiłeś mieszkanie i chcesz zobaczyć jak będzie wyglądać Twoje mieszkanie, ale architekci wnętrz mają zbyt wysokie ceny? Stworzymy dla Ciebie wizualizacje, które pozwolą Ci zobaczyć, czy meble, które podobają się Tobie, pasują do koloru ścian wybranego przez Twoją drugą połówkę. A może masz dylemat czy wybrać nowoczesną lampę, a może tradycyjny żyrandol z dużą ilością złota? Wizualizacje pomogą Ci rozwiać wszelkie wątpliwości. Możemy też coś doradzić w projekcie, żeby efekt finalny wyszedł jeszcze lepszy niż kiedykolwiek sobie wymarzyłeś!`,
    },
    {
        img: offer03,
        header: 'Wizualizacje produktu',
        text: `Potrzebujesz pokazać swój produkt w katalogu, na stronie, czy w ogłoszeniu, a nie jesteś w stanie umieścić jego rzeczywistego zdjęcia? Stworzymy dla Ciebie hiperrealistyczną wizualizację 3d, z zachowaniem nawet najdrobniejszych detali. Bo detal ma ogromne znaczenie. Nieważne czy ma to być projekt szklanki, krzesła, czy samochodu. Zajmiemy się dla Ciebie każdym zadaniem. Dzięki technologii będziesz mógł pokazać swój produkt również w wersji interaktywnej, aby klient mógł nim poruszyć, obrócić go, tak jakby miał już go w rękach.`,
    },
]

export class LandingPage extends Component {

    scrollFunc = () => {
        scroll.scrollTo(this.refs.banner.offsetHeight - 68, {
            duration: 1000,
            delay: 0,
            smooth: true,
            offset: -68
        })
    }

    render() {
        return (
            <div id='LandingPageContainer'>
                <div ref='banner' className="jumbo">
                    <img src={bannerImage} alt="Wizualizacje 3d" className='logo' />
                    <div className="jumboContent">
                        <img src={logo} alt="digital.ARCH Wizualizacje 3d Wrocław" />
                        <h1>wizualizacje architektoniczne i grafika 3d</h1>
                        <p onClick={this.scrollFunc} className="button">
                            dowiedz się więcej!
                        </p>
                    </div>

                    <ContactItems />

                </div>
                <div id="introSection">
                    <div className="textContainer content">
                        <h2>Wizualizacje 3d dla architektów i inwestorów</h2>
                        <h3>Odkryj unikatowy styl digital.ARCH</h3>
                        <p>
                            Jesteśmy studiem graficznym z Wrocławia. Nasza specjalność to fotorealistyczne wizualizacje 3d architektury i wnętrz dla architektów oraz inwestorów, które wyznaczają nowy styl w branży. Zwiększymy Twoje szanse na triumf w ważnym konkursie, pomożemy sprzedać Twój projekt! Zaufaj nam i pokaż swój projekt od najlepszej strony!
                        </p>
                    </div>
                    <div className="imageContainer">
                        <img src={img01} alt="Wizualizacje 3d dom jednorodzinny" />
                    </div>
                </div>
                <div className="sectionBar">
                    Co znajdziesz w naszej ofercie?
                </div>
                <div className="offerItemsContainer">
                    {
                        offerItems.map((item, index) => {
                            return (
                                <div key={`offer-${index}`} className="offerItem">
                                    <div className="textContainer content">
                                        <h2>{item.header}</h2>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="imageContainer">
                                        <img src={item.img} alt={item.header} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="afterBar">
                    <Link
                        to='/offer'
                        className="button-red"
                    >zobacz pełną ofertę</Link>
                </div>
                <div className="sectionBar">
                    Zobacz nasze portfolio!
                </div>
                <div className="portfolioContainer">
                    <PortfolioItems
                        active='highlight'
                    />
                </div>
                <div className="afterBar">
                    <Link
                        to='/portfolio'
                        className="button-red"
                    >zobacz całe portfolio</Link>
                </div>
                <div className="aboutContainer">
                    <div className="left">
                        <img src={logo} alt="digital.ARCH Wizualizacje 3d Wrocław" />
                        <p className='text content'>
                            Jesteśmy studiem graficznym, znajdującym się we Wrocławiu. Oficjalnie w branży architektury i wizualizacji działamy od 2015 roku, choć z samą grafiką 3d mieliśmy już do czynienia dużo wcześniej. Grafika stała się naszą pasją, dzięki której każda z naszych realizacji jest na swój sposób wyjątkowa, ponieważ wkładamy w jej stworzenie całe nasze siły. Nie boimy się wyzwań, bo dzięki nim za każdym razem stajemy się coraz lepsi i możemy zapewnić każdej kolejnej pracy jeszcze wyższą jakość.
                        </p>
                        <h3>Skontaktuj się z nami!</h3>
                        <ContactItems />
                    </div>
                    <div className="right">
                        <img src={about} alt="Wizualizacje 3d Wrocław" />

                        <div className="clientsList">
                        Zaufali nam już:
                            {clients.map(item => {
                                return (
                                    item.logo !== null ?
                                        <a href={item.url} target='blank'>
                                            <img className='clientLogo' src={item.logo} alt={item.name} />
                                        </a>
                                        :
                                        <a href={item.url} target='blank'>
                                            <p>{item.name}</p>
                                        </a>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage
