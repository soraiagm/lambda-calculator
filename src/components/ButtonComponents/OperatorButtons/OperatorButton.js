import React from "react";

const OperatorButton = (props) => {

  let newOperator = props.operator.char;
  console.log(newOperator)
  let clickFunc = () => props.displayOperator(newOperator);

  return (
    <>
    <button className="operator_button" onClick={clickFunc} >
        {props.operator.char}
    </button>
    </>
  );
};

export default OperatorButton;

/* Display a button element rendering the data being passed down from the parent container on props */
