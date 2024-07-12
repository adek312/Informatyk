import data from "../inf02pyt/PE_ee08/data.json";
import "../styles/QuestionCard.css";
import QuestionRadio from "./QuestionRadio";
import React, { useState } from "react";

const QuestionCard = () => {
  const pytanie = data[0].questionTitle;
  const odpowiedz = data[0].questionAnswerCorrect;

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container">
      <form id="form40pytan" action="../odpowiedz40pytan" method="post">
        <div className="questionCard">
          <div className="questionCardTitle">
            <h2>{pytanie}</h2>
          </div>
          <div className="questionCardAnswers">
            <QuestionRadio
              name="option"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleChange}
              label={odpowiedz}
            />
            <QuestionRadio
              name="option"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleChange}
              label={odpowiedz}
            />
            <QuestionRadio
              name="option"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleChange}
              label={odpowiedz}
            />
            <QuestionRadio
              name="option"
              value="option4"
              checked={selectedOption === "option4"}
              onChange={handleChange}
              label={odpowiedz}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuestionCard;
