import React, { Component } from 'react'
import Banner from '../Elements/Banner'
import './Portfolio.scss'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const data = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
]

export class Portfolio extends Component {
    constructor(){
        super();
        this.state = {
            animateItems: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        if (window.innerWidth > 1200){ ///width set up to RWD - value to be set later
            if (window.pageYOffset >= window.innerHeight) {
                this.setState({animateItems: true})
            }
        }
    }

    render() {
        return (
            <div className='portfolioContainer'>
                <Banner section="Wybrane relizacje" button='Zobacz nasze portfolio' />
                <Element name='content'>
                    <div className='portfolioItemsContainer'>
                        {data.map(i => {
                            return (
                                <p className={this.state.animateItems ? "portfolioItem portfolioAnim" : "portfolioItem"}>{i}</p>
                            )
                        })}
                    </div>
                </Element>

            </div>
        )
    }
}

export default Portfolio
