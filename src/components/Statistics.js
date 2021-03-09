import React from "react";
import SubHeading from './SubHeading';

class Statistics extends React.Component {
    render() {
        return (
            <div>
                <SubHeading shTitle="International Students Statistics" genOrAlt="gen" />
                <div className="generalPar">
                    <h1>Here will be some statistics of international students at Wellesley College.</h1>
                    <p>Examples: diagram of countries of origin, majors percentage, etc etc</p>
                </div>
            </div>
        )
    }
}

export default Statistics;