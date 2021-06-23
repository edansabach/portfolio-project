import React from "react";
import aboutLogo from "../services-char.svg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -250 }}
      animate={{ opacity: 1, x: -1 }}
      transition={{ duration: 1 }}
    >
      <div className="row">
        <div className="col-6">
          <img src={aboutLogo} alt="services" />
        </div>
        <div className="col-6">
          <h1>Hello</h1>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
