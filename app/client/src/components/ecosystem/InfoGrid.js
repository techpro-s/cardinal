import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

import javaimg from '../../images/kit/java.png';
import jsimg from '../../images/kit/javascript.png';
import cshimg from '../../images/kit/c#.png';
import tecno from '../../images/trust/universidadtecnologica.png';
import salle from '../../images/trust/universidadlasalle.png';

class InfoGrid extends Component {
    render(){
        return(
            <Grid>
                <Row>
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
            </Grid>
        );
    }
}

export default InfoGrid;
