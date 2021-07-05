import React from "react";

const SpecialButton = (props) => {

  let newSpecial = props.special;
  console.log(newSpecial);

  let clickFunc = () => props.specialsDisplay(newSpecial);
  return (
    <>
    <button className="special_button" onClick={clickFunc}>
        {props.special}
    </button>
    </>
  );
};

export default SpecialButton;


/* Display a button element rendering the data being passed down from the parent container on props */