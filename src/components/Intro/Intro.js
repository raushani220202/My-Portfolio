import React from "react";
import './Intro.css';
import { Link } from "react-scroll";

const Intro =()=>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span><br/>
                <span className="introText">I'm<span className="Soumya"> Raushani </span>  <br/><span className="front">FrontEnd Developer</span></span>
                <p className="introPart">Hi! I'm a passionate and creative Full Stack JavaDeveloper with a strong foundation <br/>in HTML, CSS, JavaScript, Core Java, JDBC, Hibernate and modern frameworks like React.js, Spring, Spring Boot . 
           </p> 
           <div className="btnn">
           <Link  to="contact"smooth={true} duration={500}><button className="btn">Hire me
           </button></Link>
           <a href="/Raushani ku_Resume.pdf" download target="_blank" rel="noopener noreferrer"><button className="btn">Download Resume
           </button></a></div>
           
           </div>

           

        </section>
    )
}
export default Intro;