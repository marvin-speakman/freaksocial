import React, { Component } from 'react';
import './footer.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Footer extends Component {
	render() {
		return (
            <footer sticky="bottom">
                Copywrite 2020
            </footer>
		);
	}
}

export default Footer;