import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Card from '../Card/Card'
import Card2 from '../Card/Card2'
import alanx from '/src/img/alanx.png'
import select from '/src/img/vexeltech.png'
import agb from '/src/img/AGB.png'
import rcn from '/src/img/RCN.png'
import Modalvideo from '../Modal/Modalvideo';
import { useTranslation } from 'react-i18next';

import '../Projects/Projects.sass'


export default function Projects() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                        event={null}
                        img={rcn}
                        title={t('tituloprojeto3')}
                        titletec1="WordPress"
                        titletec2="PHP"
                        titletec3="JavaScript"
                        abouttec={t('projeto3')}
                        linkproject='https://www.ige.unicamp.br/rede-centro-norte-brasil/'
                        linkgit={null}
                    />

                    <Card2
                        event={null}
                        img={agb}
                        title={t('tituloprojeto4')}
                        titletec1="WordPress"
                        titletec2="PHP"
                        titletec3="Sass"
                        abouttec={t('projeto4')}
                        linkproject='https://agbcampinas.com.br/'
                        linkgit={null}
                    />
                </div>

                <div className='ver-mais'>
                    <a className="button-vermais" href="https://github.com/AlanFelipeM" target='blank'>{t('botaoMais')}</a>
                </div>

                <Modalvideo show={show} handleClose={handleClose} />

            </Container>
        </div>
    )
}
