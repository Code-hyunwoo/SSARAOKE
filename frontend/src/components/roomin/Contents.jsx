import React from "react";
import styles from "./Button.module.css";

function Contents({ closeContents, transformDuet}) {
  return (
    <div className={styles.ChangeModeBackground}>
      <div className={styles.ChangeModeContainer}>
        <div className={styles.title}>
          <span>Contents</span>
        </div>
        <div className={styles.body2}>
          <button id={styles.modeButton2} onClick={() => {
            transformDuet();
            closeContents(false)}}>
              Dream (With 백현)
          </button>
          <button id={styles.modeButton2} onClick={() => {
            transformDuet();
            closeContents(false)}}>
             좋은날 (With 아이유)
          </button>
          <button id={styles.modeButton2} onClick={() => {
            transformDuet();
            closeContents(false)}}>
              사랑의 배터리 (With 홍진영)
          </button>
         
        </div>
        <div className={styles.footer}>
          <button id={styles.backButton} onClick={() => closeContents(false)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contents;
