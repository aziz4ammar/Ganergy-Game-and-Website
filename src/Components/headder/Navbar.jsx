import React from 'react'
import logo from "../img/logo copie.png";
import copy2 from "../img/logo copie 2 copie.png";
import { Link } from 'react-router-dom';


const linkStyle = {
    textDecoration: 'none'
};
const Navbar = () => {

    return (
        <div>
            <nav class="navbar">
                <Link to="/" >
                    <img id='i1' src={copy2} alt="" />
                </Link>
                <Link to="/Gameplay" style={linkStyle}>
                    <span id='t1' className="logo-text" >Gameplay</span>
                </Link>
                <Link to="/">
                    {/* <img id='i2' src={logo} alt="" /> */}
                </Link>
                <Link to="/Aboutus" style={linkStyle}>
                    <span id='t2' className="logo-text">About us</span>
                </Link>
                
            </nav>
    </div>
    )
}

export default Navbar