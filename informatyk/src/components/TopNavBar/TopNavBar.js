import styles from "./TopNavBar.module.css";

export default function TopNavBar() {
  return (
    <header>
      <nav>
        <div className={styles.TopNavBar}>
          <ul>
            <li>
              <a href="start">Start</a>
            </li>
            <li>
              <a href="inf02">INF02</a>
            </li>
            <li>
              <a href="inf03">INF03</a>
            </li>
            <li>
              <a href="oegzaminie">O egzaminie</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
