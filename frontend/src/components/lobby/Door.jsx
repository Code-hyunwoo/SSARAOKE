import Styles from "./Door.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import closedImg from "./img/closed2.PNG";
import axios from "axios";

function Door({ thumbnail = closedImg, title, hostname, usercnt = 0, tags }) {
// function Door({roomdata}) {
  // 방 생성되면 created값 true로 변경
  const [created, setCreated] = useState(false);

  // const Roomdata = () => {
  //   const [roomdata, setRoomdata] = useState([]);

  //   useEffect(() => { 
  //     axios.get('http://i6a306.p.ssafy.io:8080/api/v1/lobby')
  //          .then(response => {
  //           setRoomdata(response.data);
  //           console.log(response.data);
  //          });
  //   }, []);
  // }

  //방 입장시 일단 베이직으로? 베이직으로 들어갔는데 다른 모드면? 방 생성할때 mode값도 같이 넘겨줘야하나

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
