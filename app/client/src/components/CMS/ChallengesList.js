/**
 * Created by agluna on 7/16/17.
 */

import React, { Component } from 'react';
import { Accordion, Panel, Grid, Carousel, Row, Col, Image} from 'react-bootstrap';

class ChallengesList extends Component{

    constructor(props) {
        super(props);
        this.state = {List: props.List};
    }

    render() {
        const challenges = this.state.List;
        const accordion = challenges.map((challenge, index) =>
            <Accordion>
                <Panel header={challenge.Title} eventKey=index>
                    <Grid>
                        <Row className="text-center">
                            <Col xs={12} md={12}>{challenge.description}</Col>
                        </Row>
                        <Row className="text-center">
                            <Col md={6} xs={6}>"Start Date: "{challenge.startDate}</Col>
                            <Col md={6} xs={6}>"End Date: "{challenge.endDate}</Col>
                        </Row>
                        <Row>
                            <Carousel>
                                challenge.sponsors.map((sponsor) =>
                                <Carousel.Item>
                                    <Image className="center-block" src={sponsor.imageUrl} responsive/>
                                    <Carousel.Caption>
                                        <h3>{sponsor.name}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                );
                            </Carousel>
                        </Row>
                    </Grid>

                </Panel>
            </Accordion>
        );
        return (
            <div>
                {accordion}
            </div>
        );
    }
}

export default LeftNav;