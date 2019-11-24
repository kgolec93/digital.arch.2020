import React from 'react'
import instaIcon from '../assets/test-img/instagram.svg'
import linkedinIcon from '../assets/test-img/linkedin.svg'
import phoneIcon from '../assets/test-img/phone.svg'
import mailIcon from '../assets/test-img/mail.svg'

export default function ContactItems() {
    return (
        <div className='contactItemsContainer'>
            <ul>
                <li>
                    <img src={mailIcon} alt="mail" />
                    <a href="mailto:info@digitalarch.pl">info@digitalarch.pl</a>
                </li>
                <li>
                    <img src={phoneIcon} alt="phone" />
                    <a href="tel:+48783648000">+48 783 648 000</a>
                </li>
                <li>
                    <img src={instaIcon} alt="instagram" />
                    <a href="https://www.instagram.com/digital.arch/" target='blank'>@digital.arch</a>
                </li>
                <li>
                    <img src={linkedinIcon} alt="linkedin" />
                    <a href="https://www.linkedin.com/company/digital-arch/" target='blank'>@digital.ARCH</a>
                </li>
            </ul>
        </div>
    )
}
