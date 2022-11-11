import React, { Component } from "react";
import {
    Navbar,
    Container,
} from "react-bootstrap";
import logo from '../Img/logo.svg'

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="36"
                            width="57"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
