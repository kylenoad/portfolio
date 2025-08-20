import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h1 style={{marginTop: "22px"}}>About</h1>
        <p>
          I began self-teaching JavaScript before completing structured training
          at Northcoders, where I developed my knowledge of JavaScript, React,
          Node.js, PostgreSQL, Jest and Express. Through hands-on projects, I've
          developed full-stack applications and gained experience working with
          APIs, databases, and front-end frameworks.
        </p>
        <p>
          Before transitioning into tech, I spent 12 years in television
          documentary production, specializing in science, engineering, and
          history. I’ve written, produced, and directed for BBC, National
          Geographic, Channel 4, and Discovery
        </p>
        <h2 style={{ marginTop: "65px", marginBottom: "35px" }}>Technologies which I work with</h2>
        <img
          src="/assets/javascript-original.svg"
          alt="Javascript logo"
          width="100"
          height="100"
          style={{ padding: "2px" }}
        />
         <img
          src="/assets/typescript_logo_2020.svg"
          alt="Typescript logo"
          width="100"
          height="100"
          style={{ padding: "2px" }}
        />
          <img
          src="/assets/python-logo-only.svg"
          alt="Python logo"
          width="100"
          height="100"
          style={{ padding: "2px" }}
        />
        <img
          src="/assets/react-original.svg"
          alt="React logo"
          width="100"
          height="100"
          style={{ padding: "2px" }}
        />
        <img
          src="/assets/git.png"
          alt="Git logo"
          width="100"
          height="100"
          style={{ padding: "2px" }}
        />
        <img
          src="/assets/react_native.png"
          alt="React Native logo"
          width="100"
          height="100"
          style={{ padding: "2px" }}
        />
        <img
          src="/assets/nodejs.png"
          alt="Node.js logo"
          width="160"
          height="100"
          style={{ padding: "2px" }}
        />
        <img
          src="/assets/postgresql-original.svg"
          alt="PSQL logo"
          width="100"
          height="100"
          style={{ padding: "2px" }}
        />
        <img
          src="/assets/jest-plain.svg"
          alt="Jest logo"
          width="100"
          height="100"
          style={{ padding: "2px" }}
        />
      </div>
    </section>
  );
};

export default About;
