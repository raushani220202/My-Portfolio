import React from "react";
import './Skills.css';
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Javascript from "../../assets/javascript.png";
import React1 from "../../assets/react.webp";
import Corejava from "../../assets/Java.jpeg"
import Hibernate from "../../assets/hibernate.jpeg"
import Servlet from "../../assets/servlet.jpeg"
import SpringBoot from "../../assets/spring-boot.webp"

const Skills = () =>{
    return(
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am skilled and passionate Full Stack Java Developer</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Html} alt="html" className="skillBarImg"/>
                    <div className="skillText">
                        <h2>Html5</h2>
                        <p>Structured web page content using semantic and accessible markup.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Css} alt="css" className="skillBarImg"/>
                    <div className="skillText">
                        <h2>Css 3</h2>
                        <p>Styled and responsively designed layouts with modern CSS techniques.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Javascript} alt="javascript" className="skillBarImg"/>
                    <div className="skillText">
                        <h2>JavaScript + Es6</h2>
                        <p>Added dynamic functionality and user interactivity to web applications.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={React1} alt="react" className="skillBarImg"/>
                    <div className="skillText">
                        <h2>React</h2>
                        <p>Built dynamic, component-based user interfaces with efficient state and props management.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Corejava} alt="core java" className="skillBarImg" />
                        <div className="skillText">
                          <h2>Core Java</h2>
                          <p>Proficient in OOP concepts, exception handling, and collections. Developed backend logic and data processing modules.</p>
                </div>
</div>

<div className="skillBar">
    <img src={Hibernate} alt="hibernate" className="skillBarImg" />
    <div className="skillText">
        <h2>Hibernate</h2>
        <p>Used Hibernate ORM for efficient database interaction with JPA, reducing boilerplate code and improving scalability.</p>
    </div>
</div>

<div className="skillBar">
    <img src={Servlet} alt="servlet" className="skillBarImg" />
    <div className="skillText">
        <h2>Servlet</h2>
        <p>Created Java Servlets to handle HTTP requests and dynamic responses for web-based applications.</p>
    </div>
</div>
<div className="skillBar">
    <img src={SpringBoot} alt="spring boot" className="skillBarImg" />
    <div className="skillText">
        <h2>Spring Boot</h2>
        <p>Built RESTful APIs using Spring Boot with layered architecture and integrated MySQL using Spring Data JPA.</p>
    </div>
</div>

                
            </div>
        </section>
    )
}
 export default Skills;