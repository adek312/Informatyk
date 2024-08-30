import "../styles/QuestionCard.css";
import React, { useState } from "react";
// walidacja odpowiedzi

const QuestionCard = ({ question }) => {
  const imageSource = "/inf02pyt/PE_ee08/" + question.questionImage;
  const staticClassName = "ansa" + question.questionIndex;

  // Entire answer is clickable
  const handleClick = (event) => {
    if (event.target.tagName !== "INPUT" && event.target.tagName !== "LABEL") {
      event.currentTarget.querySelector("input").click();
    }
  };

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const handleChange = (index) => {
    setSelectedAnswerIndex(index === selectedAnswerIndex ? null : index);
  };

  return (
        <div className="question">
          <div className="questionCardTitle">
            {question.questionIndex}.{" " + question.questionTitle}
          </div>
          {question.questionAnswers.map((answer, index) => (
            <div
              key={index}
              className={`questionCardAnswer ${
                selectedAnswerIndex === index ? "odpChecked" : ""
              }`}
              id={`odp${String.fromCharCode(97 + index)}`}
              onClick={handleClick}
            >
              <label for={staticClassName}>
                <input
                  type="checkbox"
                  className={staticClassName}
                  name={staticClassName}
                  value={
                    `${String.fromCharCode(97 + index)}` +
                    question.questionIndex
                  }
                  checked={selectedAnswerIndex === index}
                  onChange={() => handleChange(index)}
                />
                <strong>{answer.slice(0, 3)}</strong>
                <span>{answer.slice(3)}</span>
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
