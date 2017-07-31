import React, {Component} from 'react';
import {Image, Grid, Row, Col} from 'react-bootstrap';
import ContactForm from '../contact/ContactForm'

import back from '../../images/contact/banner-02.png';
import drone from '../../images/contact/dron-02.png';;
import slogan from '../../images/contact/slogan-02.png';

class ContactPage extends Component {
    render() {
        return (
            <Grid className="gridNoMargin dark-style">
                <div className="landing-col col-xs-12">
                    <Image src={back}/>
                </div>
                <div className="nolanding-col">
                    <Row className="text-center " style={{height: "12% ", paddingTop: "12%"}}/>
                    <Row className="text-center">
                        <Col md={1} xs={2}/>
                        <Col  md={4} xs={8} lg={4}>
                            <Row>

                            <Col md={4} xs={4}/>
                            <Col md={3} xs={4} >
                            <Image className="image-no-block" src={drone} responsive/>
                            </Col>
                            </Row>
                            <Image src={slogan} responsive/>
                        </Col>
                        <Col md={1} xs={2}/>

                        <Col xsOffset={2} mdOffset={0} md={4} xs={8} lg={4}>
                        <ContactForm/>
                        </Col>
                        <Col md={1} xs={2}/>

                    </Row>

                </div>
            </Grid>

        );
    }
}

export default ContactPage;