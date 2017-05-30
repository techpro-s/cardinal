import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import droneinfo from '../../images/drone_infogrid.svg';
import platform from '../../images/platform.svg';
import ecosystem from '../../images/ecosystem.svg';

function InfoGrid() {
    return(
        <Grid>
            <Row className="text-center">
                <Col xs={6} md={4}>
                    <Image className="center-block" src={droneinfo} responsive/>
                    <h2>Drone</h2>
                    <hr/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam aliquam lorem at nisi facilisis, non suscipit sapien
                        placerat.
                    </p>
                </Col>
                <Col xs={6} md={4}>
                    <Image className="center-block" src={platform} responsive/>
                    <h2>Platform</h2>
                    <hr/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas ac leo varius, consequat urna vel, iaculis diam.
                        Vivamus lobortis enim.
                    </p>
                </Col>
                <Col xs={6} md={4}>
                    <Image className="center-block" src={ecosystem} responsive/>
                    <h2>Ecosystem</h2>
                    <hr/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi malesuada tortor eu odio finibus maximus.
                    </p>
                </Col>
            </Row>
        </Grid>
    );
}

export default InfoGrid;
