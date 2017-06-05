import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import droneinfo from '../../images/drone_infogrid.svg';
import platform from '../../images/platform.svg';
import ecosystem from '../../images/ecosystem.svg';

class InfoGrid extends Component {
    render(){
        return(
            <Grid>
                <Row className="text-center">
                    <Col xs={6} md={4}>
                        <Image className="center-block" src={droneinfo} responsive/>
                        <h2>{this.props.messages.drone_title}</h2>
                        <hr/>
                        <p>
                            {this.props.messages.drone_message}
                        </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="center-block" src={platform} responsive/>
                        <h2>{this.props.messages.platform_title}</h2>
                        <hr/>
                        <p>
                            {this.props.messages.platform_message}
                        </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="center-block" src={ecosystem} responsive/>
                        <h2>{this.props.messages.ecosystem_title}</h2>
                        <hr/>
                        <p>
                            {this.props.messages.ecosystem_message}
                        </p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default InfoGrid;
