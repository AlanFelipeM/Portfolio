import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-scroll';

import '../NavBar/NavBar.sass';

export default function NavBar() {
    return (
        <>
        {['md'].map((expand) => (
      <Navbar sticky="top" key={expand} expand={expand} className='Navbar' data-bs-theme="dark">
        <Container>
        <Link 
        smooth={true}
        to="Home"
        duration={1500}> 

      <Navbar.Brand className='logo'>/*Alan Dev*/</Navbar.Brand>
      </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />  
          <Navbar.Offcanvas
              className='offcanvas' 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
            <Offcanvas.Header closeButton>
                 <Offcanvas.Title className='logo' id={`offcanvasNavbarLabel-expand-${expand}`}>
                 /*Alan Dev*/
                </Offcanvas.Title>
              </Offcanvas.Header>
             <Offcanvas.Body>
             <Nav className="justify-content-end flex-grow-1 pe-3">
             <Link  
             smooth={true}             
              to="Home" 
              duration={1500}>
            <Nav.Link className="navlink">Home</Nav.Link>
            </Link>
            <Link 
            smooth={true}             
              to="About" 
              duration={1500}> 
            <Nav.Link className="navlink">Sobre</Nav.Link>
            </Link>
            
            <Link   
            smooth={true}           
              to="Skills"  
              duration={1500}> 
            <Nav.Link className="navlink">Habilidades</Nav.Link>
            </Link>
            
            <Link  
            isDynamic={true}
            smooth={true} 
              to="Projects" 
              duration={1500}> 
            <Nav.Link className="navlink">Projetos</Nav.Link>
            </Link>
            
            <Link 
            isDynamic={true}
            smooth={true}
              to="Contact" 
              duration={1500}> 
            <Nav.Link className="navlink">Contato</Nav.Link>
            </Link>
          </Nav>
              </Offcanvas.Body>
              </Navbar.Offcanvas>
        </Container>
      </Navbar>
      ))}
      </>
    )
}