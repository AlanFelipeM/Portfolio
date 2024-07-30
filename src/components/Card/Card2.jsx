import Container from 'react-bootstrap/Container'


import '../Card/Card.sass'
export default function Card2(props) {
    return (
        <>
         <Container>
            <div className='Card card2'>
            <div className="about-project">
            <h1 className="titleproject"><i>{props.title}</i></h1>
            <div className="tec">
            <h3 className='html'>{props.titletec1}</h3>
            <h3 className='css'>{props.titletec2}</h3>
            <h3 className='js'>{props.titletec3}</h3>
            </div>
            <div className='text2'><p>{props.abouttec}</p></div> 
            <div className='links'>
                <a href={props.linkproject} target='_blank'><i>Link Projeto</i></a>
                <a href={props.linkgit} target='_blank'><i>Link GitHub</i></a>
                </div>
            </div>
            <img className='img-card' src={props.img} alt="" onClick={props.event}/>
            </div>
        </Container>
        </>
    )
}