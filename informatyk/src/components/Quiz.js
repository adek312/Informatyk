// src/components/Quiz.js
import React, { useState } from 'react';
import questions from "../inf02pyt/PE_ee08/data.json";
import QuestionCard from './QuestionCard.js';

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="quiz">
      {questions.map((question, index) => (
        <QuestionCard
          key={question.id}
          question={question}
          index={index}
          handleAnswer={handleAnswer}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;
