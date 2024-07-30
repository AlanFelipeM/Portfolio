import  React  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import video from '/src/img/petlife-video.mp4'

import '../Modal/Modal.sass'

const Modalvideo4 = ({show4, handleClose4}) => {
  return (
      <Modal className='t-modal' size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show4} onHide={handleClose4}
      >
      <Modal.Header closeButton>
        <Modal.Title>PetLife</Modal.Title>
      </Modal.Header>
      <Modal.Body><video autoPlay width="100%" height="100%" controls>
        <source src={video} type="video/mp4"/>
        Opa, acho que o seu navegador nao suporta :/
        </video></Modal.Body>
      <Modal.Footer>
      <Button className='btn-link' href='https://alanfelipem.github.io/PetLife/' target='blank'>
            Ver Projeto
          </Button>
        <Button className='close-modal' onClick={handleClose4}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Modalvideo4

