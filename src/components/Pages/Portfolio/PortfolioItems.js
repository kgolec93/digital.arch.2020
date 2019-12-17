import React, { Component } from 'react'
import './Portfolio.scss'
import { v1 as uuidv1 } from 'uuid';
import { CSSTransition } from 'react-transition-group';
import arrow from '../../../assets/misc/arrow.svg'
import close from '../../../assets/misc/close.svg'

const images = [
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/01.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/03.jpg',
        alt: 'alt1',
        type: 'arch',
    },
    {
        url: 'https://www.digitalarch.pl/resources/thumbnails/02.jpg',
        alt: 'alt1',
        type: 'interior',
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
    constructor(props) {
        super(props);
        this.state = {
            animateItems: false,
            active: props.active,
            images: images,
            isLightboxOpen: false,
            activeImage: 1
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
        if (window.pageYOffset >= window.innerHeight - 100) {
            this.setState({ animateItems: true })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.active !== prevProps.active) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
            this.setState({
                active: this.props.active,
                images: this.props.active !== 'all' ?
                    images.filter((i) => {
                        return i.type === this.props.active
                    })
                    :
                    images
            })

        }
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

    openLightbox = (nr) => {
        this.setState({
            isLightboxOpen: !this.state.isLightboxOpen,
            activeImage: nr
        })
    }

    changeImage = (val) => {
        if (val === 'next') {
            if (this.state.activeImage === this.state.images.length - 1) {
                this.setState({ activeImage: 0 })
            }
            else {
                this.setState({ activeImage: this.state.activeImage + 1 })
            }
        }
        else if (val === 'prev') {
            if (this.state.activeImage === 0) {
                this.setState({ activeImage: this.state.images.length - 1 })
            }
            else {
                this.setState({ activeImage: this.state.activeImage - 1 })
            }
        }

    }

    render() {
        return (
            <div key={this.props.uuid} className={`portfolio-${this.props.active}-container portfolioItemsContainer`}>
                {this.state.images.map(i => {
                    return (
                        <div onClick={() => this.openLightbox(this.state.images.indexOf(i))} className={this.state.animateItems ? `portfolio-${this.props.active} portfolioAnim` : `portfolio-${this.props.active}`} >
                            <img src={i.url} alt={i.url} />
                        </div>
                    )
                })
                }

                <CSSTransition
                    in={this.state.isLightboxOpen}
                    timeout={300}
                    classNames="lightbox"
                    unmountOnExit
                >

                    <div className="lightboxOverlay" >
                        <img src={this.state.images[this.state.activeImage].url} alt={this.state.images.alt} />
                        <img onClick={()=>this.changeImage('prev')} src={arrow} alt="arrow" id='left' className="arrow exclude" />
                        <img onClick={()=>this.changeImage('next')} src={arrow} alt="arrow" id='right' className="arrow exclude" />
                        <img onClick={() => { this.setState({ isLightboxOpen: false }) }} src={close} alt="close" id='close' className='exclude' />
                    </div>

                </CSSTransition>
            </div>
        )
    }
}

export default PortfolioItems
