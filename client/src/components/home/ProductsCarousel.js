import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

import drone from '../../images/drone.png';

class ProductsCarousel extends Component {
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <Image className="center-block" src={drone} responsive/>
                    <Carousel.Caption>
                        <h3>{this.props.messages.kit_title}</h3>
                        <p>{this.props.messages.kit_message}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="center-block" src={drone} responsive/>
                    <Carousel.Caption>
                        <h3>{this.props.messages.platform_title}</h3>
                        <p>{this.props.messages.platform_message}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="center-block" src={drone} responsive/>
                    <Carousel.Caption>
                        <h3>{this.props.messages.ecosystem_title}</h3>
                        <p>{this.props.messages.ecosystem_message}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default ProductsCarousel;
