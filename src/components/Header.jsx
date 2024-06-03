import React from "react";
import headshot from "../assets/media/headshot.jpeg";
import CanvasBackground from "./CanvasBackground";

const Header = () => {
  return (
    <header id="home" className="header-background">
      <CanvasBackground />
      <div
        className="picture-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <img src={headshot} alt="profile" />
      </div>
      <p className="intro-text" style={{ position: "relative", zIndex: 1 }}>
        Hello, I'm Eduardo. I have a B.S. in Computer Science from California
        State University Fullerton. My most recent work experience was as a
        Research Assistant with the department of Computer Science at CSUF.
        Working with ReactJS, Django, OpenAI's GPT API, and Amazon Polly.
      </p>
      <div className="social-icons" style={{ position: "relative", zIndex: 1 }}>
        <a
          href="https://github.com/eddayyy"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <iconify-icon
            icon="line-md:github"
            className="github-icon"
          ></iconify-icon>
        </a>
        <a
          href="https://www.linkedin.com/in/eduardong"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <iconify-icon
            href="https://www.linkedin.com/in/eduardong"
            icon="line-md:linkedin"
            className="linkedin-icon"
          ></iconify-icon>
        </a>
      </div>
    </header>
  );
};

export default Header;
