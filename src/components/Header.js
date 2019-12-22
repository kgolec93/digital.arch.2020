import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import mobileMenu from '../assets/misc/mobile-menu.svg'

export class Header extends Component {
    constructor() {
        super();
        this.state = {
            headerIsStatic: false,
            mobileMenuActive: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        if (window.pageYOffset >= window.innerHeight - 68) {
            this.setState({ headerIsStatic: true })
            console.log('works')

        }
        else {
            this.setState({ headerIsStatic: false })

        }
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            mobileMenuActive: !prevState.mobileMenuActive
        }))
    }

    render() {
        return (
            <header className={
                this.state.headerIsStatic ? 'headerStatic' : ''
            }>
                <div className="logoContainer">
                    <a href='/'>
                        <img src='https://www.digitalarch.pl/static/media/digitalarch-logo.232d5c1f.svg' alt="digital.ARCH logo" />
                        digital.<span>ARCH</span>
                    </a>

                </div>
                <div className="headerBar">
                    <a id='logoMobile' href='/'>
                        <img src='https://www.digitalarch.pl/static/media/digitalarch-logo.232d5c1f.svg' alt="digital.ARCH logo" />
                        digital.<span>ARCH</span>
                    </a>
                    <img
                        src={mobileMenu}
                        id='mobileMenu'
                        alt="menu"
                        onClick={this.toggleMenu}
                    />
                </div>
                <nav className={this.state.mobileMenuActive ? 'navOpened' : null}>


                    <ul className='webMenu'>
                        <li><NavLink onClick={this.toggleMenu} activeClassName='navLinkActive' to='/offer'>oferta</NavLink></li>
                        <li><NavLink onClick={this.toggleMenu} activeClassName='navLinkActive' to='/portfolio'> portfolio</NavLink></li>
                        <li><NavLink onClick={this.toggleMenu} activeClassName='navLinkActive' to='/about'>o nas</NavLink></li>
                        <li><NavLink onClick={this.toggleMenu} activeClassName='navLinkActive' to='/contact'>kontakt</NavLink></li>
                        <li>FAQ</li>
                        {/* <li className="langSelection">ENG</li> */}
                    </ul>

                </nav>
            </header>
        )
    }
}

export default Header
