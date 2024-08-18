import "bootstrap/dist/css/bootstrap.min.css";
import webDesign from "../Components/images/webDesign.png";
import webDevelopment from "../Components/images/webDevelopment.png";
import "./About.css";
import Navbar from "./Navbar";
import "remixicon/fonts/remixicon.css";
function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="background ">
            <Navbar />
            <div>
              <div className="blurtext">
                About Me
                <p className="about-name ">About Me</p>
              </div>
              <hr className="about-hz"></hr>
            </div>
            <div>
              <p className="about-para">
                Welcome to my professional portfolio website. I am a 20-year-old
                BSCS student from COMSATS, passionate about creating intuitive
                and dynamic user experiences. My journey in web development has
                been both challenging and rewarding, as I constantly strive to
                improve my craft and stay updated with the latest technologies.
                I have a keen interest in .NET and am committed to learning on a
                daily basis, staying fully motivated throughout my journey.
              </p>
              <p className="about-para">
                Throughout my academic career, I have successfully completed
                various projects, demonstrating my ability to adapt and excel.
                Each project has helped me grow and refine my skills, ensuring
                that I deliver high-quality results. I am excited to share my
                work with you and look forward to potential collaborations.
              </p>
            </div>
            <br></br>
            <a
              href="https://drive.google.com/file/d/17_YXOt_OYG-dygd2DQZOWgFOIAvX0J8Q/view?usp=sharing"
              download
              target="_blank"
              className="mail"
            >
              <i class="ri-download-line"></i>
              &nbsp; Download CV
            </a>
            <br />
            <br></br>

            <div>
              <p className="about-doing ">What I'm Doing</p>
            </div>
            <div className="display">
              <div className="about-work col-lg-6 col-xl-6 col-md-12 col-sm-12 shadow-lg p-2">
                <div>
                  <img src={webDesign} className="about-work-img"></img>
                </div>
                <div>
                  <p className="about-work-p1">Web Design</p>
                  <p className="about-work-p2">
                    The most modern and high-quality design made at a
                    professional level.
                  </p>
                </div>
              </div>

              <div className="about-work col-lg-6 col-xl-6 col-md-12 col-sm-12 shadow-lg p-2">
                <div>
                  <img src={webDevelopment} className="about-work-img"></img>
                </div>
                <div>
                  <p className="about-work-p1">Web Development</p>
                  <p className="about-work-p2">
                    High quality development of sites at the professional level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
