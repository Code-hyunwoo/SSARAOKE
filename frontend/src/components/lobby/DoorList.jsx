import Door from "./Door";
import styles from "./DoorList.module.css";
import CreateRoom from "./CreateRoom";

function DoorList() {
  // Door.js에서 map쓸거면 선택한 태그(tags)를 배열로 받아와야함
  // OR 객체로 받아와서 배열로 변환
  const tags = [];
  return (
    <>
      <CreateRoom />
      <div className={styles.gridcontainer}>
        <Door tags={tags} />
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
