import "../styles/QuestionCard.css";
import React from 'react';

const QuestionCard = ({ question, index, handleAnswer }) => {
  return (
    <div className="questionCard">
      <div className="questionCardTitle">
        <h2>{question.questionTitle}</h2>
      </div>
      <ul>
        {question.questionAnswers.map((option,i) => (
          <li key={i}>
            <button onClick={() => handleAnswer(question.id, option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
