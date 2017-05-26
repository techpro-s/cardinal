import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import conafor from '../../images/conafor.svg';
import dow from '../../images/dow.svg';
import evo from '../../images/evo.svg';
import ab from '../../images/ab.svg';
import valmie from '../../images/valmie.svg';
import mapa from '../../images/mapa.svg';
import manos from '../../images/manos.svg';

function TrustedCompanies() {
    return (
        <Grid className="text-center">
            <h2>They Trust Us</h2>
            <Row >
                <Col xs={6} md={4}><Image className="center-block" src={conafor} responsive/></Col>
                <Col xs={6} md={4}><Image className="center-block" src={dow} responsive/></Col>
                <Col xs={6} md={4}><Image className="center-block" src={evo} responsive/></Col>
            </Row>
            <Row >
                <Col xs={6} md={4}><Image className="center-block" src={ab} responsive/></Col>
                <Col xs={6} md={4}><Image className="center-block" src={valmie} responsive/></Col>
                <Col xs={6} md={4}><Image className="center-block" src={mapa} responsive/></Col>
            </Row>
            <Row >
                <Col xs={6} md={4}></Col>
                <Col xs={6} md={4}><Image className="center-block" src={manos} responsive/></Col>
                <Col xs={6} md={4}></Col>
            </Row>
        </Grid>
    );
}

export default TrustedCompanies;
