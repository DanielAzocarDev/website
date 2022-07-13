import React from "react";

// Style
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__titles">
          <h1 className="hero__titles__principal">React Developer</h1>
          <h3 className="hero__titles__principal">Daniel Azocar</h3>
        </div>

        <div className="hero__description">
          <p className="hero__description__text">
            Develop and design responsive, real-time apps with React.js. Let me
            help you build fast, powerful applications with a highly reusable
            component model that makes your business highlight from the rest.
          </p>
          <p className="hero__description__subtext">
            I have extensive experience helping clients to develop frontend
            applications for their websites and web apps using react.js
          </p>
        </div>
      </div>
    </section>
  );
};
