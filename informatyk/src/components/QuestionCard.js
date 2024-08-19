import "../styles/QuestionCard.css";
import React from 'react';

const QuestionCard = ({ question }) => {
  const imageSource = "/inf02pyt/PE_ee08/" + question.questionImage;
  
// Dodac input i walidacje odpowiedzi

  return (
    <div className="question">
      <div className="questionCardTitle">
        {question.questionIndex}.{question.questionTitle}
      </div>
      {question.questionAnswers.map((answer, index) => (
        <div key={index} className="questionCardAnswer" id={`odp${String.fromCharCode(97 + index)}`}>
          {answer}
        </div>
      ))}
      {question.questionImage && (
        <div className="inf02Image">
          <img src={imageSource} alt="Obraz nawiązujący do pytania"/>
        </div>
      )}
    </div>
  );
};


export default QuestionCard;
