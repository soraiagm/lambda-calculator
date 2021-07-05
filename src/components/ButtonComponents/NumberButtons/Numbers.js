import React from "react";
// import { numbers } from '../../../data';
import NumberButton from "./NumberButton.js";


const Numbers = (props) => {
  // const [numbersState] = useState(numbers);

  return (
    <div className="numbers_container">
      {
        props.numbersState.map((numbers, index) => (
          <NumberButton key={index} numbers={numbers}
          numbersDisplay={props.changeDisplay} />
        )) 
       }
    </div>
  );
};

export default Numbers;


//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/