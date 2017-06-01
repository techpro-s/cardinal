import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class CardinalNav extends Component {

    render(){
        return(
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Cardinal</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">{this.props.messages.kit}</NavItem>
                <NavItem eventKey={2} href="#">{this.props.messages.platform}</NavItem>
                <NavItem eventKey={3} href="#">{this.props.messages.ecosystem}</NavItem>
                <NavItem eventKey={4} href="#">{this.props.messages.contact}</NavItem>
                <NavItem eventKey={5} href="#">{this.props.messages.blog}</NavItem>
            </Nav>
            </Navbar>
        );
    }
}

export default CardinalNav;
