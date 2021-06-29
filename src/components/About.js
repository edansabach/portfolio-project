import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 1, x: 2000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="about-background">
        <div className="container-fluid about-section">
          <div className="row">
            <div className="col">
              <h1 className="text-center py-5">
                about<span style={{ color: "#61dafb" }}>Me</span>
              </h1>
              <p className="text-center pb-5 about-details">
                Front-End engineer with knowledge in both client and server-side
                development to create dynamic websites and web applications.
                Currently focusing on client-side development leveraging my
                knowledge in JavaScript ES6+ and modern tools like React.js or
                Angular, providing cutting-edge user interfaces and optimal
                performance across all browsers. Agile and team-oriented with a
                passion for continuous learning, best code practices, and
                problem-solving.
              </p>
            </div>
          </div>
        </div>
        <div className="row fixed-bottom">
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: 25 }} />
          </button>
          <button className="btn btn-success">
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 25 }} />
          </button>
          <button className="btn btn-secondary">Twitch.tv/yone-1-trick</button>
          <button className="btn btn-info">Celsius Chug</button>
        </div>
      </section>
    </motion.section>
  );
};

export default About;
