import React from "react";

const NumberButton = (props) => {

  // let newNumber = props.numbers;
  // console.log(newNumber);

  let clickFunc = () => props.numbersDisplay(props.numbers);
  return (
    <>
    <button className="number_button" onClick={clickFunc} >
       {props.numbers}
    </button>
    </>
  );
};

export default NumberButton;



// Display a button element rendering the data being passed down from the parent container on props 