import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './SlaterBody.css';

class SlaterNavbar extends React.Component {
    render () {
        return (
            <Navbar expand="md" fixed="top" variant="light" className="slaternav">
                <Navbar.Brand lassName="mx-auto" href="#home">Welcome!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#link0">About us</Nav.Link>
                        <Nav.Link href="#link2">Gallery</Nav.Link>
                        <Nav.Link href="#link5">Statistics</Nav.Link>
                        <Nav.Link href="#link1">E-Board</Nav.Link>
                        <Nav.Link href="#link4">Contact Us</Nav.Link>
                        <Nav.Link href="#link3">Slater Center</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default SlaterNavbar