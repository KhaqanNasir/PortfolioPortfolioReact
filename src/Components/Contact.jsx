import React, { useEffect, useRef } from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

const Contact = () => {
  useEffect(() => {
    document.title = "Portfolio | Contact";

    return () => {};
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b61e096e-4a31-4caa-8b10-12aec9607539");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success",
      });
    }
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
            <p className="noborder">Contact Me</p>

            <div className="formclr">
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  autoComplete="off"
                  id="FullName"
                  required
                  name="name"
                />

                <input
                  type="text"
                  placeholder="Email Address"
                  autoComplete="off"
                  id="Email"
                  required
                  name="email"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  autoComplete="off"
                  id="phone"
                  required
                  name="phone"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  autoComplete="off"
                  id="Subject"
                  required
                  name="subject"
                />

                <textarea
                  placeholder="Message"
                  autoComplete="off"
                  id="Message"
                  required
                  rows="6"
                  cols="50"
                  name="message"
                />

                <button type="Submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
