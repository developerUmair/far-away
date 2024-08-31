import React, { useState } from "react";
import { data } from "../../data/data";
import "../accordion.css";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [activeId, setActiveId] = useState(null);

  const handleToggleItem = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      <div className="container">
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            onToggleItem={handleToggleItem}
            item={item}
            activeId={activeId}
          >{item.text}</AccordionItem>
        ))}
      </div>
    </>
  );
};

export default Accordion;
