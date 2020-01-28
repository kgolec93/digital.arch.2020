import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './Banner.scss';
import { Parallax, Background } from 'react-parallax'

export class Banner extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: true,
            parallaxStr: 200
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
        if (window.innerWidth < 700) {
            this.setState({parallaxStr: 0})
        }

    }

    listenToScroll = () => {
        if (window.pageYOffset >= window.innerHeight - 68) {
            this.setState({ isVisible: false })
        }
    }

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
            <Parallax
                strength={this.state.parallaxStr}
            >
                <div className='bannerContainer' ref='banner'>
                    <div className="bannerHeader">
                        <h1>{this.props.section}</h1>
                        <div onClick={this.scrollFunc}>{this.props.button}</div>
                    </div>

                </div>
                <Background className='parallaxBG'>
                    <img onLoad={this.props.bannerLoaded} src={this.props.bgImage} alt="wizualizacja-archi" />
                </Background>
            </Parallax>

        )
    }
}

export default Banner
