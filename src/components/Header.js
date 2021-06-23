import React from "react";
import TypeWriter from "typewriter-effect";
import Particles from "react-particles-js";

const Header = () => {
  return (
    <div className="header-wrapper">
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
        <h1 className="my-name">Edan Sabach</h1>
        <TypeWriter
          options={{
            strings: ["Developer", "Designer", "Thinker", "Problem Solver"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Header;
