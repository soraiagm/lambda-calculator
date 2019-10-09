import React from "react";

const Display = (props) => {
  return <div className="display">
      <p className="display_number">
        {props.display}
      </p>
  </div>;
};

export default Display;
