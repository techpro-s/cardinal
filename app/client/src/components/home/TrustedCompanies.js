import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import ceti from '../../images/trust/ceti_logo.png';
import jose from '../../images/trust/sanjose_logo.png';
import arandas from '../../images/trust/arandas.png';
import chapala from '../../images/trust/chapala.png';
import tecno from '../../images/trust/universidadtecnologica.png';
import salle from '../../images/trust/universidadlasalle.png';
import thomas from '../../images/trust/institutotomas.png';

class TrustedCompanies extends Component {
    render(){
        return (
            <Grid className="text-center gray-style">
                <Row className="text-center gray-style" style={{height: "50px ",paddingTop:"50px"}}/>
                <h2>{this.props.messages.info} <b>{this.props.messages.us}</b></h2>
                <Row >
                    <Col xs={6} md={3}><Image className="center-block trust" src={ceti} responsive/></Col>
                    <Col xs={6} md={3}><Image className="center-block trust" src={jose} responsive/></Col>
                    <Col xs={6} md={3}><Image className="center-block trust" src={arandas} responsive/></Col>
                    <Col xs={6} md={3}><Image className="center-block trust" src={chapala} responsive/></Col>
                </Row>
                <Row >
                    <Col xs={6} md={4}><Image className="center-block trust" src={tecno} responsive/></Col>
                    <Col xs={6} md={4}><Image className="center-block trust" src={salle} responsive/></Col>
                    <Col xs={6} md={4}><Image className="center-block trust" src={thomas} responsive/></Col>
                </Row>
                <Row className="text-center gray-style" style={{height: "100px ",paddingTop:"100px"}}/>

            </Grid>
        );
    }
}

export default TrustedCompanies;
