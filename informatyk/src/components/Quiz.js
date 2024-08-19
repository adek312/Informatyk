// src/components/Quiz.js
import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard.js";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Wczytanie danych z pliku JSON
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="quiz">
      {questions.map((question, index) => (
        <QuestionCard key={index} question={question} />
      ))}
    </div>
  );

};

export default Quiz;
