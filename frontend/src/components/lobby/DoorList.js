import Door from "./Door";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./DoorList.module.css";
import CreateRoom from "./CreateRoom";
import duet from "./img/duet.jpg";

function DoorList() {
  return (
    <>
      <CreateRoom />
      <div className={styles.gridcontainer}>
        <Door />
        <Door />
      </div>
      <div className={styles.gridcontainer}>
        <Door />
        <div className={styles.griditem}>
          <Door />
          <Door />
        </div>
        <Door />
      </div>
      <div className={styles.gridcontainer}>
        <Door />
        <div className={styles.griditem}>
          <Door />
          <Door />
        </div>
        <Door />
      </div>
      <div className={styles.gridcontainer}>
        <Door />
        <div className={styles.griditem}>
          <Door />
          <Door />
        </div>
        <Door />
      </div>
      <div className={styles.gridcontainer}>
        <Door />
        <div className={styles.griditem}>
          <Door />
          <Door />
        </div>
        <Door />
      </div>
    </>
  );
}

export default DoorList;
