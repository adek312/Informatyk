import data from "../../inf02pyt/PE_ee08/data.json";
import "../../styles/QuestionCard.css";

export default function QuestionCard() {
  const pytanie = data[0].questionTitle;
  const odpowiedz = data[0].questionAnswerCorrect;
  return (
    <div className="container">
      <div className="questionCard">
        <div className="questionCardTitle">
          <h2>{pytanie}</h2>
        </div>

        <div className="questionCardAnswers">
          <p>{odpowiedz}</p>
          <p>{odpowiedz}</p>
          <p>{odpowiedz}</p>
          <p>{odpowiedz}</p>
        </div>
      </div>
      <div className="questionCard">
        <div className="questionCardTitle">
          <h2>{pytanie}</h2>
        </div>

        <div className="questionCardAnswers">
          <p>{odpowiedz}</p>
          <p>{odpowiedz}</p>
          <p>{odpowiedz}</p>
          <p>{odpowiedz}</p>
        </div>
      </div>
    </div>
  );
}
