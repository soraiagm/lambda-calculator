import React from "react";
import { tsPropertySignature } from "@babel/types";

const Display = (props) => {
  return <div className="display">
      <p className="display_number">
        {props.display}
      </p>
  </div>;
};

export default Display;
