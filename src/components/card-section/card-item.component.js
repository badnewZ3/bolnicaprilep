import React from 'react';
import './card-item.syles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardItem = ({id, name, username, email, icon}) => {
    return ( 
        <div className='card-item'>
                <FontAwesomeIcon icon={icon} size="3x"/>
                <div><h3>{name}</h3></div>
                <div>{username}</div>
        </div>
     );
}
 
export default CardItem;