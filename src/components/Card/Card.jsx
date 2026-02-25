import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next';


import '../Card/Card.sass'
export default function Card(props) {
    const { t } = useTranslation();

    return (

        <>
            <Container>
                <div className='Card'>
                    <img className='img-card' src={props.img} alt="" onClick={props.event} />
                    <div className="about-project">
                        <h1 className="titleproject"><i>{props.title}</i></h1>
                        <div className="tec">
                            <h3 className={props.titletec1?.toLowerCase() || ''}>{props.titletec1}</h3>
                            <h3 className={props.titletec2?.toLowerCase() || ''}>{props.titletec2}</h3>
                            <h3 className={props.titletec3?.toLowerCase() || ''}>{props.titletec3}</h3>
                        </div>
                        <div className='text'><p>{props.abouttec}</p></div>
                        <div className='links'>
                            <a href={props.linkproject} target='_blank'><i>{t('linkProjeto')}</i></a>
                            <a href={props.linkgit} target='_blank'><i>Link GitHub</i></a>
                        </div>
                    </div>
                </div>
            </Container>
        </>

    )
}