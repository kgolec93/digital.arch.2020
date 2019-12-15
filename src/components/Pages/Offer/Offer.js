import React, { Component } from 'react'
import Banner from '../../Elements/Banner'
import './Offer.scss'
import OfferSection from './OfferSection'
import scrollLock from 'scroll-lock';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const sections = [
    {
        name: 'Wizualizacje architektoniczne',
        refName: 'wizArchi',
        img: 'https://www.digitalarch.pl/static/media/53.9074f059.jpg'
    },
    {
        name: 'Wizualizacje wnętrz',
        refName: 'wizInterior',
        img: 'https://www.digitalarch.pl/static/media/93.dade5f43.jpg'
    },
    {
        name: 'Wizualizacje deweloperskie',
        refName: 'wizDev',
        img: 'https://www.digitalarch.pl/static/media/84.016f5f59.jpg'
    },
    {
        name: 'Wizualizacje produktu',
        refName: 'wizProduct',
        img: 'https://www.digitalarch.pl/static/media/07.f755ff1c.jpg'
    },
    {
        name: 'Wirtualne spacery',
        refName: 'vr',
        img: 'https://www.digitalarch.pl/static/media/53.9074f059.jpg'
    },
    {
        name: 'Grafika 3d',
        refName: '3dGraphics',
        img: 'https://www.digitalarch.pl/static/media/36.5b3b4e3d.jpg'
    },
]


export class Offer extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.scrollFunction)
    }

    constructor() {
        super();
        this.state = {
            isInit: true
        }
    }

    scrollFunction = () => {
        if (this.state.isInit === true) {
            scroll.scrollTo(window.innerHeight - 68);
            this.setState({isInit: false})
        }
    }

    render() {
        return (
            <div className='offerContainer'>
                <Banner section='Nasza oferta' button='Zobacz czym się zajmujemy' />
                <div className="content">
                    <div ref='items' className="offerItemsContainer">
                        {sections.map(item => {
                            return (
                                <div key={item.refName} className="offerSection">
                                    <OfferSection data={item} />
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
