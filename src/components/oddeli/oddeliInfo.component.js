import React from 'react';
import './oddeliinfo.styles.css'


const OddeliInfo = ({name, text, onButton}) => {
    return ( 
        <div className='oddeli-info'>
            <h2>{name}</h2>
            <p>{text}</p>
            <button onClick={onButton} className='button'>Назад</button>
        </div>
     );
}
 
export default OddeliInfo;