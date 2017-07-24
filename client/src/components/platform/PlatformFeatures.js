import React, {Component} from 'react';
import {Thumbnail, Grid, Row, Col} from 'react-bootstrap';

import video from '../../images/platform/video.png';
import forum from  '../../images/platform/forum.JPG';
import test from '../../images/platform/test.png';
import teacher from '../../images/platform/teacher.JPG'

class PlatformFeatures extends Component {
    render() {
        return (
            <Grid >


                    <Row className="text-center " style={{height: "15% ", paddingTop: "15%"}}/>
                <Row className="text-center">
                    <Col xs="12">
                        <h4 className="h4Title">{this.props.messages.title}</h4>
                    </Col>

                </Row>
                <Row className="text-center " style={{height: "8% ", paddingTop: "8%"}}/>

                <Row className="text-center">
                        <Col md={6} xs={12} lg={3}>

                            <Thumbnail src={video} thumbnail responsive>


                            <h4 className="h4TitleBlue">{this.props.messages.videos}</h4>
                            <p className="pText left-text"> {this.props.messages.videostext}
                                </p>
                            </Thumbnail>

                        </Col>
                        <Col md={6} xs={12} lg={3}>

                                <Thumbnail src={forum} thumbnail responsive>

                                <h4 className="h4TitleBlue">{this.props.messages.forum}</h4>
                                <p className="pText left-text"> {this.props.messages.forumtext}
                                </p>
                            </Thumbnail>

                        </Col>

                    </Row>
                <Row className="text-center">
                    <Col md={6} xs={12} lg={3}>
                                                    <Thumbnail src={test} thumbnail responsive>


                            <h4 className="h4TitleBlue">{this.props.messages.test}</h4>
                            <p className="pText left-text"> {this.props.messages.testtext}
                            </p></Thumbnail>


                    </Col>
                    <Col md={6} xs={12} lg={3}>

                            <Thumbnail src={teacher} thumbnail responsive>

                            <h4 className="h4TitleBlue">{this.props.messages.teacher}</h4>
                            <p className="pText left-text"> {this.props.messages.teachertext}
                            </p>
                        </Thumbnail>

                    </Col>

                </Row>
            </Grid>

        );
    }
}

export default PlatformFeatures;
