import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class OfferSection extends Component {

    constructor() {
        super();
        this.state = {
            isActive: false
        }
    }

    handleClick = () => {
        if (this.props.active === this.props.data.refName) {
            this.props.setActive('');
        }
        else {
            this.props.setActive(this.props.data.refName);
        }
    }

    render() {
        return (
            <div className='offerItem'>
                <img src={this.props.data.img} alt={this.props.data.refName} />
                <div className="wrapper">
                    <div className={`headerContainer`}>
                        <p className="header">{this.props.data.name}</p>
                        {/* <p className="content">{this.props.data.refName}</p> */}
                        <p className='button' onClick={this.handleClick}>Czytaj więcej</p>
                    </div>
                    <div className={`textContainer ${this.props.active === this.props.data.refName ? 'active' : ''}`}>
                        <p>{this.props.data.refName}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default OfferSection
