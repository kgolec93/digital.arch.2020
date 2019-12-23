import React from 'react'
import facebookIcon from '../assets/misc/facebook-circle.svg'
import instaIcon from '../assets/misc/instagram-circle.svg'
import linkedinIcon from '../assets/misc/linkedin-circle.svg'
import mailIcon from '../assets/test-img/mail.svg'
import phoneIcon from '../assets/test-img/phone.svg'

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

                    <a href="https://www.facebook.com/3d.digitalARCH/" target='blank'>
                        <img src={facebookIcon} alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/digital.arch/" target='blank'>
                        <img src={instaIcon} alt="instagram" />
                    </a>
                    <a href="https://www.linkedin.com/company/digital-arch/" target='blank'>
                        <img src={linkedinIcon} alt="linkedin" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
