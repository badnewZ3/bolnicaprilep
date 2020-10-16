import React from 'react';
import { Carousel } from 'react-bootstrap';
import Img1 from '../../assets/img/vlez1.jpg';
import './main-slider.styles.css';

const MainSlider = () => {
    return ( 
        <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={Img1}
      alt="First slide"
      height='400px'
    />
    <Carousel.Caption className='text-bg'>
      <h3>24/7 Се грижиме за вашето здравје</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../../assets/img/rtg.jpg')}
      alt="Third slide"
      height='400px'
    />

    <Carousel.Caption className='text-bg'>
      <h3>Современа Апаратура</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../../assets/img/kreveti.jpg')}
      alt="Third slide"
      height='400px'
    />

    <Carousel.Caption className='text-bg'>
      <h3>Стручност и одговорност</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     );
}
 
export default MainSlider;