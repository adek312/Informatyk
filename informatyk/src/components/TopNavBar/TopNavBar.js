import styles from "./TopNavBar.module.css";

export default function TopNavBar() {
  return (
    <header>
      <nav>
        <div className={styles.TopNavBar}>
          <ul>
            <li>
              <a href="strona">Start</a>
            </li>
            <li>
              <a href="strona">INF02</a>
            </li>
            <li>
              <a href="strona">INF03</a>
            </li>
            <li>
              <a href="strona">O egzaminie</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
