import React from "react";

const TipMessage = ({ total, bill, tip }) => {
  return (
    <>
      {total > 0 && (
        <h3>
          You pay ${total} (${bill} + ${tip} tip) 
        </h3>
      )}
    </>
  );
};

export default TipMessage;
