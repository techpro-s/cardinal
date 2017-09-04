import React, {Component} from 'react';
import {Image, Grid, Row, Col} from 'react-bootstrap';

import drone from '../../images/platform/banner.jpg';

class MainPlatform extends Component {
    render() {
        return (
            <Grid className="gridNoMargin">
                <div className="landing-col col-xs-12">
                    <Image src={drone}/>
                </div>
                <div className="nolanding-col">
                    <Row className="text-center title-xs" style={{height: "12% ", paddingTop: "12%"}}/>
                    <Row className="text-center title-xs">
                        <Col md={6} xs={12} lg={6}>
                            <h4 className="h4Title">{this.props.messages.title}</h4>
                            <p className="pText left-text"> {this.props.messages.text1}
                                <b><i>{this.props.messages.text2}</i></b>
                                {this.props.messages.text3}
                                <i>{this.props.messages.text4}</i>
                                {this.props.messages.text5}</p>

                        </Col>
                    </Row>
                </div>
            </Grid>

        );
    }
}

export default MainPlatform;
