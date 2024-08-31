import React, { useState } from "react";

const TipCalculator = () => {
  const initialData = {
    bill: 0,
    selfTip: 0,
    friendTip: 0,
  };
  const [data, setData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleReset = () => {
    setData(initialData);
  };
  const tip = (data.selfTip + data.friendTip) / 2;
  const total = data.bill + tip;
  console.log(data);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>How much was the bill?</label>
        <input
          type="number"
          value={data.bill}
          onChange={(e) =>
            setData((prev) => ({ ...prev, bill: Number(e.target.value) }))
          }
        />
      </div>
      <div>
        <label>How did you like the service?</label>
        <select
          value={data.selfTip}
          onChange={(e) =>
            setData((prev) => ({ ...prev, selfTip: Number(e.target.value) }))
          }
        >
          <option value="0">Dissatisfied(0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely amazing!(20%)</option>
        </select>
      </div>
      <div>
        <label>How did you friend like the service?</label>
        <select
          value={data.friendTip}
          onChange={(e) =>
            setData((prev) => ({ ...prev, friendTip: Number(e.target.value) }))
          }
        >
          <option value="0">Dissatisfied(0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely amazing!(20%)</option>
        </select>
      </div>
      <h3>
        You pay ${total} (${data.bill} + ${tip})
      </h3>

      <button onClick={handleReset}>Reset</button>
    </form>
  );
};

export default TipCalculator;
