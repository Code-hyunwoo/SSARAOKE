import React from 'react';
import styles from "./Button.module.css";


function ChangeMode ({closeChangeMode}){

        
    return (
        <div className={styles.ChangeModeBackground}>
         <div className={styles.ChangeModeContainer}>
            <div className={styles.title}>
                <span>Select Mode</span>
            </div>
            <div className={styles.body}>
                <button id={styles.modeButton}> Basic </button>
                <button id={styles.modeButton}> Free </button>
                <button id={styles.modeButton}> Solo </button>
                <button id={styles.modeButton}> Duet </button>
            </div>
            <div className={styles.footer}>
                <button id={styles.backButton} onClick={() => closeChangeMode(false)}>Back</button>
            </div>
        </div>
        </div>
    );
};


export default ChangeMode