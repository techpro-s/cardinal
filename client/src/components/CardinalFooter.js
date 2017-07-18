import React, { Component } from 'react';
import { Grid ,Col,Row} from 'react-bootstrap';
import cardinalLogo from '../images/logo.png';
import FontAwesome from 'react-fontawesome';
class CardinalFooter extends Component {
    render(){
        return(
            <div className="dark-style">


                    <footer>
                        <Grid>
                            <Row className="text-center " style={{height: "50px ",paddingTop:"50px"}}/>
                            <Row>
                                <Col className="footer" xs={4} md={2}><b>{this.props.messages.company}</b>
                                <ul>
                                    <li><a href="#">{this.props.messages.about}</a></li>
                                    <li><a href="#">{this.props.messages.press}</a></li>
                                    <li><a href="#">{this.props.messages.blog}</a></li>
                                </ul>
                                </Col>
                                <Col className="footer" xs={4} md={2}><b>{this.props.messages.software}</b>
                                    <ul>
                                        <li><a href="#">{this.props.messages.kit}</a></li>
                                        <li><a href="#">{this.props.messages.platform}</a></li>
                                        <li><a href="#">{this.props.messages.ecosystem}</a></li>
                                    </ul>
                                </Col>
                                <Col className="footer" xs={4} md={2}><b>{this.props.messages.social}</b>
                                    <ul>
                                        <li><a href="#">{this.props.messages.social1}</a></li>
                                        <li><a href="#">{this.props.messages.social2}</a></li>
                                        <li><a href="#">{this.props.messages.social3}</a></li>
                                    </ul>
                                </Col>

                                <Col xs={2} md={4}/>
                                <Col xs={4} md={2}>
                                    <Row><b>{this.props.messages.contact}</b></Row>
                                    <Row>
                                        <FontAwesome name="fa-facebook-official"/>
                                        <FontAwesome name="rocket"/>
                                        <i className="fa fa-facebook-official" aria-hidden="true"/>
                                        <i className="fa fa-youtube" aria-hidden="true"/>
                                        <i className="fa fa-linkedin" aria-hidden="true"/>
                                        <i className="fa fa-twitter" aria-hidden="true"/>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="text-center" style={{height: "100px ",paddingTop:"100px"}}/>
                            <Row>
                                <Col className="pull-left"> <p>{this.props.messages.copyright}</p> <p>{this.props.messages.policy}</p></Col>
                                <Col className="pull-right footer-logo"><a href="#"><img src={cardinalLogo} class="img-responsive " alt="cardinal" /></a></Col>
                            </Row>
                            <Row className="text-center " style={{height: "50px ",paddingTop:"50px"}}/>
                        </Grid>
                    </footer>

            </div>
        );
    }
}

export default CardinalFooter;
