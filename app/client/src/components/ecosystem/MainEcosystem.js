import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';
import kitbox from '../../images/ecosystem/banner-01.png'

class MainEcosystem extends Component {
    render(){
        return(
        <Grid className="gridNoMargin flex-container">
            <div className="landing-col col-xs-12">
                <Image src={kitbox}/>
            </div>
                <div className="nolanding-col">
                    <Row className="text-center title-xs" style={{height: "5% ",paddingTop:"7%"}}/>
                    <Row className="left-text title-xs" style={{paddingLeft:"10%"}}>
                        <Col md={6} xs={12} lg={6}>
                            <h4>{this.props.messages.title}</h4>
                            <p style={{paddingTop:"2%"}}>
                                {this.props.messages.message}&nbsp;
                            </p>
                        </Col>
                    </Row>
                </div>
        </Grid>
        );
    }
}

export default MainEcosystem;
