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
                        <a href="/admin"><img src={cardinalLogo} class="img-responsive" alt="cardinal" /></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <LinkContainer to="/admin/challenges">
                        <NavItem eventKey={1}>{this.props.messages.challenges}</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/admin/sponsor">
                        <NavItem eventKey={2}>{this.props.messages.sponsor}</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/admin/school">
                        <NavItem eventKey={3}>{this.props.messages.school}</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        );
    }
}

export default AdminNavbar;
