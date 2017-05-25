import React from 'react';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import CardinalNav from '../components/CardinalNav';
import CardinalFooter from '../components/CardinalFooter';
import CardinalCarousel from '../components/CardinalCarousel';

import conafor from '../images/conafor.svg';
import dow from '../images/dow.svg';
import evo from '../images/evo.svg';
import ab from '../images/ab.svg';
import valmie from '../images/valmie.svg';
import mapa from '../images/mapa.svg';
import manos from '../images/manos.svg';

function Home() {
    return(
        <div>
            <CardinalNav />
            <CardinalCarousel />
            <Grid>
                <Row className="text-center">
                    <Col xs={6} md={4}><h2>Drone</h2></Col>
                    <Col xs={6} md={4}><h2>Platform</h2></Col>
                    <Col xs={6} md={4}><h2>Ecosystem</h2></Col>
                </Row>
            </Grid>
            <Jumbotron className="text-center">
                <h1>"Amazing text about how Cardinal is the best"</h1>
            </Jumbotron>
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
            <br/><br/>
            <CardinalFooter />
        </div>
    );
}

export default Home;
