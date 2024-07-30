import Container from 'react-bootstrap/Container'
import html from '/src/img/html.png'
import css from '/src/img/css.png'
import js from '/src/img/js.png'
import react from '/src/img/react.png'
import sass from '/src/img/sass.png'
import bootstrap from '/src/img/bootstrap.png'
import figma from '/src/img/figma.png'
import git from '/src/img/git.png'
import bi from '/src/img/bi.png'
import ts from '/src/img/ts.png'
import next from '/src/img/next.png'
import node from '/src/img/node.png'
import mongo from '/src/img/mongo.png'
import mysql from '/src/img/mysql.png'
import Tilt from 'react-parallax-tilt'

import '../Skills/Skills.sass'

export default function Skills() {
    return(
        <>
        <div className='pdr'>
        <Container>
        <h1 className='title'>- Skills -</h1>
        <div className='skill'>
            <div className="html1">
            <Tilt><img src={html} alt="html"/></Tilt>
            <p>HTML</p>
            </div>

            <div className="tecnologia">
            <Tilt><img src={css} alt="css"/></Tilt>
            <p>CSS</p>
            </div>

            <div className="tecnologia">
            <Tilt><img src={js} alt="js"/></Tilt>
            <p>JavaScript</p>
            </div>
            
            <div className="tecnologia">
            <Tilt><img src={react} alt="react"/></Tilt>
            <p>React</p>
            </div>
            
            <div className="tecnologia">
            <Tilt><img src={sass} alt="sass"/></Tilt>
            <p>Sass</p>
            </div>
            
            <div className="tecnologia">
            <Tilt><img src={bootstrap} alt="bootstrap"/></Tilt>
            <p>Bootstrap</p>
            </div>
            
            <div className="tecnologia">
            <Tilt><img src={git} alt="git"/></Tilt>
            <p>Git</p>
            </div>
           
            <div className="tecnologia">
            <Tilt><img className='figma' src={figma} alt="figma"/></Tilt>
            <p>Figma</p>
            </div>
            
            <div className="tecnologia">
            <Tilt><img className='bi' src={bi} alt="bi"/></Tilt>
            <p>PowerBI</p>
            </div>
        </div>

        <h2 className='title2'>Estudando</h2>
        <div className="studing">
            
            <div className="ts">
         <Tilt> <img src={ts} alt="ts"/></Tilt>
            <p>TypeScript</p>
            </div>

            <div className="tecnologia">
           <Tilt> <img src={next} alt="next"/></Tilt>
            <p>NextJS</p>
            </div>

            <div className="tecnologia">
            <Tilt><img src={node} alt="node"/></Tilt>
            <p>NodeJS</p>
            </div>
            
            <div className="tecnologia">
            <Tilt><img src={mongo} alt="mongo"/></Tilt>
            <p>MongoDB</p>
            </div>

            <div className="tecnologia"><Tilt>
            <img src={mysql} alt="mysql"/></Tilt>
            <p>Mysql</p>
            </div>
        </div>
        </Container>
        </div>
        </>
    )
}