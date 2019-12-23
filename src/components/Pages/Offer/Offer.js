import React, { Component } from 'react'
import Banner from '../../Elements/Banner'
import banner01 from '../../../assets/img/banner01.jpg'
import './Offer.scss'
import OfferSection from './OfferSection'
import { Helmet } from 'react-helmet'

import ARCH from '../../../assets/img/offer/01_ARCH.jpg'
import INT from '../../../assets/img/offer/02_INT.jpg'
import PRODUCT from '../../../assets/img/offer/03_PRODUCT.jpg'
import VR from '../../../assets/img/offer/04_VR.jpg'
import GRAPHICS from '../../../assets/img/offer/05_GRAPHICS.jpg'


export const sections = [
    {
        name: 'Wizualizacje architektoniczne',
        refName: 'wizArchi',
        img: ARCH,
        description: `Naszą specjalnością są wizualizacje architektoniczne dla pracowni projektowych, deweloperów oraz projektantów wnętrz. Gdy jednak wszystko idzie w stronę fotorealizmu, my poszliśmy o krok dalej opracowując unikatowy styl graficzny, który udało się nam zyskać dzięki zastosowaniu najnowszych technologii oraz odrobiny magii. Nasze wizualizacje wyróżnią Cię na tle konkurencji, ułatwiając sprzedanie projektu, czy wygranie ważnego konkursu. 
        Nie ogranicza nas również forma. Standardowo nasze wizualizacje są tworzone pod kątem wydruku w formacie A3 lub na stronę internetową, ale nie jest dla nas wyzwaniem stworzyć znacznie większy obraz, jeśli jest taka potrzeba.
        Nie czekaj, aż ktoś inny wykorzysta okazję, prześlij nam już dziś do wyceny swoje materiały, a otrzymasz ofertę z wyceną już kolejnego dnia roboczego.`
    },
    {
        name: 'Wizualizacje wnętrz',
        refName: 'wizInterior',
        img: INT,
        description: `Kupiłeś mieszkanie i chcesz zobaczyć jak będzie wyglądać Twoje mieszkanie, ale architekci wnętrz mają zbyt wysokie ceny? Stworzymy dla Ciebie wizualizacje, które pozwolą Ci zobaczyć, czy meble, które podobają się Tobie, pasują do koloru ścian wybranego przez Twoją drugą połówkę. A może masz dylemat czy wybrać nowoczesną lampę, a może tradycyjny żyrandol z dużą ilością złota? Wizualizacje pomogą Ci rozwiać wszelkie wątpliwości. Możemy też coś doradzić w projekcie, żeby efekt finalny wyszedł jeszcze lepszy niż kiedykolwiek sobie wymarzyłeś!`
    },
    // {
    //     name: 'Wizualizacje deweloperskie',
    //     refName: 'wizDev',
    //     img: 'https://www.digitalarch.pl/static/media/84.016f5f59.jpg',
    //     description: ''
    // },
    {
        name: 'Wizualizacje produktu',
        refName: 'wizProduct',
        img: PRODUCT,
        description: `Potrzebujesz pokazać swój produkt w katalogu, na stronie, czy w ogłoszeniu, a nie jesteś w stanie umieścić jego rzeczywistego zdjęcia? Stworzymy dla Ciebie hiperrealistyczną wizualizację 3d, z zachowaniem nawet najdrobniejszych detali. Bo detal ma ogromne znaczenie. Nieważne czy ma to być projekt szklanki, krzesła, czy samochodu. Zajmiemy się dla Ciebie każdym zadaniem.
        Dzięki technologii będziesz mógł pokazać swój produkt również w wersji interaktywnej, aby klient mógł nim poruszyć, obrócić go, tak jakby miał już go w rękach.`
    },
    {
        name: 'Wirtualne spacery',
        refName: 'vr',
        img: VR,
        description: `Daj swoim klientom możliwość nie tylko zobaczenia „zdjęcia” swojego nowego domu. Daj im wejść do środka już dziś, nawet jeśli nie zostały jeszcze wylane fundamenty. Dodaj im do tego odrobinę najnowszych technologii, a będą mogli dosłownie znaleźć się we wnętrzu swojego przyszłego mieszkania, dzięki zastosowaniu VR w trójwymiarze oraz z pełnym 360 stopniowym zakresem widzenia. `
    },
    {
        name: 'Grafika 3d',
        refName: '3dGraphics',
        img: GRAPHICS,
        description: `Najbardziej lubimy zadania specjalne, którym nikt inny nie jest w stanie podołać. Stworzymy dla Ciebie unikatową wizytówkę, model do filmu, postać do gry, a nawet stację kosmiczną jeśli tylko tego chcesz. Zaskocz i oczaruj swoich klientów, ukazując im coś, czego nie ma jeszcze konkurencja. Będziesz dzięki temu zawsze krok do przodu.`
    },
]


export class Offer extends Component {

    constructor() {
        super();
        this.state = {
            isInit: true,
            active: ''
        }
    }

    setActive = (param) => {
        this.setState({ active: param })
    }

    render() {
        return (
            <div className='offerContainer'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>oferta | digital.ARCH wizualizacje</title>
                    <link rel="canonical" href="https://digitalarch.pl/offer" />
                </Helmet>
                <Banner section='Nasza oferta' button='Zobacz czym się zajmujemy' bgImage={banner01} />
                <div className="content">
                    <div ref='items' className="offerItemsContainer">
                        {sections.map(item => {
                            return (
                                <div key={item.refName} className="offerSection">
                                    <OfferSection setActive={this.setActive} active={this.state.active} data={item} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Offer
