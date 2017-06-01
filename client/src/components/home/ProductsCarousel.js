import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

import drone from '../../images/drone.png';

function ProductsCarousel() {
    return(
        <Carousel>
            <Carousel.Item>
                <Image className="center-block" src={drone} responsive/>
                <Carousel.Caption>
                    <h3>Kit</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="center-block" src={drone} responsive/>
                <Carousel.Caption>
                    <h3>Platform</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="center-block" src={drone} responsive/>
                <Carousel.Caption>
                    <h3>Ecosystem</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProductsCarousel;
