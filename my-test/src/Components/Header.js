import React, { Component } from "react";
import {
    Navbar,
    Container,
    Nav,
    Button,
} from "react-bootstrap";
import './Header.css';
import logo from '../Img/logo.svg'
import close from '../Img/close.svg'

export default class Header extends Component {
    render() {
        return (
            <>
                <div className="notification"> Welcome Back, John! <img src={close}/></div>
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
                            <Nav className="mr-auto nav-header">
                                <Nav.Link className="nav-item" href="/how_it_works">How It Works</Nav.Link>
                                <Nav.Link className="nav-item" href="/faqs">FAQs</Nav.Link>
                                <Button className="btn-login" href="/">Log In</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
