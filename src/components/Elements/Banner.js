import React, { Component } from 'react'
import './Banner.scss'

export class Banner extends Component {
    render() {
        return (
            <div className='bannerContainer'>
                <div className="bannerHeader">
                    <h1>Nasza oferta</h1>
                    <div>Czytaj dalej</div>
                </div>
            </div>
        )
    }
}

export default Banner
