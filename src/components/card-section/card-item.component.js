import React from 'react';
import './card-item.syles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const CardItem = () => {
    return ( 
        <div className='card-item'>
            <FontAwesomeIcon icon={faCoffee} size='3x'/>
            <div>
                <div>Naslov</div>
                <div>Text</div>
            </div>
            <button>повеќе</button>
        </div>
     );
}
 
export default CardItem;