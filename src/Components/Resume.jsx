import React, { useEffect } from "react";
import "./Resume.css";
import education from "./images/education.png";
import experience from "./images/experience.png";
import Navbar from "./Navbar.jsx";

const Resume = () => {
  useEffect(() => {
    document.title = "Portfolio | Resume";
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="background">
            <Navbar />
            <div>
              <p className="about-name">Resume</p>
              <hr className="about-hz"></hr>
            </div>

            <span className="resume-edu">
              <img src={education} alt="Education Icon" />
              <p className="about-doing">Education</p>
            </span>

            <div className="rem">
              <div className="resume-box">
                <h3 className="edu-name">
                  COMSATS University Islamabad, Sahiwal Campus
                </h3>
                <h4 className="edu-duration">2022 - Current</h4>
                <p className="edu-abt">
                  I am currently a student in the 5th semester of a Bachelor of
                  Science in Computer Science (BSCS) at COMSATS University,
                  where I have maintained an impressive CGPA of 3.93. My
                  education at COMSATS has provided me with a strong foundation
                  in various computer science disciplines, enabling me to excel
                  in both theoretical and practical aspects of the field.
                </p>
              </div>

              <div className="resume-box">
                <h3 className="edu-name">Aspire College Okara</h3>
                <h4 className="edu-duration">2020 - 2022</h4>
                <p className="edu-abt">
                  I completed F.Sc Pre-Medical at Aspire College Okara with an A
                  grade and served as a class proctor for 2 years. This
                  experience honed my leadership skills and provided a strong
                  foundation for my current studies in computer science.
                </p>
              </div>

              <div className="resume-box">
                <h3 className="edu-name">District Public School Okara</h3>
                <h4 className="edu-duration">2008 - 2020</h4>
                <p className="edu-abt">
                  I completed my matriculation from DPS Okara with a focus on
                  Biology. This early exposure to the sciences laid the
                  groundwork for my academic journey and subsequent studies in
                  pre-medical and computer science.
                </p>
              </div>
            </div>

            <span className="resume-edu">
              <img src={experience} alt="Experience Icon" />
              <p className="about-doing">Experience</p>
            </span>

            <div className="rem">
              <div className="resume-box">
                <h3 className="edu-name">Code Alpha</h3>
                <h4 className="edu-duration">
                  July 15th, 2024 - August 15th , 2024
                </h4>
                <p className="edu-abt">
                  Embark on a 4-week remote internship with Code Alpha as a
                  Front-End Intern. Work on exciting projects, gain hands-on
                  experience with modern front-end technologies, and collaborate
                  with a remote team. This role offers an excellent opportunity
                  to sharpen your skills in HTML, CSS, JavaScript, and
                  frameworks, while contributing to real-world applications and
                  enhancing your portfolio.
                </p>
              </div>

              <div className="resume-box">
                <h3 className="edu-name">Prodigy Infotech</h3>
                <h4 className="edu-duration">
                  July 1st, 2024 - July 31st , 2024
                </h4>
                <p className="edu-abt">
                  Gain practical experience in web development during this
                  4-week remote internship with Prodigy Infotech. Work on real
                  projects, collaborate with a remote team, and enhance your
                  skills in front-end and back-end technologies. Perfect for
                  building your portfolio and applying your knowledge in a
                  professional setting.
                </p>
              </div>
            </div>

            <div>
              <p className="about-doing">My Skills</p>
              <div className="skillsBox shadow-lg">
                <p>Web Design</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "80%",
                      backgroundColor: "hsl(54, 53%, 38%)",
                    }}
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="80"
                  >
                    80%
                  </div>
                </div>

                <p>Web Development</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "90%",
                      backgroundColor: "hsl(54, 53%, 38%)",
                    }}
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="90"
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
