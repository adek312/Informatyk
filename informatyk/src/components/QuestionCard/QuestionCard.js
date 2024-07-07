import data from "../../inf02pyt/PE_ee08/data.json";
import styles from "./QuestionCard.module.css";

export default function QuestionCard() {
  const pytanie = data[0].questionTitle;
  const odpowiedz = data[0].questionAnswerCorrect;
  return (
    <div className={styles.container}>
      <div className={styles.questionCard}>
        <div className={styles.questionCardTitle}>
          <h2>{pytanie}</h2>
        </div>

        <div className={styles.questionCardAnswers}>
          <p>{odpowiedz}</p>
          <p>{odpowiedz}</p>
          <p>{odpowiedz}</p>
          <p>{odpowiedz}</p>
        </div>
      </div>
      <div className={styles.questionCard}>
        <div className={styles.questionCardTitle}>
          <h2>{pytanie}</h2>
        </div>

        <div className={styles.questionCardAnswers}>
          <p>{odpowiedz}</p>
          <p>{odpowiedz}</p>
          <p>{odpowiedz}</p>
          <p>{odpowiedz}</p>
        </div>
      </div>
    </div>
  );
}
