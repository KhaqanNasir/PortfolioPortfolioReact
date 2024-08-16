import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Info from "./Components/Info";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Certificates from "./Components/Certificates";
import Contact from "./Components/Contact";
import About from "./Components/About";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
const locomotiveScroll = new LocomotiveScroll();

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => locomotiveScroll.destroy();
  }, []);
  return (
    <div data-scroll-container>
      <div className="container-fluid" data-scroll data-scroll-speed={0.5}>
        <Router>
          <div className="row">
            <div className="col-3">
              <Info />
            </div>
            <div className="col-9">
              <Routes>
                <Route path="/" element={<About />} />
                <Route exact path="/resume" element={<Resume />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/certificates" element={<Certificates />} />
                <Route exact path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
