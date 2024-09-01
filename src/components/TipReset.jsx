import React from "react";

const TipReset = ({ onReset }) => {
  return (
    <button style={{ height: "50px", width: "130px" }} onClick={onReset}>
      Reset
    </button>
  );
};

export default TipReset;
