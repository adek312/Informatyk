import styles from "./MainContent.module.css";

function MainContent() {
  return (
    <section>
      <div className={styles.MainContent}>
        <div className={styles.MainContentHeader}>
          <h2>Egzamin Teoretyczny</h2>
          <div />
          <div className={styles.MainContentDescription}>
            <div className={styles.MainContentDescriptionText}>
              <p>
                Wybierz kwalifikacje i zacznij naukę do teorii.<br></br>
                Więcej informacji o egzaminie teoretycznym znajdziesz:{" "}
                <a href="strona"><span style={{color: "#58A4B0"}}>tutaj</span></a>
                {/* Dodac do linku od razu scroll do sekcji egzamin teoria */}
              </p>
            </div>
            <div className={styles.MainContentDescriptionImage}>
              <img src="https://via.placeholder.com/350" alt="INF02"></img>
              <img src="https://via.placeholder.com/350" alt="INF03"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
