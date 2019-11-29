import React, { Component } from 'react'
import './portfolioItemsAll.scss'
import './Portfolio.scss'
import {v1 as uuidv1} from 'uuid';


const images = [
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/01.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/02.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/03.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/04.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/05.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/06.jpg',
        alt: 'alt1',
        type: 'special',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/07.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/08.jpg',
        alt: 'alt1',
        type: 'product',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/09.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/10.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/11.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/12.jpg',
        alt: 'alt1',
        type: 'product',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/13.jpg',
        alt: 'alt1',
        type: 'special',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/14.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/15.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/16.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/17.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/18.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/19.jpg',
        alt: 'alt1',
        type: 'product',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/20.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/21.jpg',
        alt: 'alt1',
        type: 'product',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/22.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/23.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/24.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/25.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/26.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/27.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/28.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/29.jpg',
        alt: 'alt1',
        type: 'special',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/30.jpg',
        alt: 'alt1',
        type: 'product',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/31.jpg',
        alt: 'alt1',
        type: 'interior',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/32.jpg',
        alt: 'alt1',
        type: 'product',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/33.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/34.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/35.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/36.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/37.jpg',
        alt: 'alt1',
        type: 'interior',
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
            <div key={this.props.uuid} className={`portfolio-${this.props.active} portfolioItemsContainer`}>
                {this.props.active !== '' && this.props.active !== 'all'?
                    images.filter((i) => {
                        return i.type === this.props.active
                    }).map(i => {
                        return (
                            <div className={this.state.animateItems ? `portfolio-${this.props.active} portfolioAnim` : `portfolio-${this.props.active}`} >
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
