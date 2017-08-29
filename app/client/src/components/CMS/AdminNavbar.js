import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


import cardinalLogo from '../../images/logo.png';

class AdminNavbar extends Component {
    render(){
        console.log(this.props);
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/Admin"><img src={cardinalLogo} class="img-responsive" alt="cardinal" /></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <LinkContainer to="/Admin/CMS/Challenge">
                        <NavItem eventKey={1}>{this.props.messages.challenge}</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/Admin/CMS/Events">
                        <NavItem eventKey={2}>{this.props.messages.events}</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/Admin/CMS/Users">
                        <NavItem eventKey={3}>{this.props.messages.users}</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        );
    }
}

export default AdminNavbar;
