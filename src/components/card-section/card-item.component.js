import React from 'react';
import './card-item.syles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardItem = ({ name, username, color, icon}) => {
    return ( 
        <div style={{backgroundColor:`${color}`}} className='text-light py-4'>
                <FontAwesomeIcon icon={icon} size="3x"/>
                <div><h3>{name}</h3></div>
                <div>{username}</div>
        </div>
     );
}
 
export default CardItem;