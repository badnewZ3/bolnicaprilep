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
            oddeli:oddeli,
            oddeliInfo:'',
         }
         
         
    }
         onButtonChange = (event) => {
        this.setState({
            oddeliInfo:event.target.id
        });
        console.log(this.state.oddeliInfo);
      
      };
      onButtonReturn = () => {
          this.setState({
              oddeliInfo:''
          })
      }

    
    render() { 
        const oddeli = this.state.oddeli;
        const oddeliInfo = this.state.oddeliInfo;
        const siteOddeli = oddeli.map( oddeli => {
            return <Col key={oddeli.id} className='mb-3'><OddeliItem key={oddeli.id} img={oddeli.img} name={oddeli.name.toLocaleUpperCase()} id={oddeli.id} onButton={this.onButtonChange} /></Col>
        } )
        let oddeliPosebno;
         if (!this.state.oddeliInfo) {
            oddeliPosebno = siteOddeli;
            
        } else {
        oddeliPosebno = <div><div>{oddeli[oddeliInfo - 1].name}</div>
                <button onClick={this.onButtonReturn}>Назад</button></div>
        }
        console.log(oddeliInfo);
        return (
            <div >
                <h1>ОДДЕЛИ</h1>
                <FontAwesomeIcon icon={faHandHoldingMedical} size='4x' className='mb-3'/>
            <div className='bg-light pt-3'>
            <Container >
                <Row className='mb-3'>
                    {oddeliPosebno}
                    
                </Row>
            </Container>
            </div>
            </div>
         );
    }
}
 
export default SiteOddeli;