import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-scroll';
import Button from 'react-bootstrap/Button';
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
            <Link to="Home" smooth={true} duration={1000}>
              <Navbar.Brand className="logo">/*Alan Dev*/</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
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

                  <Link to="Home" smooth={true} duration={1000}>
                    <Nav.Link className="navlink">Home</Nav.Link>
                  </Link>
                  <Link to="About" smooth={true} duration={1000}>
                    <Nav.Link className="navlink">{t('sobre')}</Nav.Link>
                  </Link>
                  <Link to="Skills" smooth={true} duration={1000}>
                    <Nav.Link className="navlink">{t('habilidades')}</Nav.Link>
                  </Link>
                  <Link to="Projects" smooth={true} duration={1000}>
                    <Nav.Link className="navlink">{t('projetos')}</Nav.Link>
                  </Link>
                  <Link to="Contact" smooth={true} duration={1000}>
                    <Nav.Link className="navlink">{t('contato')}</Nav.Link>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}