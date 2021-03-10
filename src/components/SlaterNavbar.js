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
                        <Nav.Link href="#AboutUs">About us</Nav.Link>
                        <Nav.Link href="#Gallery">Gallery</Nav.Link>
                        <Nav.Link href="#Statistics">Statistics</Nav.Link>
                        <Nav.Link href="#RegionalGroups">Regional Groups</Nav.Link>
                        <Nav.Link href="#EBoard">E-Board</Nav.Link>
                        <Nav.Link href="#LetsConnect">Contact Us</Nav.Link>
                        <Nav.Link href="https://www.wellesley.edu/international" 
                            rel="noreferrer" target="_blank">Slater Center</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default SlaterNavbar