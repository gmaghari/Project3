import React from 'react';
import { Carousel } from 'react-bootstrap';
import './slideshow.css';
import { Container } from '../Grid';

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div className="carousel-container">
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block h-100 w-100 banner-image"
              src="/assets/images/banners/21YQT_banner.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block h-100 w-100 banner-image"
              src="/assets/images/banners/21YRL_banner.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        </div>
    );
  }
}

export default ControlledCarousel;