// src/components/Quiz.js
import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard.js";
import { validateAnswers } from '../utils/validateAnswers.js';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  // const [userAnswers, setUserAnswers] = useState({});
  // const [result, setResult] = useState(null);

  useEffect(() => {
    // Wczytanie danych z pliku JSON
    const fetchData = async () => {
      try {
        const response = await fetch('/dataTest.json');
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
    <div id="quiz" className="quiz">
    <form id="egzamin" >
      {questions.map((question, index) => (
        <QuestionCard key={index} question={question} />
      ))}

      <button type="submit">Submit</button>
      </form>
    </div>
  );

};

export default Quiz;
