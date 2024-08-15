import React, { useEffect, useState } from 'react';
import "./Portfolio.css";
import portfolioAPI from "./PortfolioAPI.jsx";
import PortfolioData from './PortfolioData.jsx';
import Navbar from './Navbar.jsx';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(portfolioAPI);

  useEffect(() => {
    document.title = "Portfolio | Projects";
  }, []); 

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="background">
            <Navbar />
            <div>
              <p className="about-name">Portfolio</p>
              <hr className="about-hz" />
            </div>
            <div className="portfolio col-12">
              <PortfolioData portfolio={portfolio} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
