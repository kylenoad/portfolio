import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import NavButton from "./NavButton";

const Hero = () => {
  const heroText = "Hello, I'm Kyle. \nI'm a junior developer.";
  const [text, setText] = useState("");
  const typingSpeed = 100;
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < heroText.length) {
        setText((prevText) => prevText + heroText.charAt(indexRef.current));
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []); 

  return (
    <section id="hero">
      <div className="hero-content">
        <h1 id="hero-text" className="text">
          {text.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h1>
        <NavButton />
      </div>
    </section>
  );
};

export default Hero;
