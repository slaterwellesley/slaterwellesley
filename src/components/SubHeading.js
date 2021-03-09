import React from "react";
import './SlaterBody.css';

class SubHeading extends React.Component {
    render() {
        return (
            <div className={this.props.genOrAlt} style={{alignItems: "center"}}>
                <span className="shTitle">{this.props.shTitle}</span>
            </div>
        )
    }
}


export default SubHeading