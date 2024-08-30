export const validateAnswers = (userAnswers, questions) => {
    let correctCount = 0;
  
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
  
    return {
      correctCount,
      totalQuestions: questions.length,
    };
  };