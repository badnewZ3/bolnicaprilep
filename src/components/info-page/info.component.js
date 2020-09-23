import React from 'react';
import { Container }from 'react-bootstrap';
import './info.styles.css';

const InfoHeader = () => {
    return ( 
        <div className='info'>
            <Container className='info-header'>
                <div>
                    <p className='info-text-1'>TEL: 075 - 900 - 500</p>
                </div>
                <div>
                    <p className='info-text-2'>Email: bolnicapp@yahoo.com</p>
                </div>
            </Container>
        </div>
     );
}
 
export default InfoHeader;