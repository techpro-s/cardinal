import React, {Component} from 'react';
import {Row,Button,Modal,Col,Grid,Thumbnail,Image} from 'react-bootstrap';

import ChallengeInfoForm from './ChallengeInfoForm'

const MyLargeModal = React.createClass({
    render() {
        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Challenge Information Form for {this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <ChallengeInfoForm challenge={this.props.title}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
});

class ChallengeDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

        render() {
            let lgClose = () => this.setState({ lgShow: false });
            return (

                        <Grid>
                <Thumbnail>
                    <Row>
                        <Col md={4}>
                    <Thumbnail  alt="Challenge Image" src={this.props.challenge.backGroundImg} />
                        </Col>
                        <Col md={8}>
                            <Row>
                                <h3>{this.props.challenge.title}</h3>
                            </Row>
                            <Row>
                                <h5>{this.props.challenge.description}</h5>
                            </Row>
                            <Row>
                                <a href={this.props.challenge.PDFUrl} target="blank">{this.props.messages.announcement}</a>
                            </Row>
                            <Row>
                                <Button bsStyle="primary" className="COverview" onClick={()=>this.setState({ lgShow: true })}>{this.props.messages.participate}</Button>
                                <MyLargeModal title={this.props.challenge.title} show={this.state.lgShow} onHide={lgClose} />
                            </Row>
                        </Col>
                    </Row>
                    <Row >
                        <Col md={6} xs={12} lg={6}>
                            <Row className="text-center" style={{paddingTop:"5%"}}>
                                <h4>{this.props.messages.schools.title}</h4>
                            </Row>

                             <Row className="text-center" style={{paddingTop:"2%"}}>

  {this.props.challenge.schools.map(function(school, i) {
                                     return (<Col key={i} md={4} xs={8} lg={4}>
                                         <Image src={school.imageUrl} className="imageSponsor" />

                                     </Col>)})}
                            </Row>
                        </Col>
                        <Col md={6} xs={12} lg={6}>
                            <Row className="left-text" style={{paddingTop:"5%"}}>
                                <Col md={1} xs={1} lg={1}/>
                                <Col md={6} xs={8} lg={6}>
                                    <h4>{this.props.messages.sponsors.title}</h4>
                                </Col>
                            </Row>
                            <Row className="text-center" style={{paddingTop:"2%"}}>
                                {this.props.challenge.sponsors.map(function(sponsor, i) {
                                    return (<Col key={i} md={4} xs={8} lg={4}>
                                        <Image src={sponsor.imageUrl} className="imageSponsor" />

                                    </Col>)})}
                            </Row>
                        </Col>
                    </Row>
                </Thumbnail>
                        </Grid>

            );
        }
    }

    export default ChallengeDisplay;