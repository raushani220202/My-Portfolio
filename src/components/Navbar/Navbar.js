import React from "react";
import  "./Navbar.css";
import logo from "../../assets/42168494-designstyle-Raushani.png";
import {Link} from "react-scroll";

const Navbar=()=>{
    return(
        <nav className="navbar">
            <img src={logo} alt="" className="logo"/>
           <div className="deskTop">
            <Link to="Intro"  className="desktopMenuList">Home</Link>
            <Link to="Intro" className="desktopMenuList">About</Link>
            <Link to="project" className="desktopMenuList">Projects</Link>
            <Link to="skills"className="desktopMenuList">Skills</Link>
           </div>
           <Link to="contact" smooth={true} duration={500}>

<button className="desktopMenu" >
    Contact Me
</button></Link>
        </nav>
    )
}

export default Navbar;