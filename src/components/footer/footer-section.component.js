import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import './footer-section.styles.css'

const MainFooter = () => {
    return ( 
        <div className='bg-light footer'>
            <Container>
                <Row>
                    <Col>
                    <h4>Контакт</h4>
                    </Col>
                    <Col>
                    <h4>Контакт</h4>
                    </Col>
                    <Col>
                    <h4>Контакт</h4>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default MainFooter;