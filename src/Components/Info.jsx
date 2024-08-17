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

    tl.from(".image", { y: -50, duration: 0.6, opacity: 0 });
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
      <div className="final">
        <div className="container">
          <div className="row">
            <div className="completeBG col-12">
              <img src={bodyImage} className="image" alt="ProfilePic" />
              <p className="bodyName">Muhammad Khaqan Nasir</p>
              <h1 className="bodyWork shadow">Computer Scientist</h1>
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
                    <span className="emailHeading">EMAIL</span>
                    <br />
                    <span className="emaildata">khaqannasir01@gmail.com</span>
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
                    <span className="emailHeading">PHONE</span>
                    <br />
                    <span className="emaildata">+92 309 1111977</span>
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
                    <span className="emailHeading">BIRTHDAY</span>
                    <span className="emaildata">January 09, 2004</span>
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
                    <span className="emailHeading">LOCATION</span>
                    <br />
                    <span className="emaildata">Okara, Pakistan</span>
                  </div>
                </div>
              </div>
              <span className="bodyIcons">
                <a
                  href="https://www.linkedin.com/in/khaqan-nasir/"
                  target="_blank"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://github.com/KhaqanNasir" target="_blank">
                  <img src={github} alt="GitHub" />
                </a>
                <a
                  href="https://www.instagram.com/khaqannasir_"
                  target="_blank"
                >
                  <img src={instagram} alt="Instagram" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}

export default Info;
