import { Container } from "react-bootstrap"
import email from "/src/img/email.png"
import linkedin from "/src/img/linkedin.png"
import github from "/src/img/github.png"
import { useTranslation } from 'react-i18next';

import "../Footer/Footer.sass"

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className='contact-section'>
            <Container className="contact-container">
                <h1 className="title">// {t('tituloContato')}</h1>

                <div className="contact-grid">
                    <a href="mailto:alanfelipe1678@gmail.com" target="blank" className="contact-item">
                        <img src={email} alt="Email" />
                        <span>alanfelipe1678@gmail.com</span>
                    </a>

                    <a href="https://www.linkedin.com/in/alan-felipe-3666b3220" target="_blank" className="contact-item">
                        <img src={linkedin} alt="LinkedIn" />
                        <span>linkedin.com/in/alan-felipe</span>
                    </a>

                    <a href="https://github.com/AlanFelipeM" target="_blank" className="contact-item">
                        <img src={github} alt="GitHub" />
                        <span>github.com/AlanFelipeM</span>
                    </a>
                </div>

                <div className="assinatura">
                    <hr />
                    <p>{t('rodape')}</p>
                </div>
            </Container>
        </div>
    )
}
