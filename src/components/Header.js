import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import mobileMenu from '../assets/misc/mobile-menu.svg';
import logo from '../assets/misc/digitalarch-logo.svg'

const sections = [
    {
        name: 'oferta',
        link: '/offer'
    },
    {
        name: 'portfolio',
        link: '/portfolio'
    },
    {
        name: 'o nas',
        link: '/about'
    },
    {
        name: 'kontakt',
        link: '/contact'
    },
    {
        name: 'FAQ',
        link: '/faq'
    },
]

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
        if (window.pageYOffset >= window.innerHeight - 72) {
            this.setState({ headerIsStatic: true })
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
                        <img src={logo} alt="digital.ARCH logo" />
                        digital.<span>ARCH</span>
                    </a>

                </div>
                <div className="headerBar">
                    <a id='logoMobile' href='/'>
                        <img src={logo} alt="digital.ARCH logo" />
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
                        {sections.map(item=>{
                            return(
                                <li key={item.name}><NavLink onClick={this.toggleMenu} activeClassName='navLinkActive' to={item.link}>{item.name}</NavLink></li>
                            )
                        })}
                        {/* <li className="langSelection">ENG</li> */}
                    </ul>

                </nav>
            </header>
        )
    }
}

export default Header
