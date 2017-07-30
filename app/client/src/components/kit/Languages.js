import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

import javaimg from '../../images/kit/java.png';
import jsimg from '../../images/kit/javascript.png';
import cshimg from '../../images/kit/c#.png';
import pythonimg from '../../images/kit/python.png';
import cimg from '../../images/kit/c.png';

class Languages extends Component {
    render(){
        return(
            <Grid className="gridNoMargin">
                <Row className="text-center" style={{paddingTop:"5%"}}>
                    <h4>{this.props.messages.title}</h4>
                </Row>
                <Row className="text-center" style={{paddingTop:"2%"}}>
                    <Col md={1} xs={1} lg={1}/>
                    <Col md={2} xs={10} lg={2}>
                        <Image src={javaimg}/>
                    </Col>
                    <Col md={2} xs={10} lg={2}>
                        <Image src={jsimg}/>
                    </Col>
                    <Col md={2} xs={10} lg={2}>
                        <Image src={cshimg}/>
                    </Col>
                    <Col md={2} xs={10} lg={2}>
                        <Image src={pythonimg}/>
                    </Col>
                    <Col md={2} xs={10} lg={2}>
                        <Image src={cimg}/>
                    </Col>
                    <Col md={1} xs={1} lg={1}/>
                </Row>
                <Row className="text-center" style={{height:"8%", paddingTop:"8%"}}/>
            </Grid>
        );
    }
}

export default Languages;
