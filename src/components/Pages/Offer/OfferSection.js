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
                    <div className={`headerContainer ${this.props.active === this.props.data.refName ? 'active' : ''}`}>
                        <p className="header">{this.props.data.name}</p>
                        {/* <p className="content">{this.props.data.refName}</p> */}
                        <p className='button' onClick={this.handleClick}>Czytaj więcej</p>
                    </div>
                    <div className={`textContainer ${this.props.active === this.props.data.refName ? 'active' : ''}`}>
                        <div className="textWrapper">
                            <p onClick={this.handleClick} className="returnButton">wróć</p>
                            <p className="header">{this.props.data.name}</p>
                            <p className="description">{this.props.data.description}</p>
                            <Link to='/portfolio' className="returnButton">Zobacz nasze portfolio!</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OfferSection
