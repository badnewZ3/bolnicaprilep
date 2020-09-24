import React from 'react';
import { Row , Col } from 'react-bootstrap';
import CardItem from './card-item.component';

const CardSection = () => {
    return ( 
            <Row className='m-5'>
                <Col md={6} lg={3}><CardItem/></Col>
                <Col md={6} lg={3}><CardItem/></Col>
                <Col md={6} lg={3}><CardItem/></Col>
                <Col md={6} lg={3}><CardItem/></Col>
            </Row>
    
     );
}
 
export default CardSection;