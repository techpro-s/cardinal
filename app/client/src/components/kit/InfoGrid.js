import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

import gpsimg from '../../images/kit/gps.png';
import sensorsimg from '../../images/kit/sensors.png';
import navimg from '../../images/kit/navigation_control.png';
import aiimg from '../../images/kit/artificial_intelligence.png';

class InfoGrid extends Component {
    render(){
        return(
        <Grid className="gridNoMargin">
            <Row className="text-center " style={{height: "5% ",paddingTop:"7%"}}/>
            <Row className="text-center" >
                <Col md={4} xs={4} lg={4}/>
                <Col md={4} xs={4} lg={4}>
                    <h4>{this.props.messages.title.pt1} {this.props.messages.title.pt2} {this.props.messages.title.pt3}</h4>
                    <p style={{paddingTop:"2%"}}>
                        {this.props.messages.title.message}
                    </p>
                </Col>
            </Row>
            <Row className="left-text" style={{paddingTop:"3%"}}>
                <Col md={2} xs={1} lg={2}/>
                <Col md={1} xs={4} lg={1}>
                    <Image src={gpsimg}/>
                </Col>
                <Col md={3} xs={6} lg={3}>
                    <h4>{this.props.messages.gps.title}</h4>
                    <p>
                        {this.props.messages.gps.message}
                    </p>
                </Col>
                <Col md={1} xs={4} lg={1}>
                    <Image src={sensorsimg}/>
                </Col>
                <Col md={3} xs={6} lg={3}>
                    <h4>{this.props.messages.sensors.title}</h4>
                    <p>
                        {this.props.messages.sensors.message.pt1}&nbsp;
                        {this.props.messages.sensors.message.pt2}
                    </p>
                </Col>
                <Col md={2} xs={1} lg={2}/>
            </Row>
            <Row className="left-text" >
                <Col md={2} xs={1} lg={2}/>
                <Col md={1} xs={4} lg={1}>
                    <Image src={navimg}/>
                </Col>
                <Col md={3} xs={6} lg={3}>
                    <h4>{this.props.messages.navigation.title}</h4>
                    <p>
                        {this.props.messages.navigation.message}
                    </p>
                </Col>
                <Col md={1} xs={4} lg={1}>
                    <Image src={aiimg}/>
                </Col>
                <Col md={3} xs={6} lg={3}>
                    <h4>{this.props.messages.ai.title}</h4>
                    <p>
                        {this.props.messages.ai.message}
                    </p>
                </Col>
                <Col md={2} xs={1} lg={2}/>
            </Row>
            <Row className="text-center " style={{height: "5% ",paddingTop:"7%"}}/>
        </Grid>
        );
    }
}

export default InfoGrid;
