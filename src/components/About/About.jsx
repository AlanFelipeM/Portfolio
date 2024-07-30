/* eslint-disable react/no-unescaped-entities */
import foto from '/src/img/eu.png'
import Container from 'react-bootstrap/Container'

import '../About/About.sass'

export default function About () {
    return(
        <>
        <div className='pdr pdr1'>
        <Container>
        <h1 className='title'>- Sobre Mim -</h1>
        <div className="about">
        <div className='txt-about'>
        <h2>Olá,</h2>
        <p>Meu nome é Alan Felipe e sou um jovem apaixonado por tecnologia, estudante de Engenharia da Computação e aluno da OnebitCode. <br/> Atualmente sou desenvolvedor Front-End e UI/UX Designer mas estou em constante estudo e aprendizado para me tronar um desenvolvedor FullStack. </p>
        <div className='saying'>
        <p><i><span>"  </span>Tente uma, duas, três vezes e se possível tente a quarta, a quinta e quantas vezes for necessário. Só não desista nas primeiras tentativas, a persistência é amiga da conquista. Se você quer chegar aonde a maioria não chega, faça o que a maioria não faz.<span>  "</span></i></p>
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