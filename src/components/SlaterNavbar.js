import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './SlaterBody.css';

class SlaterNavbar extends React.Component {
    render () {
        return (
            <Navbar expand="md" fixed="top" variant="light" className="slaternav active">
                <Navbar.Brand lassName="mx-auto" href="#home"><div className="navItemName Welcome">Welcome!</div></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#AboutUs" eventKey="#AboutUs"><div className="navItemName">About us</div></Nav.Link>
                        <Nav.Link href="#Gallery" eventKey="#Gallery"><div className="navItemName">Gallery</div></Nav.Link>
                        <Nav.Link href="#Statistics" eventKey="#Statistics"><div className="navItemName">Statistics</div></Nav.Link>
                        <Nav.Link href="#RegionalGroups" eventKey="#RegionalGroups"><div className="navItemName">Regional Groups</div></Nav.Link>
                        <Nav.Link href="#EBoard" eventKey="#EBoard"><div className="navItemName">E-Board</div></Nav.Link>
                        <Nav.Link href="#LetsConnect" eventKey="#LetsConnect"><div className="navItemName">Contact Us</div></Nav.Link>
                        <Nav.Link href="https://www.wellesley.edu/international" 
                            rel="noreferrer" target="_blank"><div className="navItemName">Go to Slater Center</div></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default SlaterNavbar