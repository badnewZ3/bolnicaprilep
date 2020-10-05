import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneSquareAlt, faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';
import './kontakt.styles.css'

const Kontakt = () => {
    return ( 
        <div className='contact-wraper mt-4'>
            <div>
            <div className='contact'>
        <FontAwesomeIcon icon={faMapMarkerAlt}/>
            <p className='mb-0 ml-2'>Трајко Тарцан бб. ПРИЛЕП</p>
            </div>
            <div className='contact'>
        <FontAwesomeIcon icon={faPhoneSquareAlt}/>
            <p className='mb-0 ml-2'>075-900-500</p>
            </div>
            <div className='contact'>
        <FontAwesomeIcon icon={faEnvelopeSquare}/>
            <a href="mailto:bolnicapp@yahoo.com">bolnicapp@yahoo.com</a>
            </div>
            </div>
        </div>
     );
}
 
export default Kontakt;