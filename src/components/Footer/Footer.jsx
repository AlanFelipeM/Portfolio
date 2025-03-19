import { Container } from "react-bootstrap"
import email from "/src/img/email.png"
import linkedin from "/src/img/linkedin.png"
import github from "/src/img/github.png"
import { useTranslation } from 'react-i18next';

import "../Footer/Footer.sass"

export default function Footer () {
    const { t } = useTranslation();

    return (
        <>
        <Container>
        <div className="title contact-title">
            <h1>{t('tituloContato')}</h1>
        </div>
        <div className="contact">
            <div className="email-contact">
                <a href="mailto:alanfelipe1678@gmail.com" target="blank">
                    <img src={email} alt="" />alanfelipe1678@gmail.com
                    </a>
            </div>

            <div className="linkedin-contact">
                <a href="https://www.linkedin.com/in/alan-felipe-3666b3220" target="_blank"> 
                <img src={linkedin} alt="" />linkedin.com/in/alan-felipe
                </a>
            </div>

            <div className="github-contact">
                <a href="https://github.com/AlanFelipeM" target="_blank"> 
                <img src={github} alt="" />github.com/AlanFelipeM
                </a>
            </div>
        </div>
        </Container>
        <div className="assinatura">       
        <hr />   
        <p>{t('rodape')}</p>
        </div>  
        </>
    )
}