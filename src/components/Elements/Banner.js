import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './Banner.scss';

export class Banner extends Component {
    constructor(){
        super();
        this.state={
            isVisible: true
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        if (window.pageYOffset >= window.innerHeight-68 ) {
            this.setState({ isVisible: false })
        }
    }

    scrollFunc = () => {
        scroll.scrollTo(this.refs.banner.offsetHeight-68, {
            duration: 1000,
            delay: 0,
            smooth: true,
            offset: -68, // Scrolls to element + 50 pixels down the page
          })
    }

    render() {
        return (
            <div className='bannerContainer' ref='banner'>
                <div className="bannerHeader">
                    <h1>{this.props.section}</h1>
                    <div onClick={this.scrollFunc}>{this.props.button}</div>
                </div>
                <img src={this.props.bgImage} alt=""/>
            </div>
        )
    }
}

export default Banner
