import React, { Component } from 'react'
import Banner from '../../Elements/Banner'
import './Contact.scss'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import banner04 from '../../../assets/img/banner04.jpg'
import logo from '../../../assets/img/digitalarch-logo.png'
import { Helmet } from 'react-helmet'



export class Contact extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='contactContainer'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>kontakt | digital.ARCH wizualizacje</title>
                    <link rel="canonical" href="https://digitalarch.pl/contact" />
                </Helmet>
                <Banner section="Skontaktuj się z nami" button='Czytaj dalej' bgImage={banner04} />
                <div className="contactContent">
                    <div>
                        <img src={logo} alt="digitalarch-logo" />
                        <p>info@digitalarch.pl</p>
                        <p>+48 783 648 000</p>
                    </div>
                    <div>
                        <form onSubmit={(e) => { e.preventDefault() }}>
                            <h1>Napisz do nas</h1>

                            <input type="email" placeholder='Email' id='email' />

                            <input type="text" placeholder='Twoje imię' id='name' />

                            <input type="text" placeholder='Temat wiadomości' id='topic' />

                            <textarea ref='textArea' type="text" placeholder='Twoja wiadomość' id='text' />
                            <button type="submit">
                                Wyślij wiadomość
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
