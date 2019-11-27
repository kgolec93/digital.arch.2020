import React, { Component } from 'react'
import Banner from '../../Elements/Banner'
import './Portfolio.scss'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import PortfolioItems from './PortfolioItems'
import {v1 as uuidv1} from 'uuid';

const menuItems=[
    {
        name: 'wszystkie',
        id: 'all'
    },
    {
        name: 'architektura',
        id: 'arch'
    },
    {
        name: 'wnętrza',
        id: 'interior'
    },
    {
        name: 'produkt',
        id: 'product'
    },
    {
        name: 'specjalne',
        id: 'special'
    },
]

export class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            active: 'all',
            uuid: ''
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
            <div className='portfolioContainer'>
                <Banner section="Wybrane relizacje" button='Zobacz nasze portfolio' />
                <Element name='content' className="content">
                    <div className="portfolioMenu">
                        <ul>
                            {menuItems.map(i=>{
                                return(
                                    <a href={`#${i.id}`}><li 
                                        className={this.state.active===i.id ? 'active' : null}
                                        id={i.id} 
                                        onClick={(e)=>{
                                                this.setState({active:e.target.id, uuid: uuidv1()});
                                                this.scrollFunc();
                                            }}
                                    >{i.name}</li></a>
                                )
                            })}
                        </ul>
                    </div>
                    <PortfolioItems uuid={this.state.active} active={this.state.active}/>
                </Element>
            </div>
        )
    }
}

export default Portfolio
