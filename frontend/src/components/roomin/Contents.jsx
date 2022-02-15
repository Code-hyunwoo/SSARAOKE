import React from "react";
import styles from "./Button.module.css";

function Contents({ closeContents, transformDuet, setstartDream, setstartGoodDay}) {

  
  return (
    <div className={styles.ChangeModeBackground}>
      <div className={styles.ChangeModeContainer}>
        <div className={styles.title}>
          <span>Contents</span>
        </div>
        <div className={styles.body2}>
          <button id={styles.modeButton2} onClick={() => {
            transformDuet();
            closeContents(false);
            setstartDream(true);
            }}>
              Dream (With 백현)
          </button>
          <button id={styles.modeButton2} onClick={() => {
            transformDuet();
            closeContents(false);
            setstartGoodDay(true);
            }}>
             좋은날 (With 아이유)
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
