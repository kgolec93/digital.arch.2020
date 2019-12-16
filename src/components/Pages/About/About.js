import React from 'react'
import Banner from '../../Elements/Banner'
import './About.scss'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import banner03 from '../../../assets/img/banner03.jpg'

const clients = [
    {
        name: 'MOI Architekci',
        url: ''
    },
    {
        name: 'AmRest',
        url: ''
    },
    {
        name: 'Arche',
        url: ''
    },
    {
        name: 'MARCON Service',
        url: ''
    },
    {
        name: 'Major Architekci',
        url: ''
    },
    {
        name: 'ArtisVisio',
        url: ''
    },
    {
        name: 'Archilab',
        url: ''
    },
    {
        name: 'Archilupus',
        url: ''
    },
    {
        name: 'Śląskie Studio Architektury',
        url: ''
    },
]

export const About = () => {
    return (
        <div className='aboutContainer'>
            <Banner section="Kilka słów o nas" button='Czytaj dalej' bgImage={banner03} />
            <div className="aboutWrapper">
                <div>
                    <p>
                        Jesteśmy studiem graficznym, znajdującym się we Wrocławiu. Oficjalnie w branży architektury i wizualizacji działamy od 2015 roku, choć z samą grafiką 3d mieliśmy już do czynienia dużo wcześniej. Grafika stała się naszą pasją, dzięki której każda z naszych realizacji jest na swój sposób wyjątkowa, ponieważ wkładamy w jej stworzenie całe nasze siły. Nie boimy się wyzwań, bo dzięki nim za każdym razem stajemy się coraz lepsi i możemy zapewnić każdej kolejnej pracy jeszcze wyższą jakość.
                    </p>
                </div>
                <div>
                    Nasi klienci:
                    {clients.map(item=>{
                        return(
                            <p>{item.name}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
