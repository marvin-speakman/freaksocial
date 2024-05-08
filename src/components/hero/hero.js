import React, { Component } from 'react';
import './hero.scss';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/FS.png';


class Hero extends Component {
	render() {
		return (
            <Container className="mainContainer">
                <img src={logo} className="hero-logo" alt="logo" />
            </Container>
		);
	}
}

export default Hero;