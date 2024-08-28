const Question = ({ question, activeId, setActiveId }) => {
  const handleShowAnswer = (id) => {
    setActiveId(id === activeId ? null : id);
  };
  return (
    <div
      className="card"
      onClick={() => handleShowAnswer(question.id)}
      style={{
        background: activeId === question.id ? "red" : "transparent",
      }}
    >
      <h4>{activeId === question.id ? question.answer : question.question}</h4>
    </div>
  );
};

export default Question;
