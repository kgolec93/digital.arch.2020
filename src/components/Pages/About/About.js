import React from 'react';
import { Helmet } from 'react-helmet';
import banner03 from '../../../assets/img/banner03.jpg';
import logo from '../../../assets/img/digitalarch-logo.png';
import amrestLogo from '../../../assets/logos/amrest.png';
import archeLogo from '../../../assets/logos/arche.png';
import archilabLogo from '../../../assets/logos/archilab.png';
import archilupusLogo from '../../../assets/logos/archilupus.png';
import artisvisioLogo from '../../../assets/logos/artisvisio.png';
import majorLogo from '../../../assets/logos/major.png';
import moiLogo from '../../../assets/logos/moiarchitekci.png';
import igmLogo from '../../../assets/logos/igmarchitekci.svg';
import Banner from '../../Elements/Banner';
import './About.scss';




export const clients = [
    {
        name: 'IGM Architekci',
        url: 'http://www.moiarchitekci.pl/',
        logo: igmLogo
    },
    {
        name: 'AmRest',
        url: 'https://www.amrest.eu/pl',
        logo: amrestLogo
    },
    {
        name: 'Arche',
        url: 'http://arch-e.com/',
        logo: archeLogo
    },
    {
        name: 'MARCON Druk',
        url: 'http://marcon-druk.com/',
        logo: null

    },
    {
        name: 'Major Architekci',
        url: 'http://www.majorarchitekci.pl/',
        logo: majorLogo
    },
    {
        name: 'ArtisVisio',
        url: 'https://artisvisio.pl/',
        logo: artisvisioLogo
    },
    {
        name: 'Archilab',
        url: 'https://archilab.com.pl/',
        logo: archilabLogo
    },
    {
        name: 'Archilupus',
        url: 'http://archilupus.pl/',
        logo: archilupusLogo
    },
    {
        name: 'Śląskie Studio Architektury',
        url: 'https://www.youtube.com/channel/UCdQt05i3geiKsiQOqc9MmnQ',
        logo: null
    },
]

export const About = () => {
    return (
        <div className='aboutContainer'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>o nas | digital.ARCH wizualizacje</title>
                <link rel="canonical" href="https://digitalarch.pl/about" />
            </Helmet>
            <Banner section="Kilka słów o nas" button='Czytaj dalej' bgImage={banner03} />
            <div className="aboutWrapper">
                <div>
                    <img src={logo} alt="digitalarch-logo" />
                    <p>
                        Jesteśmy studiem graficznym, znajdującym się we Wrocławiu. Oficjalnie w branży architektury i wizualizacji działamy od 2015 roku, choć z samą grafiką 3d mieliśmy już do czynienia dużo wcześniej. Grafika stała się naszą pasją, dzięki której każda z naszych realizacji jest na swój sposób wyjątkowa, ponieważ wkładamy w jej stworzenie całe nasze siły. Nie boimy się wyzwań, bo dzięki nim za każdym razem stajemy się coraz lepsi i możemy zapewnić każdej kolejnej pracy jeszcze wyższą jakość.
                    </p>
                </div>
                <div>
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
    )
}
