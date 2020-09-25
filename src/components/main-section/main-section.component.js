import React from 'react';
import MianInfo from './main-info.component';
import MainSlider from './main-slider.component';
import { Container, Row, Col } from 'react-bootstrap';
import './main-section.styles.css';

const MainSection = () => {
    return (
        <div className='main-section'> 
        <Container className='mt-3 border p-3'>
            <Row>
                <Col lg={12}  className='mb-2' ><MainSlider/></Col>
                <Col lg={12} ><MianInfo/></Col>
                </Row>
        </Container>
                
            
        </div>
     );
}
 
export default MainSection;