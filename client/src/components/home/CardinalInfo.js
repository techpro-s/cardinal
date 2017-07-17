import React, { Component } from 'react';
import { Grid,Row,Col,Image} from 'react-bootstrap';
import imageinfo from '../../images/OurSolution.png';

class CardinalInfo extends Component {
    render(){
        return (
            <Grid className="text-center">
                <Row>
                    <Col xs={12} md={7}>
                        <Image className="center-block" src={imageinfo} responsive/>
                    </Col>
                    <Col xs={12} md={5}>
                        <h1 style={{marginTop: "15%"}}>{this.props.messages.message}</h1>
                        <h4 className="left-text-our" style={{color:"#171717"}}>{this.props.messages.p1}</h4>
                        <h4 className="left-text-our" style={{color:"#171717"}} dangerouslySetInnerHTML={{__html: this.props.messages.list}}/>
                    </Col>
                </Row>
                <Row className="text-center" style={{height: "100px ",paddingTop:"100px"}}/>

            </Grid>
        );
    }
}

export default CardinalInfo;
