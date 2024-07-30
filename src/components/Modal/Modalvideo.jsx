import  React  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import video from '/src/img/alax-video.mp4'

import '../Modal/Modal.sass'

const Modalvideo = ({show, handleClose}) => {
    return (
        <Modal className="t-modal"
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered show={show} onHide={handleClose}
        >
        <Modal.Header closeButton>
          <Modal.Title >AlanX</Modal.Title>
        </Modal.Header>
        <Modal.Body><video autoPlay width="100%" height="100%" controls>
        <source src={video} type="video/mp4"/>
        Opa, acho que o seu navegador nao suporta :/
        </video>
</Modal.Body>
        <Modal.Footer>
        <Button className='btn-link' href='https://alanx.netlify.app' target='blank'>
            Ver Projeto
          </Button>
          <Button className='close-modal' onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Modalvideo