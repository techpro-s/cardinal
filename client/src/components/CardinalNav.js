import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

function CardinalNav() {
    return(
        <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Cardinal</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
            <NavItem eventKey={1} href="#">Kit</NavItem>
            <NavItem eventKey={2} href="#">Platform</NavItem>
            <NavItem eventKey={3} href="#">Ecosystem</NavItem>
            <NavItem eventKey={4} href="#">Contact</NavItem>
            <NavItem eventKey={5} href="#">Blog</NavItem>
        </Nav>
        </Navbar>
    );
}

export default CardinalNav;
