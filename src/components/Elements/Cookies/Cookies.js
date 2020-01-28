  
import React from 'react'
import './Cookies.scss'

export const Cookies = (props) => {
    return (
        <div className='cookiesNotificationContainer'>
            <p>
            W ramach naszej witryny stosujemy pliki cookies w celu świadczenia Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień dotyczących cookies oznacza, że będą one zamieszczane w Państwa urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany ustawień dotyczących cookies.
            </p>
            <div className="buttonsWrapper">
                <div
                    className="button"
                    onClick={props.acceptCookies}
                >
                    Akceptuję
                </div>
                <a href='https://google.pl' className="button">
                    Rezygnuję
                </a>
            </div>

        </div>
    )
}

export default Cookies