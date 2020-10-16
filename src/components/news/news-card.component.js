import React from 'react';
import { Card } from 'react-bootstrap';
import './news-card.styles.css';

const NewsCard = ( {img, title, text, link} ) => {
    return (
      <Card className="cards">
        <a href={link} style={{marginLeft:'0px'}}>
      <Card.Img variant="top" src={require(`../../assets/img/${img}`)} style={{height:'250px',width:'100%' }} />
      </a>
      <Card.Body>
    <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>

     );
}
 
export default NewsCard;