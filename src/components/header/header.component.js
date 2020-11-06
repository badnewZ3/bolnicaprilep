import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container,Image} from 'react-bootstrap';
import './header.styles.css';
import LogoBol from '../../assets/img/logo11.png';

const Header = () => {
    return ( 
        <div>
            <Navbar bg="light" expand="lg" className='shadow-sm bg-white p-0 fixed'>
                <Container>
                  <Link to='/'>
                <Navbar.Brand className='header'>
                  <Image className="d-none d-sm-inline-block mr-3"  src={LogoBol} rounded fluid width='80px' />
                   ЈЗУ ОПШТА БОЛНИЦА - ПРИЛЕП</Navbar.Brand>
                   </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
      <Nav.Link href="#home" className='nav-items'><strong>ПОЧЕТНА</strong></Nav.Link>
      <Nav.Link href="#link" className='nav-items'><strong>ЗА НАС</strong></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
     );
}
 
export default Header;