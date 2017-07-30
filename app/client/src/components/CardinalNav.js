import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import cardinalLogo from '../images/logo.png';

class CardinalNav extends Component {
    render(){
        return(
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/"><img src={cardinalLogo} class="img-responsive" alt="cardinal" /></a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} href="/kit">{this.props.messages.kit}</NavItem>
                <NavItem eventKey={2} href="/platform">{this.props.messages.platform}</NavItem>
                <NavItem eventKey={3} href="#">{this.props.messages.ecosystem}</NavItem>
                <NavItem eventKey={4} href="#">{this.props.messages.contact}</NavItem>
                <NavItem eventKey={5} href="#">{this.props.messages.blog}</NavItem>
            </Nav>
            </Navbar>
        );
    }
}

export default CardinalNav;
