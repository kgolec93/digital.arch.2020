import React, { Component } from 'react'

export class OfferSection extends Component {
    render() {
        return (
            <div className='offerItem'>
                <img src={this.props.data.img} alt={this.props.data.refName}/>
                <div className="textContainer">
                    <p className="header">{this.props.data.name}</p>
                    <p className="content">{this.props.data.refName}</p>
                </div>
            </div>
        )
    }
}

export default OfferSection
