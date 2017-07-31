import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

import ecosystemDiagram from '../../images/ecosystem/ecosystem_diagrama.png';

class HowItWorks extends Component {
    render(){
        return(
        <Grid className="gridNoMargin">
            <div style={{height: "5% ",paddingTop:"7%"}}>
            </div>
            <div className="landing-col col-xs-12">
                <Image src={ecosystemDiagram}/>
            </div>
            <div className="nolanding-col">
                <Row className="text-center">
                    <Col md={12} xs={12} lg={12}>
                        <h4>{this.props.messages.title}</h4>
                    </Col>
                </Row>
                <Row className="left-text">
                    <Col md={2} xs={2} lg={2}/>
                    <Col md={2} xs={2} lg={2}>
                        <h5>{this.props.messages.school.title}</h5>
                        <p style={{paddingTop:"2%"}}>
                            {this.props.messages.school.message}
                        </p>
                    </Col>
                    <Col md={4} xs={4} lg={4}/>
                    <Col md={2} xs={2} lg={2}>
                        <h5>{this.props.messages.solution.title}</h5>
                        <p style={{paddingTop:"2%"}}>
                            {this.props.messages.solution.message}
                        </p>
                    </Col>
                </Row>
                <Row style={{paddingTop:"20%"}}/>
                <Row className="left-text" >
                    <Col md={3} xs={3} lg={3}/>
                    <Col md={2} xs={4} lg={2}>
                        <h5>{this.props.messages.privateBu.title}</h5>
                        <p>
                            {this.props.messages.privateBu.message}
                        </p>
                    </Col>
                    <Col md={1} xs={1} lg={1}/>
                    <Col md={2} xs={6} lg={2}>
                        <h5>{this.props.messages.goverment.title}</h5>
                        <p>
                            {this.props.messages.goverment.message}
                        </p>
                    </Col>
                </Row>
            </div>
        </Grid>
        );
    }
}

export default HowItWorks;
