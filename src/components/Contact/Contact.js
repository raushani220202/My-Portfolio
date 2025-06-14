import React from "react";
import './Contact.css';
function Contact(){
    return(
      <section id="contact">
        <div className="Title">
            <h1 >Contact</h1>
        </div>
        <div className="content">
            <a href="https://github.com/raushani220202">
            <i className="fa-brands fa-github fa-2x"></i>
            <span className="github">Github Profile</span>
            </a>
            <a href="https://www.linkedin.com/in/raushani2002/">
            <i className="fa-brands fa-linkedin fa-2x"></i>
            <span className="linkedin">Linkedin</span>
            </a>
            <a href="mailto:raushani220202@gmail.com">
            <i className="fa-solid fa-envelope fa-2x" ></i>
            <span className="email">Email : raushani220202@gmail.com</span>
            </a>
            
        </div>
        <footer>
  <p>© 2025 Raushani Kumari. All rights reserved.</p>
</footer>
      </section>  
    )

}
export default Contact;