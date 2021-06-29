import React from "react";
import TypeWriter from "typewriter-effect";
import Particles from "react-particles-js";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="header-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 3,
                color: "#61dafb",
              },
            },
          },
        }}
      />
      <div className="main-info">
        <motion.h1
          className="my-name"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Edan Sabach
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <TypeWriter
            options={{
              strings: ["Developer", "Designer", "Thinker", "Problem Solver"],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
