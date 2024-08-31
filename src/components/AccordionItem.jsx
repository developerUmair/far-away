import React, { Children } from "react";

const AccordionItem = ({ item, onToggleItem, activeId, children }) => {
  const isOpen = activeId === item.id;
  return (
    <div
      className={`parent ${isOpen ? "active" : ""}`}
      onClick={() => onToggleItem(item.id)}
    >
      <div className="header">
        <div className="title">{item.title}</div>
        <div className={`icon `}>{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && <div className="description">{children}</div>}
    </div>
  );
};

export default AccordionItem;
