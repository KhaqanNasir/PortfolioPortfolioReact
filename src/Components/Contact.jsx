import React, { useEffect, useRef } from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

const Contact = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    document.title = "Portfolio | Contact";
    const script = document.createElement("script");
    script.src = "https://smtpjs.com/v3/smtp.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const sendEmail = () => {
    const bodyMessage = `
      Name : ${fullNameRef.current.value} <br />
      Email : ${emailRef.current.value} <br />
      Phone : ${phoneRef.current.value} <br />
      Message : ${messageRef.current.value}
    `;

    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "khaqannasir01@gmail.com",
      Password: "512F7413008A4594C1862C3B8BF6A5CA0BB3",
      To: "khaqannasir01@gmail.com",
      From: "khaqannasir01@gmail.com",
      Subject: subjectRef.current.value,
      Body: bodyMessage,
    }).then((message) => {
      if (message === "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message Sent Successfully!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send the message.",
          icon: "error",
        });
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="contact background">
            <Navbar />
            <div>
              <div className="blurtext">
                Contact
                <p className="about-name ">Contact</p>
              </div>
              <hr className="about-hz"></hr>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="off"
                id="FullName"
                ref={fullNameRef}
              />

              <input
                type="text"
                placeholder="Email Address"
                autoComplete="off"
                id="Email"
                ref={emailRef}
              />

              <input
                type="text"
                placeholder="Phone Number"
                autoComplete="off"
                id="phone"
                ref={phoneRef}
              />

              <input
                type="text"
                placeholder="Subject"
                autoComplete="off"
                id="Subject"
                ref={subjectRef}
              />

              <textarea
                placeholder="Message"
                autoComplete="off"
                id="Message"
                rows="4"
                cols="50"
                ref={messageRef}
              />

              <button type="Submit">Send Message</button>
            </form>

            <div className="map">
              <iframe
                className="shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.7808347541586!2d73.43948817550964!3d30.80877987454768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922a7d73daf01fb%3A0x9d903086d1eee97f!2sA%20block%20okara!5e0!3m2!1sen!2s!4v1722105582247!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <br />
            <p className="about-doing">Send me a Mail</p>
            <div className="emailSend">
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
