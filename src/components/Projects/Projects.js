import React from "react";
import "./Projects.css";
import ecommerce from '../../assets/ecommerce.webp';
import flightapp from '../../assets/flightweb.jpeg';
import bankingApp from '../../assets/bankingApp.webp';
import bookStoreApp from '../../assets/bookApp.jpeg'

const Project = () =>{
    return(
       <section id="project">
        <h2 className="projectTitle">My Projetcs</h2>
        <span className="projectDesc">Turning skills into real-world projects—here’s what I’ve built so far.</span>
        <div className="projectContainer">
            <div className="projectCard">
            <img src={ecommerce} alt="ecommerce"className="projectImgs" />
            <div className="description"><span className="title">Ecommerce Project</span><br/>Ecommerce Project using HTML,CSS,JAVASCRIPT,REACT,VITE</div>
            </div>
            <div className="projectCard">
            <img src={flightapp} alt="ecommerce"className="projectImgs" />
            <div className="description"><span className="title">Booking App</span><br/>Booking App using HTML,CSS,JAVASCRIPT,REACT</div> 
            </div>
            <div className="projectCard">
            <img src={bankingApp} alt="ecommerce"className="projectImgs" />
            <div className="description"><span className="title">Banking Application</span><br/>banking Application Project using Java,Sql, MySql, SpringBoot, Postman</div>
            </div>
            <div className="projectCard">
            <img src={bookStoreApp} alt="ecommerce"className="projectImgs" />
            <div className="description"><span className="title">Book Store Application</span><br/>Book Store Application Project using Java,Sql, MySql, SpringBoot, Postman</div>
            </div>
        </div>
       </section>
    )
}
export default Project;