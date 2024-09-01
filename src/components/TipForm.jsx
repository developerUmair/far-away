import React from "react";
import TipFormLabel from "./TipFormLabel";
import TipSelectBox from "./TipSelectBox";

const TipForm = ({ data, setData, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <TipFormLabel>How much was the bill?</TipFormLabel>
        <input
          type="number"
          value={data.bill}
          onChange={(e) =>
            setData((prev) => ({ ...prev, bill: Number(e.target.value) }))
          }
        />
      </div>
      <div>
        <TipFormLabel>How did you like the service?</TipFormLabel>
        <TipSelectBox
          value={data.selfTip}
          onChange={(e) =>
            setData((prev) => ({ ...prev, selfTip: Number(e.target.value) }))
          }
        />
      </div>
      <div>
        <TipFormLabel>How did you friend like the service?</TipFormLabel>
        <TipSelectBox
          value={data.friendTip}
          onChange={(e) =>
            setData((prev) => ({ ...prev, friendTip: Number(e.target.value) }))
          }
        />
      </div>
    </form>
  );
};

export default TipForm;
