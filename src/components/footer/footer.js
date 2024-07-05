import React, { Component } from 'react';
import './footer.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Footer extends Component {
	render() {
		return (
            <footer sticky="bottom">
				<iframe width="100%" height="120" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Ffreakysocial%2Fmarvin-freaky-social-april-2024%2F" frameBorder="0" ></iframe>
                Copywrite 2020
            </footer>
		);
	}
}

export default Footer;