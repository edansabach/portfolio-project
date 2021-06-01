import React from "react";
import TypeWriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="header-wrapper">
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
