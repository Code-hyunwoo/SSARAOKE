import React from "react";
import styles from "./Button.module.css";

function ChangeMode({ closeChangeMode,sendChangeModeB,sendChangeModeF,sendChangeModeS,sendChangeModeD }) {
  return (
    <div className={styles.ChangeModeBackground}>
      <div className={styles.ChangeModeContainer}>
        <div className={styles.title}>
          <span>Select Mode</span>
        </div>
        <div className={styles.body}>
          <button id={styles.modeButton} onClick={() => {
            sendChangeModeB();
            closeChangeMode(false)}}>
              Basic
          </button>
          <button id={styles.modeButton} onClick={() => {
            sendChangeModeF();
            closeChangeMode(false)}}>
              Free
          </button>
          <button id={styles.modeButton} onClick={() => {
            sendChangeModeS();
            closeChangeMode(false)}}>
              Solo
          </button>
          <button id={styles.modeButton} onClick={() => {
            sendChangeModeD();
            closeChangeMode(false)}}>
              Duet
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
