import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Bug Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/projectList">Projects</Nav.Link>
                        <Nav.Link href="/bugList">Bugs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavigationBar;
