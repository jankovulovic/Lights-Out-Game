import React, { useState } from "react";
import LightsOutGuide from "./LightGameGuide";

import "./Button.css";

const Button = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    window.location.reload();
  };

  return (
    <div className="btn-div">
      <div>
        <button
          className={`button ${clicked ? "clicked" : ""}`}
          onClick={handleClick}
        >
          {clicked ? "Restarting..." : "Restart"}
        </button>
      </div>
      <LightsOutGuide />
    </div>
  );
};

export default Button;
