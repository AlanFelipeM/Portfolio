import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import brasil from '/src/img/icon-br.png'
import eua from '/src/img/icon-eua.png'
import '../NavBar/NavBar.sass';

export default function NavBar({ handleChangeLanguage, currentLanguage }) {
  const { t } = useTranslation();
  return (
    <>
      {['md'].map((expand) => (
        <Navbar sticky="top" key={expand} expand={expand} className="Navbar" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={NavLink} to="/" className="logo">/*Alan Dev*/</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
              <span className='navbar-toggler-icon'>
                <span></span>
              </span>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              className="offcanvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="logo2" id={`offcanvasNavbarLabel-expand-${expand}`}>
                  /*Alan Dev*/
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={NavLink} to="/" className="navlink" end>Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/about" className="navlink">{t('sobre')}</Nav.Link>
                  <Nav.Link as={NavLink} to="/skills" className="navlink">{t('habilidades')}</Nav.Link>
                  <Nav.Link as={NavLink} to="/projects" className="navlink">{t('projetos')}</Nav.Link>

                  <div
                    className={`language-toggle ${currentLanguage === 'en' ? 'on' : 'off'}`}
                    onClick={handleChangeLanguage}
                  >
                    <img
                      src={brasil}
                      alt="Portuguese"
                      className={`flag brazil ${currentLanguage === 'pt' ? 'active' : ''}`}
                    />
                    <img
                      src={eua}
                      alt="English"
                      className={`flag usa ${currentLanguage === 'en' ? 'active' : ''}`}
                    />
                    <div className="toggle-switch"></div>
                  </div>


                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
