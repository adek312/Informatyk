import styles from "./MainContent.module.css";

function MainContent() {
  return (
    <section>
      <div className={styles.MainContent}>
        <div className={styles.MainContentHeader}>
          <h2>Egzamin Teoretyczny</h2>
          <div />
          <div className={styles.MainContentDescription}>
            <p>
              Wybierz kwalifikacje i zacznij naukę do teorii.<br></br>
              Więcej informacji o egzaminie teoretycznym:{" "}
              <a href="strona">tutaj</a>
              {/* Dodac do linku od razu scroll do sekcji egzamin teoria */}
            </p>
            <img src="https://via.placeholder.com/150" alt="INF02"></img>
            <img src="https://via.placeholder.com/150" alt="INF03"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
