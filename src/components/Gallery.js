import React from "react";
import SubHeading from './SubHeading';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ISD from '../events/isd.png';
import Election from '../events/election.png';
import Meeting from '../events/Slater Org.png';


import './SlaterBody.css';

class Gallery extends React.Component {
    render() {
        return (
            <div id="Gallery" style={{display: "flex", alignItems: "center",
                         backgroundColor: "whitesmoke"}}>
                <Col sm={2}><SubHeading shTitle="Slater Events Gallery" genOrAlt="alt" /></Col>
                <Col sm={10}>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            <Col><img className="galleryImg" src={ISD} alt="International Students Day"></img></Col>
                            <Col><img className="galleryImg" src={Election} alt="Post U.S. Election Community Time"></img></Col>
                            <Col><img className="galleryImg" src={Meeting} alt="General Meeting"></img></Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
                </Col>
            </div>
        )
    }
}


export default Gallery;