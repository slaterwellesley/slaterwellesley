import React from "react";
// import LoremIpsum from "react-lorem-ipsum";
import EXBoard from "./slaterexboard.jpg";
import SubHeading from "./SubHeading";


import './SlaterBody.css';

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <SubHeading shTitle="About us" genOrAlt="gen" />
                <div className="generalPar">
                    <p>
                        Welcome to the Slater International Student Organization!
                    </p>
                    <p>
                        Our purpose as an organization is 
                        to encourage greater understanding among all cultures through personal association and 
                        cooperative endeavors as well as to address the needs and concerns of Wellesley College's 
                        international students, and we are constantly working to uphold this through programs and 
                        activities structured around current political and historical events and cultural traditions f
                        rom around the world. The Slater Org is committed to advocating for international students vocally and transparently, 
                        and we want to use the platform that we have to really bring awareness to the diversity amongst 
                        our community and beyond. We are extremely grateful for the many strong relationships that we 
                        have with other Wellesley student organizations, as well as academic departments, and of course, 
                        the wonderful Slater Center. 
                    </p>
                    <p>
                        We have hosted collaborative events with these groups like the 
                        annual Slater Culture Show in the Fall semester and Spring Festival in the Spring semester. 
                        The Slater Org’s Executive Board, student officials elected by other students, also works on 
                        hosting celebrations of traditional holidays, and events geared towards appreciation of regional 
                        food, music, dance, arts and crafts. Many of these elements are prevalent in our programs because 
                        we believe that they reflect the cultural diversity of the international campus community and 
                        participating in these events allows us to learn from and appreciate the many places Wellesley 
                        students call home. The events planned by our organization are open to all members of the 
                        Wellesley College community, and we are working on ensuring that students will be able to 
                        participate no matter where they are in the world.
                    </p>
                </div>
                <img className="par-image" src={EXBoard} alt="ex eboard" />
            </div>
        )
    }
}

export default AboutUs