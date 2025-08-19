import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h1>Contact</h1>
      <h3>
        Feel free to get in touch via LinkedIn or check out my work on GitHub
      </h3>
      <div className="contact-logos">
        <a
          href="https://linkedin.com/in/kyle-noad/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/LI-Logo.png" alt="LinkedIn Logo" width="200" />
        </a>
        <a
          href="https://github.com/kylenoad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/GitHub_Logo_White.png"
            alt="GitHub Logo"
            width="200"
          />
        </a>
      </div>
      <p className="cv-link">
        You can{" "}
        <a
          href="/assets/Kyle_Noad_CV - website.pdf"
          onClick={() => {
            gtag("event", "download", {
              event_category: "CV",
              event_label: "Kyle Noad CV",
            });
          }}
        >
          download my CV here
        </a>
      </p>
    </div>
  );
};

export default Contact;
