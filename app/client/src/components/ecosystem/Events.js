import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

import gray from '../../images/ecosystem/gray.jpeg';

class Events extends Component {
    render(){
        return(
        <Grid>
            <Row className="text-center " style={{height: "5% ",paddingTop:"7%"}}>
                <h4>{this.props.messages.title}</h4>
            </Row>
            <Row className="left-text" style={{height: "5% ",paddingTop:"2%",paddingLeft:"7%"}}>
                <Col md={1} xs={1} lg={1}/>
                <Col md={3} xs={3} lg={3}>
                    <div className="text-center">
                        <Image src={gray} style={{width:"40%"}}/>
                    </div>
                    <br/>
                    <h4>{this.props.messages.event1.title}</h4>
                    <p style={{paddingTop:"2%"}}>
                        {this.props.messages.event1.message}
                    </p>
                </Col>
                <Col md={3} xs={3} lg={3}>
                    <div className="text-center">
                        <Image src={gray} style={{width:"40%"}}/>
                    </div>
                    <br/>
                    <h4>{this.props.messages.event2.title}</h4>
                    <p style={{paddingTop:"2%"}}>
                        {this.props.messages.event2.message}
                    </p>
                </Col>
                <Col md={3} xs={3} lg={3}>
                    <div className="text-center">
                        <Image src={gray} style={{width:"40%"}}/>
                    </div>
                    <br/>
                    <h4>{this.props.messages.event3.title}</h4>
                    <p style={{paddingTop:"2%"}}>
                        {this.props.messages.event3.message}
                    </p>
                </Col>
            </Row>
            <Row className="text-center " style={{height: "5% ",paddingTop:"7%"}}/>
        </Grid>
        );
    }
}

export default Events;
