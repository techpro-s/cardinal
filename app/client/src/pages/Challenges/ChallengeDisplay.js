import React, {Component} from 'react';
import {Carousel,Row,Col,Grid,Thumbnail,Image} from 'react-bootstrap';
import javaimg from '../../images/kit/java.png';
import jsimg from '../../images/kit/javascript.png';
import cshimg from '../../images/kit/c#.png';
import tecno from '../../images/trust/universidadtecnologica.png';
import salle from '../../images/trust/universidadlasalle.png';
import white from '../../images/ecosystem/white.jpg';
import gray from '../../images/ecosystem/gray.jpeg';

class ChallengeDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
        render() {
            return (

                        <Grid>
                <Thumbnail>
                    <Row md={12}>
                        <Col md={4}>
                    <Thumbnail  alt="Challenge Image" src={this.props.challenge.backGroundImg} />
                        </Col>
                        <Col md={8}>
                            <Row>
                                <h3>{this.props.challenge.title}</h3>
                            </Row>
                            <Row>
                                <h5>{this.props.challenge.description}</h5>
                            </Row>
                            <Row>
                                <a href={this.props.challenge.PDFUrl} target="blank">{this.props.messages.announcement}</a>
                            </Row>
                            <Row>
                                <a className="btn-info btn COverview" href="#" target="blank">{this.props.messages.participate}</a>
                            </Row>
                        </Col>
                    </Row>
                    <Row md={12}>
                        <Col md={6} xs={12} lg={6}>
                            <Row className="text-center" style={{paddingTop:"5%"}}>
                                <h4>{this.props.messages.schools.title}</h4>
                            </Row>
                            <Row className="text-center" style={{paddingTop:"2%"}}>
                                <Col md={3} xs={3} lg={3}/>
                                <Col md={4} xs={10} lg={4}>
                                    <Image src={tecno} style={{width:"100%"}}/>
                                </Col>
                                <Col md={4} xs={10} lg={4}>
                                    <Image src={salle} style={{width:"100%"}}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} xs={12} lg={6}>
                            <Row className="left-text" style={{paddingTop:"5%"}}>
                                <Col md={1} xs={1} lg={1}/>
                                <Col md={6} xs={12} lg={6}>
                                    <h4>{this.props.messages.sponsors.title}</h4>
                                </Col>
                            </Row>
                            <Row className="text-center" style={{paddingTop:"2%"}}>
                                <Col md={3} xs={10} lg={3}>
                                    <Image src={javaimg}/>
                                </Col>
                                <Col md={3} xs={10} lg={3}>
                                    <Image src={jsimg}/>
                                </Col>
                                <Col md={3} xs={10} lg={3}>
                                    <Image src={cshimg}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Thumbnail>
                        </Grid>

            );
        }
    }

    export default ChallengeDisplay;