import Container from 'react-bootstrap/Container'
import btngithub from '/src/img/mdi_github.png'
import btnlinkedin from '/src/img/ri_linkedin-fill.png'
import avatar from '/src/img/fotohome.png'

import curriculo from '/src/img/Alan Felipe Bertoletti de Mário.pdf'
import { useTypewriter } from 'react-simple-typewriter'
import { Cursor } from 'react-simple-typewriter'
import { useTranslation } from 'react-i18next';


import '../Home/Home.sass'
import BackgroundSymbols from '../BackgroundSymbols/BackgroundSymbols'
import { Link as ScrollLink } from 'react-scroll'


export default function Home() {
    const [name] = useTypewriter({
        words: ['Alan Felipe'],
        typeSpeed: 100,
        deleteSpeed: 90,
        loop: {}
    })
    const { t } = useTranslation();

    return (
        <div className='home-page'>
            <BackgroundSymbols />


            <Container className="home-container">
                <div className='home-content'>
                    <div className='hero-text'>
                        <h3>{t('apresentacao1')}</h3>
                        <h1> {name}<Cursor /></h1>
                        <h3>{t('apresentacao2')}</h3>
                        <div className='links'>
                            <div className='btn-github'>
                                <a href="https://github.com/AlanFelipeM" target='_blank'><img className='github' src={btngithub} alt="img-github" />GitHub</a>
                            </div>
                            <div className="btn-linkedin">
                                <a href="https://www.linkedin.com/in/alan-felipe-3666b3220/" target='_blank'><img className='linkedin' src={btnlinkedin} alt="img-linkedin" />LinkedIn</a>
                            </div>
                        </div>
                        <button className='button-cv'><a href={curriculo} download>Download CV</a></button>
                    </div>
                    <div className='hero-visual'>
                        <img className='avatar' src={avatar} alt="avatar" />
                    </div>
                </div>
            </Container>


        </div>
    )
}

