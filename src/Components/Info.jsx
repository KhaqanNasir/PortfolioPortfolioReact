import React, { useRef, useState } from "react";
import "./Info.css";
import bodyImage from "../Components/images/BodyImage.png";
import emailImage from "../Components/images/emailIcon.png";
import phoneImage from "../Components/images/phoneIcon.png";
import birthdayImage from "../Components/images/birthdayIcon.png";
import locationImage from "../Components/images/locationIcon.png";
import linkedin from "../Components/images/linkedin.png";
import github from "../Components/images/github.png";
import instagram from "../Components/images/instagram.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Info() {
  const buttonRef = useRef(null);
  const [mode, setMode] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".image", { y: -60, duration: 0.6, opacity: 0 });
    tl.from(".bodyName, .bodyWork", { y: 40, duration: 0.7, opacity: 0 });
    tl.from(".data", { x: -50, duration: 0.4, stagger: 0.2, opacity: 0 });
    tl.from(".bodyIcons a img", {
      opacity: 0,
      duration: 0.3,
      stagger: 0.15,
      y: -20,
    });
  });

  return (
    <>
      <section className="final">
        <div className="container">
          <div className="row">
            <div className="completeBG col-12">
              <img src={bodyImage} className="image" alt="Profile Picture" />
              <p className="bodyName">Muhammad Khaqan Nasir</p>
              <h1 className="bodyWork shadow">Software Engineer</h1>
              <hr className="horizontalLine" />
              <div className="left">
                <div className="data">
                  <div>
                    <img
                      src={emailImage}
                      className="iconsBody shadow"
                      alt="Email Icon"
                    />
                  </div>
                  <div>
                    <h2 className="emailHeading">Email</h2>
                    <p className="emaildata">khaqannasir01@gmail.com</p>
                  </div>
                </div>
                <div className="data">
                  <div>
                    <img
                      src={phoneImage}
                      className="iconsBody shadow"
                      alt="Phone Icon"
                    />
                  </div>
                  <div>
                    <h2 className="emailHeading">Phone</h2>
                    <p className="emaildata">+92 309 1111977</p>
                  </div>
                </div>
                <div className="data">
                  <div>
                    <img
                      src={birthdayImage}
                      className="iconsBody shadow"
                      alt="Birthday Icon"
                    />
                  </div>
                  <div className="dataText">
                    <h2 className="emailHeading">Birthday</h2>
                    <p className="emaildata">January 09, 2004</p>
                  </div>
                </div>
                <div className="data">
                  <div>
                    <img
                      src={locationImage}
                      className="iconsBody shadow"
                      alt="Location Icon"
                    />
                  </div>
                  <div>
                    <h2 className="emailHeading">Location</h2>
                    <p className="emaildata">Okara, Pakistan</p>
                  </div>
                </div>
              </div>
              <div className="bodyIcons">
                <a
                  href="https://www.linkedin.com/in/khaqan-nasir/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn Profile" />
                </a>
                <a
                  href="https://github.com/KhaqanNasir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="GitHub Profile" />
                </a>
                <a
                  href="https://www.instagram.com/khaqannasir_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Instagram Profile" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </>
  );
}

export default Info;
