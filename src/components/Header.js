import React, { Component } from 'react'


export class Header extends Component {
    render() {
        return (
            <header className={window.location.pathname === '/' ? 'header' : 'header headerDark'}>
                <div className="logoContainer">
                    <a href='/'>
                        <img src='https://www.digitalarch.pl/static/media/digitalarch-logo.232d5c1f.svg' alt="digital.ARCH logo" />
                        digital.<span>ARCH</span>
                    </a>

                </div>
                <nav>
                    <ul>
                        <li><a href='/offer'>oferta</a></li>
                        <li><a href='/portfolio'> portfolio</a></li>
                        <li>o nas</li>
                        <li>kontakt</li>
                        <li>FAQ</li>
                        <li className="langSelection">ENG</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header