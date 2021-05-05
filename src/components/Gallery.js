import React from "react";
import SubHeading from './SubHeading';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ISD from '../events/isd.png';
import Election from '../events/election.png';
import Meeting from '../events/Slater Org.png';
import event1 from '../events/event1.JPG';
import event2 from '../events/event2.JPG';
import event3 from '../events/event3.JPG';
import event4 from '../events/event4.JPG';
import event5 from '../events/event5.JPG';
import event6 from '../events/event6.JPG';
import event7 from '../events/event7.JPG';
import event8 from '../events/event8.jpg';
import event9 from '../events/event9.jpg';


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
                        <Row className="eventImgWrap">
                            <Col><img className="galleryImg" src={ISD} alt="International Students Day"></img></Col>
                            <Col><img className="galleryImg" src={Election} alt="Post U.S. Election Community Time"></img></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="eventImgWrap">
                            <Col><img className="galleryImg" src={Meeting} alt="General Meeting"></img></Col>
                            <Col><img className="galleryImg" src={event9} alt="General Meeting"></img></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="eventImgWrap">
                            <Col><img className="galleryImg" src={event2} alt="General Meeting"></img></Col>
                            <Col><img className="galleryImg" src={event1} alt="General Meeting"></img></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="eventImgWrap">
                            <Col><img className="galleryImg" src={event4} alt="General Meeting"></img></Col>
                            <Col><img className="galleryImg" src={event8} alt="General Meeting"></img></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="eventImgWrap">
                            <Col><img className="galleryImg" src={event6} alt="General Meeting"></img></Col>
                            <Col><img className="galleryImg" src={event7} alt="General Meeting"></img></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="eventImgWrap">
                            <Col><img className="galleryImg" src={event5} alt="General Meeting"></img></Col>
                            <Col><img className="galleryImg" src={event3} alt="General Meeting"></img></Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
                </Col>
            </div>
        )
    }
}


export default Gallery;