import React, { Component } from 'react'
import './portfolioItemsAll.scss'
import './Portfolio.scss'
import {v1 as uuidv1} from 'uuid';


const images = [
    {
        url: 'https://www.digitalarch.pl/static/media/88.7f6c38f6.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/85.77b6115c.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/93.dade5f43.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/90.3b399738.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/58.f6f1ba2c.jpg',
        alt: 'alt1',
        type: 'product',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/40.ba7a1da5.jpg',
        alt: 'alt1',
        type: 'product',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/64.103447f6.jpg',
        alt: 'alt1',
        type: 'special',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/88.7f6c38f6.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/85.77b6115c.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/93.dade5f43.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/90.3b399738.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/58.f6f1ba2c.jpg',
        alt: 'alt1',
        type: 'product',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/40.ba7a1da5.jpg',
        alt: 'alt1',
        type: 'product',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/64.103447f6.jpg',
        alt: 'alt1',
        type: 'special',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/88.7f6c38f6.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/85.77b6115c.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/93.dade5f43.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/90.3b399738.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/58.f6f1ba2c.jpg',
        alt: 'alt1',
        type: 'product',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/40.ba7a1da5.jpg',
        alt: 'alt1',
        type: 'product',
    },
    {
        url: 'https://www.digitalarch.pl/static/media/64.103447f6.jpg',
        alt: 'alt1',
        type: 'special',
    },
]


export class PortfolioItems extends Component {
    constructor() {
        super();
        this.state = {
            animateItems: false,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
    }

    listenToScroll = () => {
        if (this.state.animateItems !== true) {
            if (window.innerWidth > 1200) { ///width set up to RWD - value to be set later
                if (window.pageYOffset >= window.innerHeight - 100) {
                    this.setState({ animateItems: true })
                }
            }
        }

    }
    render() {
        return (
            <div key={this.props.uuid} className={`portfolio-${window.location.hash.substr(1)} portfolioItemsContainer`}>
                {window.location.hash.substr(1) !== '' && window.location.hash.substr(1) !== 'all'?
                    images.filter((i) => {
                        return i.type === window.location.hash.substr(1)
                    }).map(i => {
                        return (
                            <div className={this.state.animateItems ? `portfolio-${window.location.hash.substr(1)} portfolioAnim` : `portfolio-${window.location.hash.substr(1)}`} >
                                <img src={i.url} alt={i.url} />
                            </div>
                        )
                    })
                    :
                    images.map(i => {
                        return (
                            <div key={uuidv1()} className={this.state.animateItems ? "portfolioAnim portfolio-all" : "portfolio-all"} >
                                <img src={i.url} alt={i.url} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default PortfolioItems
