import Styles from "./Door.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import closedImg from "./img/closed2.PNG";

function Door({ thumbnail = closedImg, title, hostname, usercnt = 0, tags }) {
// function Door({roomdata}) {
  // 방 생성되면 created값 true로 변경
  const [created, setCreated] = useState(false);

  return (
    <div className={Styles.roomsamecss}>
      {/* <img className={Styles.video} src={roomdata.thumbnail} alt="thumbnail" /> */}
      {/* <img className={Styles.video} src={roomdata[6]} alt="thumbnail" /> */}
      <img className={Styles.video} src={thumbnail} alt="thumbnail" />

      {/* <div className={Styles.roomtitle}>{roomdata[7]}</div> */}
      <div className={Styles.roomtitle}>{title}</div>

      <div className={Styles.roomgroup}>
        {/* <div className={Styles.roomuser}>{roomdata[2]}</div> */}
        <div className={Styles.roomuser}>{hostname}</div>
        {/* <div className={Styles.roomfull}>{roomdata[0]}/8</div> */}
        <div className={Styles.roomfull}>{usercnt}/8</div>
      </div>

      <div className={Styles.tag}>
        {tags &&
          tags.map((tag) => {
            return ` #${tag}`;
          })}
      </div>
      <Link to="/basic" className={Styles.joinlink}>
        <button
          className={Styles.joinbtn}
          disabled={created === false}
          style={{
            backgroundColor: created ? "#e9d4fa" : "gray",
            color: created ? "#350061da" : "black",
          }}
        >
          Join this room
        </button>
      </Link>
    </div>
  );
}

export default Door;
