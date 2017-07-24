import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

import mechimg from '../../images/kit/mechatronics.png';
import csimg from '../../images/kit/computer-systems.png';
import electronicsimg from '../../images/kit/electronics.png';
import netimg from '../../images/kit/networks.png';
import relimg from '../../images/kit/related-fields.png';
import background from '../../images/kit/banner5.png';

class PerfectFor extends Component {
    render(){
        return(
            <Grid className="gridNoMargin">
                <div className="landing-col col-xs-12">
                    <Image src={background}/>
                </div>
                <div className="nolanding-col" style={{paddingTop:"2%",color:"#FFFFFF"}}>
                    <Row className="text-center">
                        <h4>{this.props.messages.title}</h4>
                    </Row>
                    <Row className="text-center" style={{paddingTop:"2%"}}>
                        <Col md={1} xs={1} lg={1}/>
                        <Col md={2} xs={10} lg={2}>
                            <Image src={mechimg}/>
                            <p style={{paddingTop:"8%"}}>
                                {this.props.messages.mech}
                            </p>
                        </Col>
                        <Col md={2} xs={10} lg={2}>
                            <Image src={csimg}/>
                            <p style={{paddingTop:"8%"}}>
                                {this.props.messages.cs}
                            </p>
                        </Col>
                        <Col md={2} xs={10} lg={2}>
                            <Image src={electronicsimg}/>
                            <p style={{paddingTop:"8%"}}>
                                {this.props.messages.electronics}
                            </p>
                        </Col>
                        <Col md={2} xs={10} lg={2}>
                            <Image src={netimg}/>
                            <p style={{paddingTop:"8%"}}>
                                {this.props.messages.net}
                            </p>
                        </Col>
                        <Col md={2} xs={10} lg={2}>
                            <Image src={relimg}/>
                            <p style={{paddingTop:"8%"}}>
                                {this.props.messages.rel}
                            </p>
                        </Col>
                        <Col md={1} xs={1} lg={1}/>
                    </Row>
                </div>
            </Grid>
        );
    }
}

export default PerfectFor;
