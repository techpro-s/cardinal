import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


import cardinalLogo from '../images/logo.png';

class CardinalNav extends Component {
    render(){
        console.log(this.props);
        return(
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/"><img src={cardinalLogo} class="img-responsive" alt="cardinal" /></a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <LinkContainer to="/kit">
                    <NavItem eventKey={1}>{this.props.messages.kit}</NavItem>
                </LinkContainer>
                <LinkContainer to="/platform">
                    <NavItem eventKey={2} href="/platform">{this.props.messages.platform}</NavItem>
                </LinkContainer>
                <LinkContainer to="/ecosystem">
                    <NavItem eventKey={3} href="/ecosystem">{this.props.messages.ecosystem}</NavItem>
                </LinkContainer>
                <LinkContainer to="/contact">
                    <NavItem eventKey={4} href="/contact">{this.props.messages.contact}</NavItem>
                </LinkContainer>
                <LinkContainer to="#blog">
                    <NavItem eventKey={5} href="#">{this.props.messages.blog}</NavItem>
                </LinkContainer>
            </Nav>
            </Navbar>
        );
    }
}

export default CardinalNav;
