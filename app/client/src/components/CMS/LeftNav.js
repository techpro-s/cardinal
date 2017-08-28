/**
 * Created by agluna on 7/16/17.
 */
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

function LeftNav({})  {
        return(
            <div>
                <Navbar>
                    <Navbar.Brand>
                        <a href="#">{this.props.messages.CMSbarTitle}</a>
                    </Navbar.Brand>
                </Navbar>
                <Nav>
                    <NavItem eventKey={1} href="#">{this.props.messages.challenge.challenge}</NavItem>
                    <NavItem eventKey={2} href="#">{this.props.messages.events.events}</NavItem>
                    <NavItem eventKey={3} href="#">{this.props.messages.users.users}</NavItem>
                </Nav>
            </div>
        );
}

export default LeftNav;
