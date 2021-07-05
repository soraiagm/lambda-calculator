import React from "react";
// import { operators } from '../../../data';
import OperatorButton from "./OperatorButton.js";

const Operators = (props) => {
  // const [operatorsState] = useState(operators);
  
  return (
    <div className="operators_container">
      {
        props.operatorsState.map((operator, index) => (
          <OperatorButton key={index} operator={operator}
          operatorsDisplay={props.changeDisplay} />
        ))
      }
    </div>
  );
};

export default Operators;


/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
