import  React  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import video from '/src/img/select-video.mp4'

import '../Modal/Modal.sass'

const Modalvideo2 = ({show2, handleClose2}) => {
    return (
        <Modal className='t-modal' size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered show={show2} onHide={handleClose2}
        >
        <Modal.Header closeButton>
          <Modal.Title>One Piece</Modal.Title>
        </Modal.Header>
        <Modal.Body><video autoPlay width="100%" height="100%" controls>
        <source src={video} type="video/mp4"/>
        Opa, acho que o seu navegador nao suporta :/
        </video></Modal.Body>
        <Modal.Footer>
        <Button className='btn-link' href='https://alanfelipem.github.io/Projeto-OnePiece/' target='blank'>
            Ver Projeto
          </Button>
          <Button className='close-modal' onClick={handleClose2}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Modalvideo2

