import React from 'react';
import NewsCard from './news-card.component';
import { Container ,Row ,CardGroup} from 'react-bootstrap';

class NewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            image1:'vesti-kislorod.jpg',
            image2:'genterm-donacija.jpg'
         }
    }
    render() { 
        return ( 
            <div className='bg-light py-2'>
            <h1 className='mb-5'>Најнови Вести</h1>
            <Container> 
                <Row>
            <CardGroup>
            <NewsCard img={this.state.image1}/>
            <NewsCard img={this.state.image2}/>
            <NewsCard img={this.state.image2}/>
            </CardGroup>
            </Row>
            </Container>
        </div>
         );
    }
}
 
export default NewsPage;