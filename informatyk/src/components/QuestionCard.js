import "../styles/QuestionCard.css";
import React from "react";

const QuestionCard = ({ question }) => {
  const imageSource = "/inf02pyt/PE_ee08/" + question.questionImage;
  // walidacja odpowiedzi + cały div ma być klikalny
  
  return (
    <div className="question">
      <div className="questionCardTitle">
        {question.questionIndex}.{" " + question.questionTitle}
      </div>
      {question.questionAnswers.map((answer, index) => (
        <div
          key={index}
          className="questionCardAnswer"
          id={`odp${String.fromCharCode(97 + index)}`}
        >
          <label>
            <input
              type="checkbox"
              className={"ansa" + question.questionIndex}
              name={"ansa" + question.questionIndex}
              value={
                `${String.fromCharCode(97 + index)}` + question.questionIndex
              }
            />
            <strong>{answer.slice(0, 3)}</strong>
            {answer.slice(3)}
          </label>
        </div>
        
      ))}
      {question.questionImage && (
        <div className="inf02Image">
          <img src={imageSource} alt="Obraz nawiązujący do pytania" />
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
