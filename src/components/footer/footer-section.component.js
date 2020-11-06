import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import './footer-section.styles.css';
import Kontakt from './kontakt.component';
import MapContainer from './google-map.component';

const MainFooter = () => {
    return ( 
        <div className='bg-dark text-light '>
        <div className='footer'>
            <Container>
                <Row>
                    <Col  lg={6} md={12}>
                    <h3 className='contact-title d-inline-block'>Контакт</h3>
                    <Kontakt/>
                    </Col>
                    <Col lg={6} md={12}> 
                    <h3 className='contact-title d-inline-block'>Локација</h3>
                    <MapContainer/>
                    </Col>
                </Row>
            </Container>
        </div>
        <p>&copy; 2020 Општа Болница - Прилеп</p>
    </div>
     );
}
 
export default MainFooter;