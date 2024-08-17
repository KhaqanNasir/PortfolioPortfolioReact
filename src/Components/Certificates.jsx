import React, { useEffect, useState } from "react";
import "./Certificates.css";
import CertificateData from "./certificateData.jsx";
import data from "./certificatesAPI.jsx";
import Navbar from "./Navbar.jsx";

const Certificates = () => {
  const [cerData, setCerData] = useState(data);
  useEffect(() => {
    document.title = "Portfolio | Certificates";
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="background">
          <Navbar />
          <div>
            <div className="blurtext">
              Certificates
              <p className="about-name ">Certificates</p>
            </div>
            <hr className="about-hz"></hr>
          </div>
          <div className="container">
            <div className="row">
              <div className="certificates col-12">
                <CertificateData cerData={cerData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
