/* eslint-disable react/no-unescaped-entities */
import foto from '/src/img/eu.png'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next';

import '../About/About.sass'

export default function About() {
    const { t } = useTranslation();

    return (
        <div className='about-page'>
            <Container className="about-container">
                <h1 className='title'>// {t('tituloSobre')}</h1>
                <div className="about-content">
                    <div className='about-text-card'>
                        <h2>{t('sobre1')}</h2>
                        <div className="description">
                            <p>{t('sobre2')}</p>
                            <p>{t('sobre3')}</p>
                            <p>{t('sobre4')}</p>
                        </div>

                        <div className='quote-section'>
                            <p className="quote">
                                <span>"</span>{t('ditado')}<span>"</span>
                            </p>
                            <span className='author'>- Bill Gates</span>
                        </div>
                    </div>
                    <div className='about-visual'>
                        <div className="image-wrapper">
                            <img className='profile-image' src={foto} alt="Alan Felipe" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
