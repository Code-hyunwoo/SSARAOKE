import React from 'react';
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function ChangeMode ({closeChangeMode}){

        
    return (
        <div className={styles.ChangeModeBackground}>
         <div className={styles.ChangeModeContainer}>
            <div className={styles.title}>
                <span>Select Mode</span>
            </div>
            <div className={styles.body}>
                <button id={styles.modeButton}><Link to='/basic' id={styles.modeLink}> Basic </Link></button>
                <button id={styles.modeButton}><Link to='/free' id={styles.modeLink}> Free </Link></button>
                <button id={styles.modeButton}><Link to='/solo' id={styles.modeLink}> Solo </Link></button>
                <button id={styles.modeButton}><Link to='/duet' id={styles.modeLink}> duet </Link></button>
            </div>
            <div className={styles.footer}>
                <button id={styles.backButton} onClick={() => closeChangeMode(false)}>Back</button>
            </div>
        </div>
        </div>
    );
};


export default ChangeMode
