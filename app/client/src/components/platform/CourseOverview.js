import React, {Component} from 'react';
import {Image, Grid, Row, Col} from 'react-bootstrap';

import icono1 from '../../images/platform/icono.png';
import icono2 from '../../images/platform/icono2.png';
import icono3 from '../../images/platform/icono3.png'

class CourseOverview extends Component {
    render() {
        return (
            <Grid className="gridNoMargin COverview">


                    <Row className="text-center" style={{height: "5% ", paddingTop: "5%"}}/>
                <Row className="text-center">
                    <Col xs="12">
                    <h4 className="h4TitleWhite">{this.props.messages.title}</h4>
                    </Col>
                </Row>
                <Row className="text-center" style={{height: "4% ", paddingTop: "4%"}}/>

                <Row>
                    <Col xs={12} md={4}>
                        <Row>
                            <Col md={1} xs={3}/>
                            <Col md={1} xs={3}>
                                <Image src={icono1} circle className="bg-White"/>
                            </Col>
                            <Col md={2} xs={6}>

                            </Col>
                        </Row>
                        <Row className="text-center" style={{height: "4% ", paddingTop: "4%"}}/>
                        <Row>
                            <Col md={1} xs={3}/>
                            <Col md={9} xs={9}>
                            <h4 className="h4TitleWhite ">{this.props.messages.subtitle1}</h4>
                            <p className="pTextWhite left-text"> {this.props.messages.text1}
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={4}>
                        <Row>
                            <Col md={1} xs={3}/>
                            <Col md={1} xs={3}>
                                <Image src={icono2} circle className="bg-White"/>
                            </Col>
                            <Col md={2} xs={6}>

                            </Col>
                        </Row>
                        <Row className="text-center" style={{height: "4% ", paddingTop: "4%"}}/>
                        <Row>
                            <Col md={1} xs={3}/>
                            <Col md={9} xs={9}>
                                <h4 className="h4TitleWhite ">{this.props.messages.subtitle2}</h4>
                                <p className="pTextWhite left-text"> {this.props.messages.text2}
                                   </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={4}>
                        <Row>
                            <Col md={1} xs={3}/>
                            <Col md={1} xs={3}>
                                <Image src={icono3} circle className="bg-White"/>
                            </Col>
                            <Col md={2} xs={6}>

                            </Col>
                        </Row>
                        <Row className="text-center" style={{height: "4% ", paddingTop: "4%"}}/>
                        <Row>
                            <Col md={1} xs={3}/>
                            <Col md={9} xs={9}>
                                <h4 className="h4TitleWhite ">{this.props.messages.subtitle3}</h4>
                                <p className="pTextWhite left-text"> {this.props.messages.text3}
                                    </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="text-center" style={{height: "15% ", paddingTop: "15%"}}/>

            </Grid>

        );
    }
}

export default CourseOverview;
