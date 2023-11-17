import React from "react";
import NavBar from "./Navbar";
import "../Styles/Navbar.css";
import Button from "react-bootstrap/Button";
import hero from "../assets/hero.png";
import Typewriter from "typewriter-effect";
import Skills from "./Skills";
import Fade from 'react-reveal/Fade';

const Home = () => {

  return (
    <>

      <header id="about" className="HomeContainer" style={{ height: "100vh" }}>
        <Fade left>
        <div className="left">
          <h1>
            Hi,I am <br />
            Tarun Sai Srinivas{" "}
          </h1>
          <div className="typing">
            <h2>
              I am{" "}
              <Typewriter
                className="typeWriter"
                options={{
                  strings: ["Frontend Developer", "Programmer"],
                  autoStart: true,

                  loop: true,
                }}
              />
            </h2>
            <p style={{fontSize:18}}>
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </p>
          </div>
        </div>
        {/* right */}
        <div className="right">
          <div className="myself">
            <img src={hero} alt="" width={300} />
          </div>
        </div>

        <Button
          className="button1"
          href="https://drive.google.com/file/d/1PLT2Vzt7DNjzoghESeRlZbnOWVm0KZYx/view?usp=drive_link"
          target="_blank"
        >
          Check Resume
        </Button>
        </Fade>
      </header>
      
      <Skills />
      
    </>
  );
};

export default Home;
