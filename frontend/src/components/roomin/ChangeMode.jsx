import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function ChangeMode({ closeChangeMode,transformBasic,transformSolo,transformDuet,transformFree }) {
  return (
    <div className={styles.ChangeModeBackground}>
      <div className={styles.ChangeModeContainer}>
        <div className={styles.title}>
          <span>Select Mode</span>
        </div>
        <div className={styles.body}>
          <button id={styles.modeButton} onClick={transformBasic}>
              Basic
          </button>
          <button id={styles.modeButton} onClick={transformFree}>
              Free
          </button>
          <button id={styles.modeButton} onClick={transformSolo}>
              Solo
          </button>
          <button id={styles.modeButton} onClick={transformDuet}>
              duet
          </button>
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
