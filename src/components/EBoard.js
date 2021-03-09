import React from "react";
import SubHeading from './SubHeading';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Carousel from "react-bootstrap/Carousel";
import eb2 from '../eboard/2.png';
import eb3 from '../eboard/3.png';
import eb4 from '../eboard/4.png';
import eb5 from '../eboard/5.png';
import eb6 from '../eboard/6.png';
import eb7 from '../eboard/7.png';
import eb8 from '../eboard/8.png';
import eb9 from '../eboard/9.png';
import eb10 from '../eboard/10.png';
import eb11 from '../eboard/11.png';
import eb12 from '../eboard/12.png';
import eb13 from '../eboard/13.png';
import eb14 from '../eboard/14.png';
import eb15 from '../eboard/15.png';
import eb16 from '../eboard/16.png';
import eb17 from '../eboard/17.png';
import eb18 from '../eboard/18.png';
import eb19 from '../eboard/19.png';
import eb20 from '../eboard/20.png';
import eb21 from '../eboard/21.png';
import eb22 from '../eboard/22.png';

import './SlaterBody.css'

class EBoard extends React.Component {
    render() {
        return (
            <div style={{display: "flex", 
                        backgroundColor: "whitesmoke"}}>
                {/* <Row> */}
                <Col sm={2}>
                    <SubHeading shTitle="Executive Board Members 2020-2021" 
                                genOrAlt="alt" />
                </Col>
                <Col sm={10}>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            <Col><img src={eb2} alt="president"></img></Col>
                            <Col><img src={eb7} alt="vice president"></img></Col>
                            <Col><img src={eb13} alt="treasurer"></img></Col>
                            <Col><img src={eb4} alt="secretary"></img></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col><img src={eb12} alt="alum rep"></img></Col>
                            <Col><img src={eb6} alt="senator"></img></Col>
                            <Col><img src={eb14} alt="cultural chair 1"></img></Col>
                            <Col><img src={eb15} alt="cultural chair 2"></img></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col><img src={eb16} alt="advo chair"></img></Col>
                            <Col><img src={eb17} alt="advo liason1"></img></Col>
                            <Col><img src={eb10} alt="pub chair"></img></Col>
                            <Col><img src={eb8} alt="fy liason2"></img></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col><img src={eb3} alt="fy liason1"></img></Col>
                            <Col><img src={eb11} alt="africa co rep"></img></Col>
                            <Col><img src={eb18} alt="africa co rep"></img></Col>
                            <Col><img src={eb19} alt="Asia Pacific rep"></img></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col><img src={eb20} alt="Asia Pacific rep"></img></Col>
                            <Col><img src={eb9} alt="north america rep"></img></Col>
                            <Col><img src={eb21} alt="european rep"></img></Col>
                            <Col><img src={eb5} alt="lat america rep"></img></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="align-items-center">
                            <Col><img src={eb22} alt="south Asia rep"></img></Col>
                            <Col></Col>
                            <Col><h1>Come join us!</h1></Col>
                            <Col></Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
                </Col>
                {/* </Row> */}
            </div>
        )
    }
}

export default EBoard;