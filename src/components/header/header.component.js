import React from 'react';
import { Navbar, Nav, NavDropdown, Container,Image} from 'react-bootstrap';
import './header.styles.css';
import LogoBol from '../../assets/img/logo11.png';

const Header = () => {
    return ( 
        <div>
            <Navbar bg="light" expand="lg" className='shadow-sm bg-white rounded p-0'>
                <Container>
                <Navbar.Brand href="#home" className='header'>
                  <Image className="d-none d-sm-inline-block mr-3"  src={LogoBol} rounded fluid width='80px' />
                   ЈЗУ ОПШТА БОЛНИЦА - ПРИЛЕП</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
      <Nav.Link href="#home" className='nav-items'>ПОЧЕТНА</Nav.Link>
      <Nav.Link href="#link" className='nav-items'>ЗА НАС</Nav.Link>
      <NavDropdown title="ОДДЕЛЕНИЈА" id="basic-nav-dropdown" className='nav-items'>
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
     );
}
 
export default Header;