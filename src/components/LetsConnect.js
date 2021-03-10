import React from "react";
import {FaFacebook, FaInstagram, FaUsers} from "react-icons/fa";
import './SlaterBody.css'

class LetsConnect extends React.Component {
    render() {
        return (
            <div id="LetsConnect" className="letsConnect">
                <span> © 2021 Slater International Student Organization at Wellesley College</span>
                <div className="socialPages" >
                    <a href="https://www.facebook.com/SlaterInternationalStudentsOrganization"
                        rel="noreferrer" target="_blank"><FaFacebook /></a>
                    <a href="https://www.instagram.com/wellesley.slater/"
                        rel="noreferrer" target="_blank"><FaInstagram /></a>
                    <a href="https://wellesley.presence.io/organization/slater-international-student-organization-2"
                        rel="noreferrer" target="_blank"><FaUsers /></a>
                </div>
            </div>
        )
    }
}

export default LetsConnect;