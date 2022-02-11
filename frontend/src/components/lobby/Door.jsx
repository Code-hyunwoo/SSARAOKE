import Styles from "./Door.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import closedImg from "./img/closed2.PNG";
import openImg from "./img/openImg2.PNG";
import axios from "axios";
import RoomPw from "./RoomPw";
import { render } from "@testing-library/react";
// import axios from "axios";

// function Door({ thumbnail = closedImg, title, hostname, usercnt = 0, tags }) {
function Door({ thumbnail, title, user, current, tags, roomseq, isPrivate }) {
// function Door({roomdata}) {

//  alert("방번호:",roomseq);
  //room 비밀번호 입력 모달 
  const [roompwShow, setRoompwShow] = React.useState(true);

  const navigate = useNavigate();

  // 방 생성되면 created값 true로 변경
  const [created, setCreated] = useState(false);

  const [color, setColor] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState('gray');

  //썸네일 교체용
  const [thum, setThum] = useState(closedImg);
  const changethum = () => {
    if(thumbnail === null) setThum(closedImg);
  }

  //roomseq 넘기기
  const [roomNum, setRoomNum] = useState("");
  

  //join버튼 활성화
  console.log(roomseq, "out");
  //roomseq가 바뀔때마다 작동하면서 바뀌게 됨.
  useEffect(() => {
    if(roomseq !== undefined){
      console.log(roomseq, "in");
      setCreated(true);
      // setThum(thumbnail); //썸네일 생기면 이걸로 바꾸기
      setThum(openImg);
      setRoomNum(roomseq); //방 번호 변수를 바꿈.
      console.log("created true")
      console.log("New created : ", roomNum);
    };
  },[roomseq]);
  console.log("New created2 : ", roomNum);
  console.log(roomseq, "created");
  console.log(roomseq, created);
  // console.log("태그 값:1번",tags[0].tag_name);

  //태그값 tag_name만 가져오고싶어서....
  // const [tag, setTag] = useState([]);

  // const taglist = () => {
  //   for(let i=0; i<4; i++){
  //     setTag(tags[i].tag_name);
  //     console.log("태그: ",tag);
  //   }
  //   console.log("태그1: ",tag);
  // }

  // alert("원래 룸넘버:",roomseq);
  // const inputRoomN = () =>{
  //   setRoomNum(roomseq);
  // }
  // alert("바꾼 룸넘버 :", roomNum)

  //방에 들어가는 사용자 값
  const onJoinRoom= (e) => {
    if( current === 6){
      alert('방에 자리가 없습니다.');
    }
    else if (0 < current < 6){
      //비번 있을떄 없을때
      if(isPrivate === false){ //공개창일때
        //입장 가능한 방이니깐 버튼 활성화 & 버튼색 변경
        alert("비번없는 방");
        setCreated(true)
        setColor('#e9d4fa');
        setBackgroundColor('#350061da');

        alert("방번호: "+roomNum); //방번호 있는지 확인
        // alert("방제: "+title); //방제 있는지 확인
        
        //백으로 룸넘버랑 pw 빈값 보내기 => 500에러 발생
        axios({
          method: 'post',
          url: 'https://i6a306.p.ssafy.io:8080/api/v1/lobby/enter',
          data: {
            room_seq: parseInt(roomNum),
            password: "",
          },
          headers: {
            // "Content-Type": 'application/json',
            Authorization : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaXNzIjoic3NhcmFva2UiLCJleHAiOjE2NDU2MDAyMDIsImlhdCI6MTY0NDMwNDIwMn0.bAx6gwfL1Ej3u-J-Bb8Tmqf5_Eiw1UsHajGHHKPb41sxtns0Ri55jKkWvzMm9D2UJfB2dYkZGtmc0EOaEGYqWA',  // -> (헤란 토큰)승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
          }
          
        })
        .then((res) => {
          console.log(res);
        });
        // axios
        // .post('https://i6a306.p.ssafy.io:8080/api/v1/lobby/enter', { 
        //   //post로 보낼 데이터
        //   room_seq: parseInt(roomNum),
        //   password: "",
        // }
        // , {headers : { 
        //   // "Content-Type": 'application/json',
        //   // "Authorization" : token,  // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
        //   Authorization : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaXNzIjoic3NhcmFva2UiLCJleHAiOjE2NDU2MDAyMDIsImlhdCI6MTY0NDMwNDIwMn0.bAx6gwfL1Ej3u-J-Bb8Tmqf5_Eiw1UsHajGHHKPb41sxtns0Ri55jKkWvzMm9D2UJfB2dYkZGtmc0EOaEGYqWA',  // -> (헤란 토큰)승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
        // }})
        // .then((res) => {
        //   console.log(res);
        //   console.log("값 보내졌나 : ",res);
        //   alert("값 보내졌나 : "+res);
        // })
        navigate("/basic");
      }
      else if(isPrivate === true){
        //입장 가능한 방이니깐 버튼 활성화 & 버튼색 변경
        alert("비번있는 방");
        alert("방 번호: "+ roomNum);
        setCreated(true)
        setColor('#e9d4fa');
        setBackgroundColor('#350061da');
        //모달 열어야하니깐 값 true로 바꿔주고
        setRoompwShow(true)
        //모달로 연결
        render(
          <RoomPw 
            show={roompwShow} 
            onHide={() => setRoompwShow(false)} //모달 끌수있도록 -> 안먹음
            roomseq= {roomNum} //roomseq 넘기기
          />
        );
        // navigate(`/basic`);

      }
    }
  };


  //방 입장시 일단 베이직으로? 베이직으로 들어갔는데 다른 모드면? 방 생성할때 mode값도 같이 넘겨줘야하나

  return (
    <div className={Styles.roomsamecss}>
      <div hidden>{roomseq}</div>
      {/* 썸네일 */}
      <img className={Styles.video} src={thum} alt="thumbnail" />
      {/* <img className={Styles.video} src={thumbnail = closedImg} alt="thumbnail" /> */}

      {/* 방제목 */}
      <div className={Styles.roomtitle}>{title}</div>
      {/* <div className={Styles.roomtitle}>{room_seq}. {title}</div> */}

      <div className={Styles.roomgroup}>
        {/* 방장 */}
        <div className={Styles.roomuser}>{user}</div>
        {/* 방장 */}
        <div className={Styles.roomfull}>{current}/6</div>
      </div>

      {/* 방태그 */}
      <div className={Styles.tag}>
        {tags &&
          tags.map((tag) => {
            return `#${tag.tag_name} `;
          })
        }
          </div>
      {/* if문으로  */}
      {/* <Link to="/basic" className={Styles.joinlink}> */}
      <div className={Styles.joinlink}>
        <button
          id='join'
          className={Styles.joinbtn}
          // disabled가 false일때만 작동하는 조건문.
          disabled={created === false}
          // onClick={ isPrivate === false? onJoinRoom : {roompwShow}}
          onClick={onJoinRoom}
          style={{
            backgroundColor: created ? "#e9d4fa" : "gray",
            color: created ? "#350061da" : "black",
          }}
        >
          Join this room
        </button>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default Door;
