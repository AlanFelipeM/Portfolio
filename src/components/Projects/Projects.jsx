import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Card from '../Card/Card'
import Card2 from '../Card/Card2'
import alanx from '/src/img/alanx.png'
import select from '/src/img/vexeltech.png'
import gofix from '/src/img/gofix.png'
import estoque from '/src/img/estoque.png'
import Modalvideo from '../Modal/Modalvideo';
import Modalvideo2 from '../Modal/Modalvideo2'
import Modalvideo3 from '../Modal/Modalvideo3'
import Modalvideo4 from '../Modal/Modalvideo4'
import { useTranslation } from 'react-i18next';

import '../Projects/Projects.sass'


export default function Projects() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const { t } = useTranslation();

    return (
        <div className='projects-page'>
            <Container className="projects-container">
                <h1 className="title">// {t('tituloProjetos')}</h1>

                <div className="projects-grid">
                    <Card
                        event={handleShow}
                        img={alanx}
                        title="AlanX"
                        titletec1="HTML"
                        titletec2="Sass"
                        titletec3="Bootstrap"
                        abouttec={t('projeto1')}
                        linkproject='https://alanx.netlify.app'
                        linkgit='https://github.com/AlanFelipeM/AlanX'
                    />

                    <Card2
                        event={null}
                        img={select}
                        title={t('tituloprojeto2')}
                        titletec1="React"
                        titletec2="Tailwind"
                        titletec3="TypeScript"
                        abouttec={t('projeto2')}
                        linkproject='https://vexeltech.com.br/'
                        linkgit='https://github.com/AlanFelipeM'
                    />

                    <Card
                        event={handleShow3}
                        img={estoque}
                        title={t('tituloprojeto3')}
                        titletec1="HTML"
                        titletec2="React"
                        titletec3="Css"
                        abouttec={t('projeto3')}
                        linkproject='https://gestor-estoque.netlify.app/'
                        linkgit='https://github.com/AlanFelipeM/Gestor-de-Estoque'
                    />

                    <Card2
                        event={null}
                        img={gofix}
                        title={t('tituloprojeto4')}
                        titletec1="Flutter"
                        titletec2="Dart"
                        titletec3=""
                        abouttec={t('projeto4')}
                        linkproject='https://gofiix.netlify.app/'
                        linkgit='https://github.com/AlanFelipeM'
                    />
                </div>

                <div className='ver-mais'>
                    <a className="button-vermais" href="https://github.com/AlanFelipeM" target='blank'>{t('botaoMais')}</a>
                </div>

                <Modalvideo show={show} handleClose={handleClose} />
                <Modalvideo2 show2={show2} handleClose2={handleClose2} />
                <Modalvideo3 show3={show3} handleClose3={handleClose3} />
                <Modalvideo4 show4={show4} handleClose4={handleClose4} />
            </Container>
        </div>
    )
}
