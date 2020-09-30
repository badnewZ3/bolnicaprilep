import React from 'react';
import { Col, Row , Container } from 'react-bootstrap';
import oddeli from './oddeli-content.component';
import OddeliItem from './oddeli-item.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingMedical} from '@fortawesome/free-solid-svg-icons';


class SiteOddeli extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            oddeli:oddeli
         }
    }
    render() { 
        const oddeli = this.state.oddeli;
        const siteOddeli = oddeli.map( oddeli => {
            return <Col className='mb-3'><OddeliItem img={oddeli.img} name={oddeli.name.toLocaleUpperCase()} /></Col>
        } )
        return (
            <div className='bg-light'>
                <h1>ОДДЕЛИ</h1>
                <FontAwesomeIcon icon={faHandHoldingMedical} size='4x' className='mb-3'/>
            <Container >
                <Row className='mb-3'>
                    {siteOddeli}  
                </Row>
            </Container>
            </div>
         );
    }
}
 
export default SiteOddeli;