import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends Component {
    constructor() {
        super();
        this.state = {
            headerIsStatic: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        if (window.pageYOffset >= window.innerHeight-68 ) {
            this.setState({ headerIsStatic: true })
        }
        else {
            this.setState({ headerIsStatic: false })

        }
    }

    render() {
        return (
            <header className={
                this.state.headerIsStatic ? 'headerStatic' : null
                }>
                <div className="logoContainer">
                    <a href='/'>
                        <img src='https://www.digitalarch.pl/static/media/digitalarch-logo.232d5c1f.svg' alt="digital.ARCH logo" />
                        digital.<span>ARCH</span>
                    </a>

                </div>
                <nav>
                    <ul>
                        <li><NavLink activeClassName='navLinkActive' to='/offer'>oferta</NavLink></li>
                        <li><NavLink activeClassName='navLinkActive' to='/portfolio'> portfolio</NavLink></li>
                        <li><NavLink activeClassName='navLinkActive' to='/about'>o nas</NavLink></li>
                        <li><NavLink activeClassName='navLinkActive' to='/contact'>kontakt</NavLink></li>
                        <li>FAQ</li>
                        {/* <li className="langSelection">ENG</li> */}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
