import React, { Component } from 'react'
import Banner from '../../Elements/Banner'
import './Contact.scss'
import banner04 from '../../../assets/img/banner04.jpg'
import logo from '../../../assets/img/digitalarch-logo.png'
import { Helmet } from 'react-helmet'
import $ from 'jquery'
import ReCAPTCHA from "react-google-recaptcha";


export class Contact extends Component {
    constructor() {
        super();
        this.state = {
            isVerified: false,
            formEmail: '',
            formName: '',
            formSubject: '',
            formMessage: '',
            alertMessage: ''
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        if (this.state.isVerified !== false) {
            if (this.state.formEmail === '') {
                this.setState({ alertMessage: 'Musisz podać swój email!' })
            }
            else {
                if (this.state.formName === '') {
                    this.setState({ alertMessage: 'Podaj swoje imię!' })
                }
                else {
                    if (this.state.formMessage === '') {
                        this.setState({ alertMessage: 'Pole wiadomości nie może być puste!' })
                    }
                    else {
                        if (this.state.isVerified === true) {
                            $.ajax({
                                data: this.state,
                                type: 'POST',
                                url: '/api/contact.php',
                                success: (data) => {
                                    console.info(data)
                                    this.setState({ formName: '', formEmail: '', formSubject: '', formMessage: '', alertMessage: data })
                                },
                                error: (xhr, status, err) => {
                                    console.error(status, err.toString())
                                }
                            })
                        }
                    }
                }
            }
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
                        <form onSubmit={this.submitForm}>
                            <h1>Napisz do nas</h1>
                            <p>{this.state.alertMessage}</p>
                            <input
                                type="email"
                                placeholder='Email'
                                onChange={(e) => this.setState({ formEmail: e.target.value })}
                                value={this.state.formEmail}
                                id='email'
                            />

                            <input
                                type="text"
                                onChange={(e) => this.setState({ formName: e.target.value })}
                                value={this.state.formName}
                                placeholder='Twoje imię'
                                id='name'

                            />

                            <input
                                type="text"
                                onChange={(e) => this.setState({ formSubject: e.target.value })}
                                value={this.state.formSubject}
                                placeholder='Temat wiadomości'
                                id='topic'
                            />

                            <textarea
                                ref='textArea'
                                type="text"
                                placeholder='Twoja wiadomość'
                                id='text'
                                onChange={(e) => this.setState({ formMessage: e.target.value })}
                                value={this.state.formMessage}
                            />
                            <ReCAPTCHA
                                onChange={() => { this.setState({ isVerified: !this.state.isVerified }) }}
                                theme='dark'
                                sitekey="6LdQSskUAAAAANBdxt7_P_dB4mcmt6Wxa2SF8cTG"
                            />
                            <button
                                className={this.state.isVerified ? '' : 'notVerified'}
                                type="submit"
                            >
                                Wyślij wiadomość
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
