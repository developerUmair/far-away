import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ onAddItem }) => {
  const initialData = {
    description: "",
    quantity: 1,
  };
  const [data, setData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: uuidv4(), ...data, packed: false };
    onAddItem(newItem);
    setData(initialData);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip ?</h3>
      <select
        value={data.quantity}
        required
        onChange={(e) =>
          setData((prevData) => ({
            ...prevData,
            quantity: Number(e.target.value),
          }))
        }
      >
        <option selected>Select</option>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={data.description}
        // onChange={(e) => setDescription(e.target.value)}
        onChange={(e) =>
          setData((prevData) => ({
            ...prevData,
            description: e.target.value,
          }))
        }
        required
        placeholder="item..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
