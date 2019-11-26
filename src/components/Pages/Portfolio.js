import React, { Component } from 'react'
import Banner from '../Elements/Banner'
import './Portfolio.scss'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import img01 from '../../assets/test-img/01.png'
import img02 from '../../assets/test-img/02.png'
import img03 from '../../assets/test-img/03.png'
import img04 from '../../assets/test-img/04.png'

const data = [
    'https://www.digitalarch.pl/static/media/88.7f6c38f6.jpg',
    'https://www.digitalarch.pl/static/media/85.77b6115c.jpg',
    'https://www.digitalarch.pl/static/media/93.dade5f43.jpg',
    'https://www.digitalarch.pl/static/media/90.3b399738.jpg',
    'https://www.digitalarch.pl/static/media/58.f6f1ba2c.jpg',
    'https://www.digitalarch.pl/static/media/40.ba7a1da5.jpg',
    'https://www.digitalarch.pl/static/media/64.103447f6.jpg',
    'https://www.digitalarch.pl/static/media/85.77b6115c.jpg',
    'https://www.digitalarch.pl/static/media/93.dade5f43.jpg',
    'https://www.digitalarch.pl/static/media/90.3b399738.jpg',
    'https://www.digitalarch.pl/static/media/58.f6f1ba2c.jpg',
    'https://www.digitalarch.pl/static/media/40.ba7a1da5.jpg',
    'https://www.digitalarch.pl/static/media/64.103447f6.jpg',
    'https://www.digitalarch.pl/static/media/85.77b6115c.jpg',
    'https://www.digitalarch.pl/static/media/93.dade5f43.jpg',
    'https://www.digitalarch.pl/static/media/90.3b399738.jpg',
    'https://www.digitalarch.pl/static/media/58.f6f1ba2c.jpg',
    'https://www.digitalarch.pl/static/media/40.ba7a1da5.jpg',
    'https://www.digitalarch.pl/static/media/64.103447f6.jpg',
]

export class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            animateItems: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        if (window.innerWidth > 1200) { ///width set up to RWD - value to be set later
            if (window.pageYOffset >= window.innerHeight-200) {
                this.setState({ animateItems: true })
            }
        }
    }

    render() {
        return (
            <div className='portfolioContainer'>
                <Banner section="Wybrane relizacje" button='Zobacz nasze portfolio' />
                <Element name='content' className="content">
                    <div className="portfolioMenu">
                        <ul>
                            <li>wszystkie</li>
                            <li>architektura</li>
                            <li>wnętrza</li>
                            <li>produkt</li>
                            <li>inne</li>
                        </ul>
                    </div>
                    <div className='portfolioItemsContainer'>
                        {data.map(i => {
                            return (
                                <div className={this.state.animateItems ? "portfolioItem portfolioAnim" : "portfolioItem"} >
                                    <img src={i} />
                                </div>
                            )
                        })}
                    </div>
                </Element>
            </div>
        )
    }
}

export default Portfolio
