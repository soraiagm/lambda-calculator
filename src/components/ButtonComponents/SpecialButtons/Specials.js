import React from "react";
// import { specials } from '../../../data';
import SpecialButton from "./SpecialButton.js";

const Specials = (props) => {
  //  const [specialsState] = useState(specials);
  
  return (
    <div className="specials_container">
      {
        props.specialsState.map((special, index) => (
          <SpecialButton key={index} special={special} 
          specialsDisplay={props.changeDisplay} />
        ))
      }
    </div>
  );
};

export default Specials;

// STEP 2 - add the imported data to state

/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
