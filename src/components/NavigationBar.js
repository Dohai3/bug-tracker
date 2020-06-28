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
            <Navbar bg="dark" variant="dark" expand="md">
                <Navbar.Brand href="/">Bug Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/bugs">Bugs</Nav.Link>
                        </Nav.Item>
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
