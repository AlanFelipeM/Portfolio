/* eslint-disable react/no-unescaped-entities */
import foto from '/src/img/eu.png'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next';

import '../About/About.sass'

export default function About () {
    const { t } = useTranslation();

    return(
        <>
        <div className='pdr pdr1'>
        <Container>
        <h1 className='title'>{t('tituloSobre')}</h1>
        <div className="about">
        <div className='txt-about'>
        <h2>{t('sobre1')}</h2>
        <p>{t('sobre2')} <br/>&nbsp;&nbsp;&nbsp;{t('sobre3')}</p>
        <div className='saying'>
        <p><i><span>"  </span>{t('ditado')}<span>  "</span></i></p>
        <span className='ass'><i>-Bill Gates</i></span>
        </div>
        </div>
        <img className='eu' src={foto} alt="eu" />
        </div>
        </Container>
        </div>
        </>
    )
}