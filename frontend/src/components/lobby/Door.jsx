import Styles from "./Door.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import closedImg from "./img/closed2.PNG";
import axios from "axios";
// import axios from "axios";

// function Door({ thumbnail = closedImg, title, hostname, usercnt = 0, tags }) {
function Door({ thumbnail, title, user, current, tags, roomseq }) {
// function Door({roomdata}) {

  const navigate = useNavigate();

  // 방 생성되면 created값 true로 변경
  const [created, setCreated] = useState(false);

  const [color, setColor] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState('gray');

  //join버튼 활성화 -> 현재는 전체 다 활성화 왜지
  // ( roomseq != '' ? setCreated(true) : null);
  console.log(roomseq, "out");
  //roomseq가 바뀔때마다 작동하면서 바뀌게 됨.
  useEffect(() => {
    if(roomseq !== undefined){
      console.log(roomseq, "in");
      setCreated(true);
      console.log("created true")
    };
  },[roomseq]);
  console.log(roomseq, created);

  const roomjoinHandler = () => {
    // setCreated(true);
    // setColor('#e9d4fa');
    // setBackgroundColor('#350061da');
    
    // roomjoinHandler();
  }

  //썸네일 교체용
  const [thum, setThum] = useState('thumbnail = closedImg');

  const changethum = () => {

  }

  //방에 들어가는 사용자 값
  const onJoinRoom= (e) => {
    if( current == 6){
      alert('방에 자리가 없습니다.');
    }
    else if (0 < current < 6){
      //비번 있을떄 없을때
      setCreated(true)
      setColor('#e9d4fa');
      setBackgroundColor('#350061da');
    // const res = axios
      axios
      .post('https://i6a306.p.ssafy.io:8080/api/v1/lobby/enter', { 
        //post로 보낼 데이터
        room_seq: roomseq,
        // password: ''
      }
      , {headers : { 
        "Content-Type": 'application/json',
        // "Authorization" : token,  // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
        "Authorization" : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaXNzIjoic3NhcmFva2UiLCJleHAiOjE2NDU2MDAyMDIsImlhdCI6MTY0NDMwNDIwMn0.bAx6gwfL1Ej3u-J-Bb8Tmqf5_Eiw1UsHajGHHKPb41sxtns0Ri55jKkWvzMm9D2UJfB2dYkZGtmc0EOaEGYqWA',  // -> (헤란 토큰)승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
      }})
      .then((res) => {
        console.log(res);
        navigate(`/basic`);
      })
    }
    
  };


  //방 입장시 일단 베이직으로? 베이직으로 들어갔는데 다른 모드면? 방 생성할때 mode값도 같이 넘겨줘야하나

  return (
    <div className={Styles.roomsamecss}>
      <div hidden>{roomseq}</div>
      {/* <img className={Styles.video} src={roomdata.thumbnail} alt="thumbnail" /> */}
      {/* <img className={Styles.video} src={roomdata.thumnail_url} alt="thumbnail" /> */}
      <img className={Styles.video} src={thumbnail = closedImg} alt="thumbnail" />

      {/* <div className={Styles.roomtitle}>{roomdata.title}</div> */}
      <div className={Styles.roomtitle}>{title}</div>
      {/* <div className={Styles.roomtitle}>{room_seq}. {title}</div> */}
      {/* 1. 방제목 */}

      <div className={Styles.roomgroup}>
        {/* <div className={Styles.roomuser}>{roomdata.owner_nicname}</div> */}
        {/* <div className={Styles.roomuser}>{hostname}</div> */}
        <div className={Styles.roomuser}>{user}</div>
        {/* <div className={Styles.roomfull}>{roomdata.current}/8</div> */}
        {/* <div className={Styles.roomfull}>{usercnt}/8</div> */}
        <div className={Styles.roomfull}>{current}/6</div>
      </div>

      <div className={Styles.tag}>
        {tags &&
          tags.map((tag) => {
            return ` #${tag}`;
          })}
          {/* #{tags[0].tag_name} #{tags[1].tag_name} #{tags[2].tag_name} #{tags[3].tag_name}  */}
        
      </div>
      <Link to="/basic" className={Styles.joinlink}>
      {/* <div className={Styles.joinlink}> */}
        <button
          id='join'
          className={Styles.joinbtn}
          // disabled가 false일때만 작동하는 조건문.
          disabled={created === false}
          onClick={onJoinRoom}
          style={{
            backgroundColor: created ? "#e9d4fa" : "gray",
            color: created ? "#350061da" : "black",
          }}
        >
          Join this room
        </button>
      {/* </div> */}
      </Link>
    </div>
  );
}

export default Door;
