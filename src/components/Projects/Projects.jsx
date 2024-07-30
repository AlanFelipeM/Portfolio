import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Card  from '../Card/Card'
import Card2  from '../Card/Card2'
import alanx from '/src/img/alanx.png'
import select from '/src/img/select.png'
import petlife from '/src/img/petlife.png'
import estoque from '/src/img/estoque.png'
import Modalvideo from '../Modal/Modalvideo';
import Modalvideo2 from '../Modal/Modalvideo2'
import Modalvideo3 from '../Modal/Modalvideo3'
import Modalvideo4 from '../Modal/Modalvideo4'

import '../Projects/Projects.sass'


export default function Projects () {
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
  
    return (
        <>
        <div className="pdr pdr1">
            <Container>
               <h1 className="title">- Projetos -</h1>
                <Card 
                event={handleShow}
                img={alanx} 
                title="AlanX" 
                titletec1="HTML" 
                titletec2="Sass" 
                titletec3="Bootstrap"
                abouttec="Projeto inspirado na SpaceX utilizando HTML, Sass e Bootstrap. O HTML estrutura o conteúdo, o Sass traz estilização eficiente e personalizada, e o Bootstrap garante um design responsivo e moderno. O site reflete a inovação da SpaceX, com uma interface limpa e visualmente impactante."
                linkproject='https://alanx.netlify.app'
                linkgit='https://github.com/AlanFelipeM/AlanX'
                />
                
                <Card2
                event={handleShow2}
                img={select} 
                title="Seleção de Personagens" 
                titletec1="HTML" 
                titletec2="Css" 
                titletec3="JavaScript"
                abouttec="Uma pagina de seleção de personagens do One Piece utilizando HTML, CSS e JavaScript. O HTML estrutura o conteúdo, o CSS estiliza a interface com um design vibrante e temático, e o JavaScript permite a interação dinâmica dos usuários com a seleção dos personagens. O site oferece uma experiência divertida e envolvente para os fãs da série."
                linkproject='https://alanfelipem.github.io/Projeto-OnePiece/'
                linkgit='https://github.com/AlanFelipeM/Projeto-OnePiece'
                />

                <div className="gestor-estoque">
                <Card 
                event={handleShow3}
                img={estoque} 
                title="Gestor de Estoque" 
                titletec1="HTML" 
                titletec2="React" 
                titletec3="Css"
                abouttec="Um projeto de gestor de estoque usando HTML, CSS, React e Vite, com armazenamento no cache do Google. Os usuários podem adicionar, remover, editar e excluir itens facilmente. A interface é intuitiva e rápida, graças a HTML, CSS e React, com Vite acelerando o desenvolvimento. O cache do Google garante armazenamento seguro sem necessidade de backend robusto. Esta solução eficiente permite gerenciar inventários em tempo real, proporcionando uma ferramenta digital avançada para a gestão de estoques."
                linkproject='https://gestor-estoque.netlify.app/'
                linkgit='https://github.com/AlanFelipeM/Gestor-de-Estoque'
                />
                </div>
                
                <div className='petlife'>
                <Card2
                event={handleShow4}
                img={petlife} 
                title="PetLife" 
                titletec1="HTML" 
                titletec2="Css" 
                titletec3="JavaScript"
                abouttec="Uma landing page para uma clínica veterinária utilizando HTML, CSS e JavaScript. O HTML organiza o conteúdo, o CSS oferece um design atraente e acolhedor, e o JavaScript adiciona interatividade e funcionalidades dinâmicas. A página destaca os serviços da clínica, apresenta a equipe de veterinários, proporcionando uma experiência informativa e envolvente para os donos de pets."
                linkproject='https://alanfelipem.github.io/PetLife/'
                linkgit='https://github.com/AlanFelipeM/PetLife'
                />
                </div>

                <div className='ver-mais'>
                    <a className="button-vermais" href="https://github.com/AlanFelipeM" target='blank'>Mais Projetos</a>
                </div>
            
            <Modalvideo 
            show={show} handleClose={handleClose}/>
            <Modalvideo2
            show2={show2} handleClose2={handleClose2}
            />
            <Modalvideo3
            show3={show3} handleClose3={handleClose3}
            />
            <Modalvideo4
            show4={show4} handleClose4={handleClose4}
            />
            </Container>
        </div>
        </>
    )
}