import React from "react";
import SubHeading from './SubHeading';

class RegionalGroups extends React.Component {
    render() {
        return(
            <div id="RegionalGroups">
                <SubHeading shTitle="Regional Specific Groups" genOrAlt="gen" />
                <div className="genPar" style={{textAlign: "left", paddingLeft:"10%"}}>
                    <h1>Here we will have descriptions of regional groups</h1>
                    <ul>
                        <li>Seasa</li>
                        <li>Mezcla</li>
                        <li>CSA</li>
                        <li>ASU</li>
                        <li>Wellesley Bangladeshi Students Association</li>
                        <li>TCO</li>
                        <li>Club Filipina</li>
                        <li>WAWA</li>
                        <li>Others?</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default RegionalGroups