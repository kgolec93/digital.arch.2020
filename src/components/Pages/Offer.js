import React, { Component } from 'react'
import Banner from '../Elements/Banner'
import './Offer.scss'

export class Offer extends Component {
    render() {
        return (
            <div className='offerContainer'>
                <Banner section='Nasza oferta' button='Czytaj dalej' />
                <div className="content">
                    <div className="offerItemsContainer">
                        <div className="offerItem">
                            A
                        </div>
                        <div className="offerItem">
                            B
                        </div>
                        <div className="offerItem">
                            C
                        </div>
                        <div className="offerItem">
                            D
                        </div>
                        <div className="offerItem">
                            E
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Offer
