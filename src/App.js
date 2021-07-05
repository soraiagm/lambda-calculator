import React, {useState} from "react";
import { numbers } from './data';
import { operators } from './data';
import { specials } from './data';
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers.js";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials.js";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators.js";
import "./App.css";

import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";

function App() {
  // state being passed down 
  let [displayValue, setDisplayValue] = useState(0);
  const [numbersState] = useState(numbers);
  const[operatorsState] = useState(operators);
  const [specialsState] = useState(specials);

  // functions to pass to components
  const numbersDisplay = (value) => 
  (setDisplayValue(displayValue = value));

  const operatorsDisplay = (value) => 
  (setDisplayValue(displayValue = value));

  const specialsDisplay = (value) => 
  (setDisplayValue(displayValue = value));

  return (
    <div className="container">
            <Logo />
          { <Display displayValue={displayValue} /> }
      <div className="App">
      <div className="specials_numbers_container">
          { <Specials changeDisplay={specialsDisplay} specialsState={specialsState} /> }
          { <Numbers changeDisplay={numbersDisplay} numbersState={numbersState} /> }
      </div>
      <div className="operators_container">
          { <Operators changeDisplay={operatorsDisplay} operatorsState={operatorsState} /> }
      </div>
      </div> 
    </div>
  );
}

export default App;


// STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
