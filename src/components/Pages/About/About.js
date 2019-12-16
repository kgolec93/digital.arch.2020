import React from 'react'
import Banner from '../../Elements/Banner'
import './About.scss'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import banner03 from '../../../assets/img/banner03.jpg'


export const About = () => {
    return (
        <div className='aboutContainer'>
            <Banner section="Kilka słów o nas" button='Czytaj dalej' bgImage={banner03} />
            <div className="aboutWrapper">
                
            </div>
        </div>
    )
}
