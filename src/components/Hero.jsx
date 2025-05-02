import React, { useState, useEffect } from "react";
import "./Hero.css";
import NavButton from "./NavButton";

const Hero = () => {
  const heroText = "Hello, I'm Kyle. \nI'm a junior developer.";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const typingSpeed = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < heroText.length) {
        setText((prevText) => prevText + heroText.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [index, heroText]);

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
