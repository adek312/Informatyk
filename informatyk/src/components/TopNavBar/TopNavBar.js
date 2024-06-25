import styles from "./TopNavBar.module.css";

export default function TopNavBar() {
  return (
    <header>
      <nav>
        <div className={styles.TopNavBar}>
          <ul>
            <a href="start">
              <li>Start</li>
            </a>
            <a href="inf02">
              <li>INF02</li>
            </a>
            <a href="inf03">
              <li>INF03</li>
            </a>
            <a href="oegzaminie">
              <li>O Egzaminie</li>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
}
