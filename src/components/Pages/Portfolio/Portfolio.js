import React, { Component } from 'react'
import Banner from '../../Elements/Banner'
import './Portfolio.scss'
import PortfolioItems from './PortfolioItems'
import {v1 as uuidv1} from 'uuid';
import banner02 from '../../../assets/img/banner02.jpg'

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
            pageOffset: window.pageYOffset,
            active: 'all',
            uuid: ''
        }
    }

    render() {
        return (
            <div className='portfolioContainer'>
                
                <Banner section="Wybrane relizacje" button='Zobacz nasze portfolio' bgImage={banner02} />

                <div className="portfolioMenu">
                    <ul>
                        {menuItems.map(i=>{
                            return(
                                <li 
                                    className={this.state.active === i.id ? 'active' : null}
                                    id={i.id} 
                                    onClick={(e)=>{
                                            window.scrollTo(0, window.innerHeight-68)
                                            this.setState({active:e.target.id, uuid: uuidv1()});
                                        }}
                                >{i.name}</li>
                            )
                        })}
                    </ul>

                </div>

                <PortfolioItems uuid={this.state.active} active={this.state.active}/>


            </div>
        )
    }
}

export default Portfolio
