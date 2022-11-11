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
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home.js';

export default class Header extends Component {
    render() {
        return (
            <>
                <div className="notification"> Welcome Back, John! <img src={close}/></div>
                <Navbar collapseOnSelect expand="md">
                    <Container>
                        <div className="header">
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
                        </div>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                    </Routes>
                </Router>
            </>
        )
    }
}
