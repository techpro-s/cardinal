import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import droneinfo from '../../images/drone_icon.png';
import platform from '../../images/platform_icon.png';
import ecosystem from '../../images/enviroment_icon.png';

class InfoGrid extends Component {
    render(){
        return(
            <Grid style={{background:"#171717",margin:"0",padding:"0",width:"100%"}}>
                <Row className="text-center dark-style" style={{height: "300px ",paddingTop:"100px"}}>
                    <Col xs={1} md={2} />
                    <Col xs={10} md={8} >
                        <h1 >{this.props.messages.infoGridMain}</h1>
                    </Col>
                    <Col xs={1} md={2}/>
                </Row>
                <Row className="text-center">
                    <Col xs={6} md={4}>
                        <Image className="center-block" src={droneinfo} responsive/>
                        <h4 className="text-center dark-style">{this.props.messages.drone_title}</h4>
                        {/*<hr/>*/}
                        {/*<p>*/}
                            {/*{this.props.messages.drone_message}*/}
                        {/*</p>*/}
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="center-block" src={platform} responsive/>
                        <h4 className="text-center dark-style">{this.props.messages.platform_title}</h4>
                        {/*<hr/>*/}
                        {/*<p>*/}
                            {/*{this.props.messages.platform_message}*/}
                        {/*</p>*/}
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="center-block" src={ecosystem} responsive/>
                        <h4 className="text-center dark-style">{this.props.messages.ecosystem_title}</h4>
                        {/*<hr/>*/}
                        {/*<p>*/}
                            {/*{this.props.messages.ecosystem_message}*/}
                        {/*</p>*/}
                    </Col>
                </Row>
                <Row className="text-center dark-style" style={{height: "100px ",paddingTop:"100px"}}/>
            </Grid>
        );
    }
}

export default InfoGrid;
