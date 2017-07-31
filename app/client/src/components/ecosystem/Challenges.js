import React, { Component } from 'react';
import { Carousel, Image, Grid, Row, Col, Button } from 'react-bootstrap';

import white from '../../images/ecosystem/white.jpg';
import gray from '../../images/ecosystem/gray.jpeg';

class Challenges extends Component {
    render(){
        return(
             <div style={{paddingTop:"7%", paddingLeft:"20%", paddingRight:"20%"}}>
                <h4 className="text-center">{this.props.messages.title}</h4>
                <Carousel style={{height:"300px"}}>
                    <Carousel.Item style={{height:"300px"}}>
                        <Image className="center-block" src={white} responsive/>
                        <Carousel.Caption style={{top:"5%"}}>
                            <Grid>
                                <Row className="left-text">
                                    <Col md={2} xs={2} lg={2}>
                                        <Image src={gray} style={{width:"100%"}}/>
                                    </Col>
                                    <Col md={4} xs={4} lg={4}>
                                        <h4 style={{color:"#000000"}}>{this.props.messages.challenge1.title}</h4>
                                        <p style={{color:"#000000"}}>{this.props.messages.challenge1.message}</p>
                                        <Button bsStyle="link">{this.props.messages.announcement}</Button><br/>
                                        <Button bsStyle="primary">{this.props.messages.participate}</Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item style={{height:"300px"}}>
                        <Image className="center-block" src={white} responsive/>
                        <Carousel.Caption style={{top:"5%"}}>
                            <Grid>
                                <Row className="left-text">
                                    <Col md={2} xs={2} lg={2}>
                                        <Image src={gray} style={{width:"100%"}}/>
                                    </Col>
                                    <Col md={4} xs={4} lg={4}>
                                        <h4 style={{color:"#000000"}}>{this.props.messages.challenge2.title}</h4>
                                        <p style={{color:"#000000"}}>{this.props.messages.challenge2.message}</p>
                                        <Button bsStyle="link">{this.props.messages.announcement}</Button><br/>
                                        <Button bsStyle="primary">{this.props.messages.participate}</Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Challenges;
