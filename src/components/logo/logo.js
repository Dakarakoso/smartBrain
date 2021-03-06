import React from "react";
import Tilt from "react-tilt";
import "./logo.css";
import brain from "./brain2.png";
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img alt="logo" style={{ paddingTop: "16px" }} src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
