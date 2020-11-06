import React from 'react';
import { Card } from 'react-bootstrap';
import './news-card.styles.css';

const NewsCard = ( {img, title, text, link} ) => {
    return (
      <Card className="cards">
        <a target="_blank" href={link} rel="noopener noreferrer" style={{marginLeft:'0px'}}>
      <Card.Img variant="top" src={require(`../../assets/img/${img}`)} style={{height:'250px',width:'100%' }} />
      </a>
      <Card.Body>
    <Card.Title>{title}</Card.Title>
        <Card.Text className='cardsText'>
          {text}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>

     );
}
 
export default NewsCard;