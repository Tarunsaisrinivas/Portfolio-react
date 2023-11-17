import React from "react";
import CircularProgressBar from "./CircularProgressBar";
import "../Styles/Navbar.css";
import Fade from 'react-reveal/Fade';

const Skills = () => {
  return (
    <>
      <div className="containerskill">
        <div className="skillContainer1">
          <Fade bottom>
          <div id="Skills">
            <h1> Skills</h1>
          </div>
          <div className="skillspagecontainer text-center" >
          <div className="skillsPage">
            <div className="per ">
              <CircularProgressBar style={{ width: "100px" }} percentage={100} />
              <h3>HTML</h3>
            </div>
            <div className="per ">
              <CircularProgressBar percentage={100} />
              <h3>CSS</h3>
            </div>
            <div className="per ">
              <CircularProgressBar percentage={60} />
              <h3>JAVASCRIPT</h3>
            </div>

            <div className="per ">
              <CircularProgressBar percentage={60} />
              <h3>REACT JS</h3>
            </div>
            <div className="per ">
              <CircularProgressBar percentage={30} />
              <h3>REACT NATIVE</h3>
            </div>
          </div>
          </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Skills;
