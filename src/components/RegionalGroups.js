import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import SubHeading from './SubHeading';
import Button from "react-bootstrap/Button";
import { BsCaretDown } from "react-icons/bs";
// for orgs logo:
import wasa from './orgs_image/wasa.jpg';
import ethos from './orgs_image/ethos.jpg';
import bsa from './orgs_image/bsa.png';
import csa from './orgs_image/csa.png';
import clubfilipina from './orgs_image/clubfilipina.png';
import asu from './orgs_image/asu.jpg';
import wasac from './orgs_image/wasac.png';
import jc from './orgs_image/jc.jpg';
import ksa from './orgs_image/ksa.jpg';
import wemac from './orgs_image/wemac.jpg';
import seasa from './orgs_image/seasa.png';
import tco from './orgs_image/tco.jpg';
import darshana from './orgs_image/darshana.png';
import generasians from './orgs_image/generasians.jpg';
import aiko from './orgs_image/aiko.jpg';
import wado from './orgs_image/wado.jpg';
import sapc from './orgs_image/sapc.png';
import psa from './orgs_image/psa.jpg';
import waa from './orgs_image/waa.png';
import placeholder from './orgs_image/placeholder.png';
import german from './orgs_image/german.jpg';
import mezcla from './orgs_image/mezcla.png';
import wawa from './orgs_image/wawa.jpg';
import cpe from './orgs_image/cpe.png';


import './SlaterBody.css';

const africaRegion = [
    {
        image: wasa,
        title: "Wellesley African Students' Assocation (WASA)",
        text: "Motto - If we stand tall, it is because we stand on the shoulders of those who came before us.\n (Formerly African Awareness Now (AAN). Rebranded in 1998.)",
        link: "https://www.facebook.com/WellesleyAfricans"
    },
    {
        image: ethos,
        title: "Ethos",
        text: "Ethos is an organization for Students of African descent at Wellesley College. One Love... One ETHOS... One Destiny",
        link: "https://www.facebook.com/EthosWC/"
    }
]

