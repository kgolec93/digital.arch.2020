import React, { Component } from 'react'
import './Banner.scss'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
        scroller.scrollTo('content', {
            duration: 1000,
            delay: 0,
            smooth: true,
            offset: -68, // Scrolls to element + 50 pixels down the page
          })
    }

    render() {
        return (
            <div className='bannerContainer'>
                <div className="bannerHeader">
                    <h1>{this.props.section}</h1>
                    <div onClick={this.scrollFunc}>{this.props.button}</div>
                </div>
            </div>
        )
    }
}

export default Banner
