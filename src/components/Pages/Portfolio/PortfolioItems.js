import React, { Component } from 'react';
import { Swipeable } from 'react-swipeable';
import { CSSTransition } from 'react-transition-group';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import arrow from '../../../assets/misc/arrow.svg';
import close from '../../../assets/misc/close.svg';
import './Portfolio.scss';
import images from './data'
import swipe from '../../../assets/misc/swipe.svg'


class Lightbox extends Component {
    componentDidMount() {
        this.refs.lightboxOverlayRef.focus();
        disablePageScroll();
    }
    componentDidUpdate() {
        this.refs.lightboxOverlayRef.focus();
    }
    componentWillUnmount() {
        enablePageScroll();
    }

    render() {
        return (
            <div
                className="lightboxOverlay"
                ref="lightboxOverlayRef"
                tabIndex='0'
                onKeyDown={this.props.handleKeyPress}
            >
                <Swipeable
                    onSwipedLeft={() => this.props.changeImage('next')} // 
                    onSwipedRight={() => this.props.changeImage('prev')} //
                >

                    <img
                        src={this.props.images[this.props.activeImage].url}
                        alt={`wizualizacja-${this.props.images.alt}`}
                    />
                    <img onClick={() => this.props.changeImage('prev')} src={arrow} alt="arrow" id='left' className="arrow exclude" />
                    <img onClick={() => this.props.changeImage('next')} src={arrow} alt="arrow" id='right' className="arrow exclude" />
                    <img onClick={() => this.props.closeLightbox()} src={close} alt="close" id='close' className='exclude' />
                    <p><img src={swipe} alt="swipe"/>przesuń palcem żeby przewinąć</p>
                </Swipeable>
            </div>
        )
    }
}



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
        if (window.pageYOffset >= window.innerHeight - 300) {
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
            if (window.pageYOffset >= window.innerHeight - 100) {
                this.setState({ animateItems: true })
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

    handleKeyPress = (e) => {
        if (e.keyCode === 37) {
            e.preventDefault();
            this.changeImage('prev');
        }
        else if (e.keyCode === 39) {
            e.preventDefault();
            this.changeImage('next');
        }
        else if (e.keyCode === 27) {
            this.setState({ isLightboxOpen: false, activeImage: 0 });
        }
        else if (e.keyCode === 38 || e.keyCode === 40) {
            e.preventDefault();
        }
    }

    render() {
        return (
            <div key={this.props.uuid} className={`portfolio-${this.props.active}-container portfolioItemsContainer`}>
                {this.state.images.map(i => {
                    return (
                        <div
                            onClick={() => this.openLightbox(this.state.images.indexOf(i))}
                            className={this.state.animateItems ? `portfolio-${this.props.active} portfolioAnim` : `portfolio-${this.props.active}`}
                            key={i.url}
                        >
                            <img src={i.url} alt={`wizualizacja-${i.url}`} />
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
                    <Lightbox 
                        changeImage={this.changeImage}
                        closeLightbox={()=>this.setState({ isLightboxOpen: false, activeImage: 0 })}
                        images={this.state.images}
                        activeImage={this.state.activeImage}
                        handleKeyPress={this.handleKeyPress}
                    />
                </CSSTransition>
            </div>
        )
    }
}

export default PortfolioItems