const asiaRegion = [
    {
        image: bsa,
        title: "Bangladeshi Students Assocation (BSA)",
        text: "The mission of the Bangladeshi Students’ Association (BSA) is to foster a community in which both Bangladeshi students and students interested in Bangladeshi culture can feel comfortable discussing topics and participating in events and traditions specific to Bangladesh. Our goal is to share Bangladeshi culture and history with the campus community and to establish and maintain connections with other Bangladeshi Student Associations in the greater Boston area.",
        link: "https://www.facebook.com/WellesleyBSA/"
    },
    {
        image: csa,
        title: "Wellesley CSA",
        text: "Wellesley Chinese Students' Association serves to raise awareness and build community, by cultivating interest in and promoting the understanding of Chinese and Chinese American culture, affairs, and issues. In addition to reaching out to our members, we work with members of the Greater Boston community by participating in community service and projects. CSA is an open organization and encourages everyone to participate and take full advantage of CSA's resources.",
        link: "https://www.facebook.com/wellesleycsa/"
    },
    {
        image: clubfilipina,
        title: "Wellesley College Club Filipina",
        text: "Club Filipina exists to promote economic, political, and cultural awareness of the Philippines on the Wellesley College campus and beyond. We aim to foster unity among Filipinas of diverse backgrounds and interests by gaining a better conception of national unity and the “Filipina” identity. We welcome everyone, whether you are Filipino or are just interested in the Philippines and its culture!",
        link: "https://www.facebook.com/wellesleyclubfilipina"
    },
    {
        image: asu,
        title: "Wellesley Asian Student Union (ASU)",
        text: "Wellesley Asian Student Union (ASU)",
        link: "https://www.facebook.com/wellesleyasu/"
    },
    {
        image: wasac,
        title: "The Wellesley College Association for South Asian Cultures",
        text: "The Wellesley College Association for South Asian Cultures",
        link: "https://www.facebook.com/WellesleyWASAC/"
    },
    {
        image: jc,
        title: "Wellesley Japan Club (JC)",
        text: "Get updated on all our events and get involved! For questions, please email wellesleyjc@gmail.com",
        link: "https://www.facebook.com/wellesleyjc/"
    },
    {
        image: ksa,
        title: "Wellesley Korean Students Association (KSA)",
        text: "Wellesley Korean Students Association (KSA)",
        link: "https://www.facebook.com/WellesleyKSA/"
    },
    {
        image: wemac,
        title: "Wellesley Mahjong Club",
        text: "Wellesley Mahjong Club",
        link: "https://www.facebook.com/wellesleymahjongclub.wemac"
    },
    {
        image: seasa,
        title: "Wellesley Southeast Asian Student Association (SEASA)",
        text: "Founded in 2018, Wellesley Southeast Asian Student Association is a cultural organization for students of Southeast Asian descent and those interested in Southeast Asian culture.",
        link: "https://www.facebook.com/WellesleySEASA"
    },
    {
        image: tco,
        title: "Wellesley Taiwanese Cultural Organization (TCO)",
        text: "Wellesley TCO seeks to address issues about Taiwan in the college community and encourages open discussions on all topics, cultural, social, political, and beyond. We welcome anyone interested in learning more about Taiwan and celebrating Taiwanese culture.",
        link: "https://www.facebook.com/wellesleytco/"
    },
    {
        image: darshana,
        title: "Wellesley College Darshana",
        text: "Darshana represents the Hindu students community at Wellesley College and holds fun cultural events like Diwali and Holi!",
        link: "https://www.facebook.com/wellesleydarshana"
    },
    {
        image: generasians,
        title: "GenerAsians (GA)",
        text: "Wellesley College's Asian/AAPI+ magazine established in 1997. We are committed to spotlighting womxn's voices.",
        link: "https://www.facebook.com/GenerAsians"
    },
    {
        image: aiko,
        title: "Wellesley Aiko",
        text: "Founded in fall 2007 by Class of 2008 students Kimiko Lange, Marie Ayabe, and Maryssa Miller as a branch of Japan Club, Aiko is now an independent performance student organization. We perform annually at Slater's International Cultural Show, Yuki Matsuri, and our annual spring concert. We often collaborate with other ethnic music groups at Wellesley. Our off-campus performances have taken place at venues from Legacy Place in Dedham, MA to the NBC Studios at 30 Rock in New York City. Aiko (蓝鼓) means 'blue drum', bringing together the words for taiko (太鼓) and the color blue (蓝), Wellesley's school color. Youtube: https://www.youtube.com/channel/UClw9on9r4T9XqXRo055VrLg",
        link: "https://www.facebook.com/wellesleyaiko/"
    },
    {
        image: wado,
        title: "Wellesley Asian Dance Organization - WADO",
        text: "Wellesley Asian Dance Organization is one of Wellesley College’s premier Asian dance troupes.",
        link: "https://www.facebook.com/WellesleyAsianDanceOrg"
    },
    {
        image: sapc,
        title: "South Asia Political Collective",
        text: "The South Asia Political Collective is a Wellesley College based student organisation to promote academic discourse, debates, and study groups regarding the regional affairs of South Asia.",
        link: "https://www.facebook.com/SAPCWellesley"
    },
    {
        image: psa,
        title: "Pakistani Student Association - Wellesley",
        text: "Wellesley's Pakistani Student Association",
        link: "https://www.facebook.com/wellesleypsa/"
    },
    {
        image: waa,
        title: "Wellesley Asian Alliance - WAA",
        text: "Empowering Asian and Asian Americans at Wellesley since 1992.",
        link: "https://www.facebook.com/WAASuperFolk"
    },
    {
        image: placeholder,
        title: "Chinese Classical Arts Club",
        text: "Chinese Classical Arts Club",
        link: "https://wellesley.presence.io/organization/chinese-classical-arts-club"
    }
]

