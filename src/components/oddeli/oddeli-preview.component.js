import React from 'react';
import { Link } from 'react-router-dom';
import OddeliItem from './oddeli-item.component';
import { Col, Container ,Row } from 'react-bootstrap';
import oddeli from './oddeli-content.component';
import './oddeli-preview.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingMedical} from '@fortawesome/free-solid-svg-icons';


class ListaOddeli extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            oddeli: oddeli,
         }
    }

    


    render() { 
        const oddeli = this.state.oddeli;
        const oddeliShortList = oddeli.filter((item, index) => index < 6).map( oddeli => {
            return <Col className='mb-3' key={oddeli.id}><OddeliItem key={oddeli.id} img={oddeli.img} name={oddeli.name.toLocaleUpperCase()} link={oddeli.link}/></Col>
        })


        return (
            <div className='bg-light oddeli-pozadina' >
                <Container >
                <h1 className='mb-3'>ОДДЕЛИ</h1>
                <FontAwesomeIcon icon={faHandHoldingMedical} size='4x' className='mb-3'/>
                <Row className='mb-3'>
                    {oddeliShortList}
                </Row>
           <Link to='/oddeli'><button className='bg-transparent text-dark button' onClick={this.onButtonShow}> Види ги сите оддели ...</button></Link>
            </Container>
            
            </div>
         );
    }
}
 
export default ListaOddeli;