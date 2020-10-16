import React from 'react';
import { Card,Button } from 'react-bootstrap';


const OddeliItem = ({img, name, id, onButton,}) => {
  
    return ( 
    <Card style={{ width: '18rem', height:'320px' }}  >
    <Card.Img variant="top" src={require(`../../assets/img/oddeli/${img}.jpg`)} height='160px' />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
    <Button variant="primary" className="bg-dark" id={id} onClick={onButton}>ПОВЕЌЕ</Button>
    </Card.Body>
  </Card> );
}
 
export default OddeliItem;