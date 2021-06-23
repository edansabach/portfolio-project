import React from "react";
import aboutLogo from "../services-char.svg";

const About = () => {
  return (
    <section>
      <div className="row">
        <div className="col-6">
          <img src={aboutLogo} alt="services image" />
        </div>
        <div className="col-6">
          <h1>Hello</h1>
        </div>
      </div>
    </section>
  );
};

export default About;