const europeRegion = [
    {
        image: german,
        title: "Wellesley College German Club",
        text: "We're a fun student-run organization, coming together to plan outings, events, and enjoy the German language and culture.",
        link: "https://www.facebook.com/WellesleyGerman"
    },
    {
        image: placeholder,
        title: "Wellesley College Italian Club",
        text: "Wellesley College Italian Club",
        link: "#"
    }
]

const latinAmericaRegion = [
    {
        image: mezcla,
        title: "Mezcla - Wellesley College",
        text: "Mezcla is Wellesley's Latinx cultural org. We focus on the academic, social, political, and general well-being of Wellesley students of Latinx descent. Anyone is welcome to join and/or participate in our events regardless of heritage.",
        link: "https://www.facebook.com/WCMezcla"
    },
    {
        image: placeholder,
        title: "placholder",
        text: "placeholder",
        link: "#"
    }
]

const middleEastRegion = [
    {
        image: wawa,
        title: "Wellesley Arab Women Association - WAWA",
        text: "WAWA is a cultural organization for anyone in the Wellesley Community interested in the Middle East and our cultural, social and political atmosphere",
        link: "https://www.facebook.com/wawzers"
    }
]

const politicalEngagement = [
    {
        image: cpe,
        title: "Committee for Political Engagement (CPE)",
        text: "CPE is a non-partisan Wellesley College Government Committee. Our mission is to raise awareness about political issues and encourage political engagement.",
        link: "https://wellesley.presence.io/organization/committee-for-political-engagement"
    }
]

const renderCard = (card, index) => {
    return (
        <Card style={{ width: "18rem" }} key={index} className="box">
            <div className="orgImgWrap">
                <Card.Img variant="top" className="orgImg" src={card.image} />
            </div>
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary"><a className="orgsLink" href={card.link} target="_blank" rel="noreferrer">Go to org's page</a></Button>
            </Card.Body>
        </Card>
    );
};

class RegionalGroups extends React.Component {


    render() {
        return (
            <div id="RegionalGroups">
                <SubHeading shTitle="Regional Specific Groups" genOrAlt="gen" />
                <div className="genPar" style={{ textAlign: "left", paddingLeft: "10%" }}>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="18" className="regionalAccordion">
                                <h2>Africa Region <BsCaretDown /></h2>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="18">
                                <Card.Body>
                                    <Accordion>
                                    <div className="grid">
                                        {africaRegion.map(renderCard)}
                                    </div>
                                    </Accordion>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="regionalAccordion">
                                <h2>Asia Region <BsCaretDown /></h2>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Accordion>
                                        <div className="grid">
                                            {asiaRegion.map(renderCard)}
                                        </div>
                                    </Accordion>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="15" className="regionalAccordion">
                                <h2>Europe Region <BsCaretDown /></h2>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="15">
                                <Card.Body>
                                    <Accordion>
                                    <div className="grid">
                                        {europeRegion.map(renderCard)}
                                    </div>
                                    </Accordion>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="26" className="regionalAccordion">
                                <h2>Latin America Region <BsCaretDown /></h2>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="26">
                                <Card.Body>
                                    <Accordion>
                                    <div className="grid">
                                        {latinAmericaRegion.map(renderCard)}
                                    </div>
                                    </Accordion>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="22" className="regionalAccordion">
                                <h2>Middle East Region <BsCaretDown /></h2>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="22">
                                <Card.Body>
                                    <Accordion>
                                    <div className="grid">
                                        {middleEastRegion.map(renderCard)}
                                    </div>
                                    </Accordion>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="28" className="regionalAccordion">
                                <h2>Political Advocacy <BsCaretDown /></h2>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="28">
                                <Card.Body>
                                    <Accordion>
                                    <div className="grid">
                                        {politicalEngagement.map(renderCard)}
                                    </div>
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