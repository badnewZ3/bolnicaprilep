import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './korisni-linkovi.styles.css';

const KorisniLinkovi = () => {
    return ( 
        <div className='bg-dark'>
        <Container>
            <Row>
                <Col lg={12} className='my-3'>
        
            <h1 className='text-light mb-3'>Корисни Линкови</h1>
            <a href='http://mojtermin.mk/patients' target="_blank" rel="noopener noreferrer" ><img src={require('../../assets/img/linkovi/mojtermin.png')} style={{width:'90px', marginRight:'3rem'}} alt='Mojtermin' /></a>
            <a href='http://zdravstvo.gov.mk/' target="_blank" rel="noopener noreferrer" ><img src={require('../../assets/img/linkovi/zdravstvo.png')} style={{width:'90px', marginRight:'3rem'}} alt='Zdravstvo' /></a>
            <a href='http://www.fzo.org.mk/' target="_blank" rel="noopener noreferrer" ><img src={require('../../assets/img/linkovi/fzom.png')} style={{width:'90px',marginRight:'3rem'}}alt='Fzom' /></a>
            <a href='https://lekovi.zdravstvo.gov.mk/' target="_blank" rel="noopener noreferrer" ><img src={require('../../assets/img/linkovi/lekovi.png')} style={{width:'90px'}} alt='Lekovi' /></a>
            </Col>
            </Row>
        </Container>
        </div>
     );
}
 
export default KorisniLinkovi;