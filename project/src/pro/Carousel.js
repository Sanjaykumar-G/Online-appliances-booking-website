import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselImage from './CarouselImage';
import dis0 from '../assets/dis0.jpg';
import dis1 from '../assets/dis1.jpg';
import dis2 from '../assets/dis2.jpg';
import dis3 from '../assets/dis3.jpg';

const MyCarousel = () => {
  const arrowStyles = {
    fontSize: '80px',
    color: 'grey',
    lineHeight: '1.5',
    borderRadius: '50%', 
    display: 'inline-block', 
    padding: '10px', 
    transition: 'border-radius 0.3s ease'
  };

  return (
    <Carousel interval={2000} nextIcon={<span style={arrowStyles}>&gt;</span>} prevIcon={<span style={arrowStyles}>&lt;</span>} style={{border : "2px solid lightblue"}}>
      <Carousel.Item>
        <CarouselImage src={dis0} alt="First Image" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={dis1} alt="Second Image" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={dis2} alt="Third Image" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={dis3} alt="Third Image" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
