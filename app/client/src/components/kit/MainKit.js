import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';
import kitbox from '../../images/kit/banner_kit-01.png'

class MainKit extends Component {
    render(){
        return(
        <Grid className="gridNoMargin">
            <div className="landing-col col-xs-12">
                <Image src={kitbox}/>
            </div>
                <div className="nolanding-col">
                    <Row className="text-center " style={{height: "5% ",paddingTop:"7%"}}/>
                    <Row className="left-text" style={{paddingLeft:"10%"}}>
                        <Col md={6} xs={3} lg={6}>
                            <h4>{this.props.messages.title}</h4>
                            <p style={{paddingTop:"2%"}}>
                                {this.props.messages.message1.pt1}&nbsp;
                                <strong>{this.props.messages.message1.pt2}</strong>&nbsp;
                                {this.props.messages.message1.pt3}&nbsp;
                                <strong>{this.props.messages.message1.pt4}</strong>&nbsp;
                                <strong>{this.props.messages.message1.pt5}</strong>&nbsp;
                                {this.props.messages.message1.pt6}&nbsp;
                                <strong>{this.props.messages.message1.pt7}</strong>&nbsp;
                                {this.props.messages.message1.pt8}&nbsp;
                                <strong>{this.props.messages.message1.pt9}</strong>
                            </p>
                            <p>
                                {this.props.messages.message2.pt1}&nbsp;
                                <em>{this.props.messages.message2.pt2}</em>&nbsp;
                                <em>{this.props.messages.message2.pt3}</em>&nbsp;
                                {this.props.messages.message2.pt4}&nbsp;
                                <em>{this.props.messages.message2.pt5}</em>&nbsp;
                            </p>
                        </Col>
                    </Row>
                </div>
        </Grid>
        );
    }
}

export default MainKit;
