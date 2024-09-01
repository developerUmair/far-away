import React, { useState } from "react";
import TipForm from "./TipForm";
import TipMessage from "./TipMessage";
import TipReset from "./TipReset";

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
  const tip = ((data.selfTip + data.friendTip) / 2 / 100) * data.bill;
  const total = data.bill + tip;
  console.log(data);
  return (
    <>
      <TipForm data={data} setData={setData} onSubmit={handleSubmit} />
      <TipMessage total={total} bill={data.bill} tip={tip} />
      <TipReset onReset={handleReset} />
    </>
  );
};

export default TipCalculator;
