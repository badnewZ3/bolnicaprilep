import React from 'react';
import './lokali-za-kontakt.styles.css';
import { Container } from 'react-bootstrap';
import oddeli from '../oddeli/oddeli-content.component';


class KontaktLokali extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            oddeli: oddeli
         }
    }
    render() { 

        const oddeli = this.state.oddeli;

        const oddeliKontakt = oddeli.map(oddeli => {
            return <table style={{width:'60%'}}>
                <tr >
                <th colSpan="2">{oddeli.name.toLocaleUpperCase()}</th>
                </tr>
                <tr>
                    <td>Амбуланта</td>
                    <td>{oddeli.lokalAmb}</td>
                </tr>
                <tr>
                    <td>Одделение</td>
                    <td>{oddeli.lokalOdd}</td>
                </tr>
            </table>
        })

        return ( 
        <div>
            <h1 className='my-4'>Локали за Контакт</h1> 
            <div className='bg-light'>
            <Container className='lokali pt-4'>
                <h5>Централа: +389 48 422 430</h5>
                <h5 className='title'>Оддели</h5>
                {oddeliKontakt}
                </Container>
            </div>
            
        </div>
         );
    }
}
 
export default KontaktLokali;