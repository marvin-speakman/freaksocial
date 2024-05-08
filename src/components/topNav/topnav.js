import React, { Component } from 'react';
import './topnav.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import headerLogo from '../../assets/FS-text.png';
// import NavDropdown from 'react-bootstrap/NavDropdown';

class TopNav extends Component {
	render() {
		return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><img src={headerLogo} className="header-logo" alt="Freaky Social" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#who">Who?</Nav.Link>
                    <Nav.Link href="#events">Events</Nav.Link>
                    <Nav.Link href="#mixes">Mixes</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
		);
	}
}

export default TopNav;