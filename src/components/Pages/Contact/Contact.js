import React from 'react'
import Banner from '../../Elements/Banner'
import './Contact.scss'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import banner04 from '../../../assets/img/banner04.jpg'


export const Contact = () => {
    return (
        <div className='contactContainer'>
            <Banner section="Skontaktuj się z nami" button='Czytaj dalej' bgImage={banner04} />
            <p>Contact page</p>
        </div>
    )
}
