import styles from "./Room.module.css";

function Crazylights() {
  return (
    <div className={styles.crazylights}>
      <div className={styles.glowing}>
        <span id={styles.light1}></span>
        <span id={styles.light2}></span>
        <span id={styles.light3}></span>
      </div>
      <div className={styles.glowing}>
        <span id={styles.light1}></span>
        <span id={styles.light2}></span>
        <span id={styles.light3}></span>
      </div>
      <div className={styles.glowing}>
        <span id={styles.light1}></span>
        <span id={styles.light2}></span>
        <span id={styles.light3}></span>
      </div>
      <div className={styles.glowing}>
        <span id={styles.light1}></span>
        <span id={styles.light2}></span>
        <span id={styles.light3}></span>
      </div>
    </div>
  );
}

export default Crazylights;
