import React from "react";
import "./NavButton.css";

const NavButton = () => {
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className="navbutton" onClick={scrollToAbout}>
      View my Projects
    </button>
  );
};

export default NavButton;