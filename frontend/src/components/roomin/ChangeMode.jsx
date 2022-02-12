import React from "react";
import styles from "./Button.module.css";

function ChangeMode({ closeChangeMode,transformBasic,transformSolo,transformDuet,transformFree }) {
  return (
    <div className={styles.ChangeModeBackground}>
      <div className={styles.ChangeModeContainer}>
        <div className={styles.title}>
          <span>Select Mode</span>
        </div>
        <div className={styles.body}>
          <button id={styles.modeButton} onClick={() => {
            transformBasic();
            closeChangeMode(false)}}>
              Basic
          </button>
          <button id={styles.modeButton} onClick={() => {
            transformFree();
            closeChangeMode(false)}}>
              Free
          </button>
          <button id={styles.modeButton} onClick={() => {
            transformSolo();
            closeChangeMode(false)}}>
              Solo
          </button>
          <button id={styles.modeButton} onClick={() => {
            transformDuet();
            closeChangeMode(false)}}>
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
