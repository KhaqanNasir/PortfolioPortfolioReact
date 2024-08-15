import React, { useEffect } from "react";
import "./Contact.css";
import Navbar from "./Navbar";
const Contact = () => {
  useEffect(() => {
    document.title = "Portfolio | Contact";
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="contact background">
            <Navbar />
            <div>
              <p className="about-name">Contact</p>
              <hr className="about-hz"></hr>
            </div>
            <div className="map">
              <iframe
                className="shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.7808347541586!2d73.43948817550964!3d30.80877987454768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922a7d73daf01fb%3A0x9d903086d1eee97f!2sA%20block%20okara!5e0!3m2!1sen!2s!4v1722105582247!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <br></br>
            <p className="about-doing">Send me a Mail</p>
            <div class="emailSend">
              <a
                href="mailto:khaqannasir01@gmail.com"
                target="_blank"
                className="mail"
              >
                Send Mail
              </a>
              <a
                href="https://drive.google.com/file/d/17_YXOt_OYG-dygd2DQZOWgFOIAvX0J8Q/view?usp=sharing"
                download
                target="_blank"
                className="mail"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
