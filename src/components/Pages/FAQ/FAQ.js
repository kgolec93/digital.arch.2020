import React, { Component } from 'react'
import Banner from '../../Elements/Banner'
import './FAQ.scss'
import banner from '../../../assets/img/banner03.jpg'
import arrow from '../../../assets/misc/arrowBK.svg'
import { Helmet } from 'react-helmet'

const questions = [
    {
        question: 'Ile kosztuje wykonanie wizualizacji?',
        questionENG: 'How much does the visualisation cost?',
        answer: `Cena wizualizacji zależy od wielu czynników - ilości dostarczanych materiałów, wielkości i poziomu skomplikowania opracowywanego przedmiotu / budynku, ilości wizualizacji oraz niezbędnych prac dodatkowych. Jeśli chcesz wycenić swój projekt, napisz na info@digitalarch.pl, a już kolejnego dnia otrzymasz wycenę`,
        answerENG: `The price of a visualisation depands of many various factors - amount and quality of delivered working materials, size and complexity level of the developed visualisation, the amount of ordered visualisation and any necessary extra works. If you want to evaluate your project, write us a message at info@digitalarch.pl and you will revieve the valuation the next day`
    },
    {
        question: 'Ile czasu zajmuje wykonanie wizualizacji?',
        answer: 'Czas wykonania wizualizacji zależy od poziomu skomplikowania, ilości szczegółów, a przede wszystkim od rozdzielczości (rozmiaru) wykonywanej wizualizacji. Zazwyczaj na jedno ujęcie przewidujemy około 2-3 dni roboczych, ale nie boimy się również wyzwań krótkoterminowych',
        questionENG: 'How much time does visualisation developmnet takes?',
        answerENG: `The time of visualisation development process depends on the level of complexity, the number of 3d models, that we need to work on, amount of details and particularly of the resolution (size) of the prepared image. Usually for one frame we need about 2-3 working days, but we are not afraid of short-term orders`
    },
    {
        question: 'Czy zajmujecie się również projektowaniem?',
        answer: 'Projektujemy głównie aranżacje wnętrz oraz koncepcje architekturoniczne. Nie zajmujemy się natomiast sporządzaniem architektonicznych projektów, czy rysunków, poza tymi które można wyrenderować. Przenosimy Twój dwuwymiarowy rysunek do trzeciego wymiaru',
        questionENG: 'Do you also deal with the designing?',
        answerENG: `Yes, we mostly desing the interiors and architecture, but only in the conceptual way. We do not prepare architectural documentation and any drawings - except the rendered images. You give us the plain drawings, and we transform it into the third dimension`
    },
    {
        question: 'Czy będę mógł użyć wizualizacji jako billboard reklamowy?',
        answer: 'Oczywiście! Przy produkcji wizualizacji w odpowiednio dużej rozdzielczości, będzie miała ona najwyższą jakość nawet na wydrukach wielkoformatowych. Nie zapomnij tylko poinformować nas o tym przed wyceną, standardową stosowaną przez nas rozdzielczością jest 1920x1080',
        questionENG: 'Will I be able to use the visualisation in high-dimensional advertising billboard?',
        answerENG: 'Yes, of course! If you will order the high-dimensional visualisation, we will do anything for this to be in the highest quality even on the large format prints. But please, do not forget to tell us that if you need it, right before the valuation, because in standard we have 1920x1080px resolution.'
    },
    {
        question: 'Czy wykonujecie również wizualizację produktu?',
        answer: 'Tak! Zajmujemy się nie tylko architekturą, podejmiemy się każdego mniej lub bardziej nietypowego zadania. Zwizualizujemy dla Ciebie co tylko będziesz chciał - urządzenie elektroniczne, zegare, meble, samochód, a nawet stację kosmiczną!',
        questionENG: 'Do you also prepare the product visualisation?',
        answerENG: `Yes! We don't only do the architecture, we will take on every less or more atypical tasks. We can visualise everything - electronic device, watch, furniture, car, even the space station! `
    }
]

class Question extends Component {
    constructor() {
        super();
        this.state = {
            openedItemId: null,
        }
    }
    render() {
        return (
            <div className={this.props.activeItem === this.props.number ? 'questionWrapper active' : 'questionWrapper'}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>FAQ | digital.ARCH wizualizacje</title>
                    <link rel="canonical" href="https://digitalarch.pl/faq" />
                </Helmet>
                <h5 className="question" onClick={() => this.props.setActive(this.props.number)}>
                    {this.props.question} <img src={arrow} alt='arrow' />
                </h5>
                <div className="answerWrapper">
                    <p className="answer">
                        {this.props.answer}
                    </p>
                </div>
            </div>
        )
    }
}

export class FAQ extends Component {
    constructor() {
        super();
        this.state = {
            activeItemId: null
        }
    }

    setActive = (i) => {
        if (this.state.activeItemId === i) {
            this.setState({ activeItemId: null })
        }
        else {
            this.setState({ activeItemId: i });
            console.log(i)
        }
    }

    render() {
        return (
            <div className='aboutContainer'>
                <Banner section="Często zadawane pytania" button='Zobacz odpowiedzi' bgImage={banner} />
                <div className="faqWrapper">

                    {questions.map(item => {
                        return (
                            <Question
                                question={item.question}
                                answer={item.answer}
                                key={`question${questions.indexOf(item)}`}
                                number={questions.indexOf(item)}
                                activeItem={this.state.activeItemId}
                                setActive={this.setActive}
                            />
                        )
                    })}


                </div>
            </div>
        )
    }

}
