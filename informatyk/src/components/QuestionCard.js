import "../styles/QuestionCard.css";
import React from "react";

// walidacja odpowiedzi + tylko 1 odpowiedz zaznaczona

const QuestionCard = ({ question }) => {
  
  const imageSource = "/inf02pyt/PE_ee08/" + question.questionImage;

  // Entire answer is clickable
  const handleClick = (event) => {
    if (event.target.tagName !== "INPUT" && event.target.tagName !== "LABEL") {
      event.currentTarget.querySelector("input").click();
    }
  };
  

  return (
    <div className="question">
      <div className="questionCardTitle">
        {question.questionIndex}.{" " + question.questionTitle}
      </div>
      {question.questionAnswers.map((answer, index) => (
        <div
          key={index}
          className={"questionCardAnswer"}
          id={`odp${String.fromCharCode(97 + index)}`}
          onClick={handleClick}
        >
          <label style={{cursor: "pointer"}}>
            <input style={{cursor: "pointer"}}
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
