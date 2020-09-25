import React from 'react';
import { Row , Col } from 'react-bootstrap';
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
            return <Col md><CardItem icon={card.icon} key={card.id} name={card.name} username={card.username}/></Col>
         });
           
        return (
            <Row className='bg-light mt-5 pt-3'>{cardList}
            </Row>
        )    
    }
}
 
export default CardSection;
 