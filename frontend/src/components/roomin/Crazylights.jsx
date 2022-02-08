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
      {/* <div className={styles.glowing}>
        <span id={styles.light1}></span>
        <span id={styles.light2}></span>
        <span id={styles.light3}></span>
        </div>
        <div className={styles.glowing}>
        <span id={styles.light1}></span>
        <span id={styles.light2}></span>
        <span id={styles.light3}></span>
        </div> */}
    </div>
  );

  //   <span style="--i:1;"></span>
  //   <span style="--i:2;"></span>
  //   <span style="--i:3;"></span>
}

export default Crazylights;
