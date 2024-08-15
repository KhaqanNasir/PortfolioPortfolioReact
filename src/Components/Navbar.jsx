import React from 'react';
import { NavLink } from 'react-router-dom';  
import "./Navbar.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Navbar = () => {
  useGSAP(()=>{
    gsap.from(".nav-items li" , {
      opacity:0,
      stagger:0.2,
      duration:0.7,
      x:50
    })
  })
  return (
    <div className="nav-items">
      <li><NavLink to="/" exact activeClassName="active">About</NavLink></li>
      <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
      <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
      <li><NavLink to="/certificates" activeClassName="active">Certificates</NavLink></li>
      <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
    </div>
  );
}

export default Navbar;
