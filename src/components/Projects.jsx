import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1>My Projects</h1>
      <div className="project-item">
        <img
          className="small-project-image"
          src="/assets/f1_buddy.jpg"
          alt="F1 Buddy app image"
        />
        <div className="project-details">
          <p>
            Formula 1 Buddy is a React Native app that delivers live data from
            Formula 1 races, solving my frustration of limited on-screen
            information. Built out of my love for Formula 1, the app provides
            real-time race statistics to keep users informed throughout the
            event. It is currently a work in progress, and I am actively adding
            new features to enhance the experience.
          </p>
          <button
            className="proj-button"
            onClick={() =>
              window.open(
                "https://github.com/kylenoad/formula-one-RN",
                "_blank"
              )
            }
          >
            View GitHub Repository
          </button>
        </div>
      </div>
      <div className="project-item">
        <img src="/assets/frame_of_mind_2.png" alt="Frame of mind app image" />
        <div className="project-details">
          <p>
            Developed as part of a group project, Frame of Mind is a creative
            storytelling app that allows users to collaboratively create comics.
            Users can work individually or join forces with others to bring
            their stories to life. The app is built with Next.js for the
            frontend and Firebase for the backend, providing a seamless platform
            for comic creation and sharing.
          </p>
          <button
            className="proj-button"
            onClick={() =>
              window.open("https://github.com/kylenoad/frame-of-mind", "_blank")
            }
          >
            View GitHub Repository
          </button>
        </div>
      </div>
      <div className="project-item">
        <img src="/assets/KN_News.png" alt="KN News app image" />
        <div className="project-details">
          <p>
            The project is a dynamic and responsive frontend that allows users
            to browse, interact with, and engage with a database of articles,
            users, topics, and comments. The application provides an intuitive
            user interface for reading news articles, upvoting content, and
            posting or deleting comments. Built using React.
          </p>
          <button
            className="proj-button"
            onClick={() =>
              window.open("https://github.com/kylenoad/kn-news", "_blank")
            }
          >
            View GitHub Repository
          </button>
        </div>
      </div>
      <div className="project-item">
        <img src="/assets/KN_News_API.png" alt="KN news backend image" />
        <div className="project-details">
          <p>
            The project is a RESTful API backend that enables users to interact
            with a database of articles, users, topics, and comments. This API
            provides various endpoints that allow users to perform CRUD (Create,
            Read, Update, Delete) operations on the data, with additional
            sorting and filtering functionality. The API is built using
            JavaScript, Node.js, Express, and PostgreSQL
          </p>
          <button
            className="proj-button"
            onClick={() =>
              window.open("https://github.com/kylenoad/nc_news", "_blank")
            }
          >
            View GitHub Repository
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
