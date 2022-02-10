import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function ChangeMode({ closeChangeMode }) {
  return (
    <div className={styles.ChangeModeBackground}>
      <div className={styles.ChangeModeContainer}>
        <div className={styles.title}>
          <span>Select Mode</span>
        </div>
        <div className={styles.body}>
          <Link to="/basic" id={styles.modeLink}>
            <button id={styles.modeButton}> Basic </button>
          </Link>
          <Link to="/free" id={styles.modeLink}>
            <button id={styles.modeButton}> Free </button>
          </Link>
          <Link to="/solo" id={styles.modeLink}>
            <button id={styles.modeButton}> Solo </button>
          </Link>
          <Link to="/duet" id={styles.modeLink}>
            <button id={styles.modeButton}> duet </button>
          </Link>
        </div>
        <div className={styles.footer}>
          <button id={styles.backButton} onClick={() => closeChangeMode(false)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangeMode;
