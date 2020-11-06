import React from 'react';
import { Container }from 'react-bootstrap';
import './info.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneSquareAlt, faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

const InfoHeader = () => {
    return ( 
        <div className='info bg-dark'>
            <Container className='info-header'>
                <div>
                <p className='info-text-1'> <FontAwesomeIcon icon={faPhoneSquareAlt}/> +389 48 422 430</p>
                </div>
                <div>
                <FontAwesomeIcon icon={faEnvelopeSquare}/>
            <a href="mailto:bolnicapp@yahoo.com">bolnicapp@yahoo.com</a>
                </div>
            </Container>
        </div>
     );
}
 
export default InfoHeader;