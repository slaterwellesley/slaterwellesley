import React from "react";
import logo from '../slaterhouse.png';
import SlaterNavbar from './SlaterNavbar'

class Header extends React.Component {
    render() {
        return (
        <div>
            <SlaterNavbar />
            <img className='slaterhouse' src={logo} alt="Slater house" />
        </div>)
    }
}

export default Header