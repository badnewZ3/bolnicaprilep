import React from 'react';
import { Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardItem from './card-item.component';
import cards from './card-list.component';

class CardSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            cards: cards
         }
    }
    
    render() { 
        const card = this.state.cards;
        const cardList = card.map((card ) => {
            return <Col md className='px-0' key={card.id}><Link to={card.link}><CardItem icon={card.icon} key={card.id} name={card.name} username={card.username} color={card.color}/></Link> </Col>
         });
           
        return (
            <Row className='w-100 m-0'>{cardList}
            </Row>
        )    
    }
}
 
export default CardSection;
 