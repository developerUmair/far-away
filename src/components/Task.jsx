import React, { useState } from "react";
import { reactQuestions } from "../../data/data";
import "../task.css";
import Question from "./Question";

const Task = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="task-container">
      {reactQuestions.map((question) => (
        <Question question={question} key={question.id} activeId={activeId} setActiveId={setActiveId} />
      ))}
    </div>
  );
};

export default Task;
