import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import SubHeading from './SubHeading';

class RegionalGroups extends React.Component {
    render() {
        return(
            <div id="RegionalGroups">
                <SubHeading shTitle="Regional Specific Groups" genOrAlt="gen" />
                <div className="genPar" style={{textAlign: "left", paddingLeft:"10%"}}>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="18">
                                <h2>Africa Region</h2>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="18">
                                <Card.Body>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="20">
                                                <h3>Wellesley African Students Association (WASA)</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="20">
                                                <Card.Body>Wellesley African Students Association (WASA) details</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="21">
                                                <h3>[placeholder]</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="21">
                                                <Card.Body>[placeholder]</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Card.Body>
                            </Accordion.Collapse>   
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <h2>Asia Region</h2>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                                <h3>Bangladeshi Students Association (BSA)</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>BSA Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                                <h3>Chinese Students Association (CSA)</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>CSA Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                                <h3>Club Filipina</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body>Club Filipina Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="4">
                                                <h3>Asian Student Union (ASU)</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="4">
                                                <Card.Body>Asian Student Union (ASU) Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="5">
                                                <h3>Wellesley Association of South Asian Cultures (WASAC)</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="5">
                                                <Card.Body>Wellesley Association of South Asian Cultures (WASAC) Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="6">
                                                <h3>Wellesley College Japan Club (JC)</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="6">
                                                <Card.Body>Wellesley College Japan Club (JC) Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="6">
                                                <h3>Korean Students Association (KSA)</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="6">
                                                <Card.Body>Korean Students Association (KSA) Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="7">
                                                <h3>Wellesley Mahjong Club (WEMAC)</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="7">
                                                <Card.Body>Wellesley Mahjong Club (WEMAC) Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="8">
                                                <h3>Wellesley Southeast Asian Student Association (SEASA)</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="8">
                                                <Card.Body>Wellesley Southeast Asian Student Association (SEASA) Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="8">
                                                <h3>Wellesley Taiwanese Cultural Organization (TCO)</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="8">
                                                <Card.Body>Wellesley Taiwanese Cultural Organization (TCO) Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="9">
                                                <h3>Chinese Classical Arts Club</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="9">
                                                <Card.Body>Chinese Classical Arts Club Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="10">
                                                <h3>Darshana</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="10">
                                                <Card.Body>Darshana Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="11">
                                                <h3>GenerAsians</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="11">
                                                <Card.Body>GenerAsians Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="12">
                                                <h3>Wellesley Aiko</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="12">
                                                <Card.Body>Wellesley Aiko Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="13">
                                                <h3>Wellesley Asian Dance Organization (WADO)</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="13">
                                                <Card.Body>Wellesley Asian Dance Organization (WADO) Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="14">
                                                <h3>South Asia Political Collective</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="14">
                                                <Card.Body>South Asia Political Collective Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="25">
                                                <h3>Pakistani Students Association (PSA)</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="25">
                                                <Card.Body>Pakistani Students Association (PSA) Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="19">
                                                <h3>Wellesley Asian Alliance (WAA)</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="19">
                                                <Card.Body>Wellesley Asian Alliance (WAA) Details</Card.Body>
                                            </Accordion.Collapse>   
                                        </Card>
                                    </Accordion>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="15">
                                <h2>Europe Region</h2>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="15">
                                <Card.Body>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="16">
                                                <h3>German Club</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="16">
                                                <Card.Body>German Club details</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="17">
                                                <h3>Italian Society</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="17">
                                                <Card.Body>Italian Society details</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="25">
                                                <h3>Italian Society</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="25">
                                                <Card.Body>Italian Society details</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Card.Body>
                            </Accordion.Collapse>   
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="26">
                                <h2>Latin America Region</h2>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="26">
                                <Card.Body>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="27">
                                                <h3>Mezcla</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="27">
                                                <Card.Body>Mezcla</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="24">
                                                <h3>[placeholder]</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="24">
                                                <Card.Body>[placeholder]</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Card.Body>
                            </Accordion.Collapse>   
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="22">
                                <h2>Middle East Region</h2>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="22">
                                <Card.Body>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="23">
                                                <h3>Wellesley Arab Women Association (WAWA)</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="23">
                                                <Card.Body>Wellesley Arab Women Association (WAWA) details</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="24">
                                                <h3>[placeholder]</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="24">
                                                <Card.Body>[placeholder]</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Card.Body>
                            </Accordion.Collapse>   
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="28">
                                <h2>Political Advocacy</h2>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="28">
                                <Card.Body>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="29">
                                                <h3>CPLA</h3>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="29">
                                                <Card.Body>CPLA details</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Card.Body>
                            </Accordion.Collapse>   
                        </Card>
                    </Accordion>
                </div>
            </div>
        )
    }
}

export default RegionalGroups