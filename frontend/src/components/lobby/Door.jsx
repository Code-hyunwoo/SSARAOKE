/* eslint-disable react-hooks/rules-of-hooks */
import Styles from "./Door.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import closedImg from "./img/closed2.PNG";
import openImg3 from "./img/openImg3.png";
import lock2 from "./img/lock2.png";
import axios from "axios";
import RoomPw from "./RoomPw";
import { render } from "@testing-library/react";
import { connect } from "react-redux";
import swal from "sweetalert2";

function Door({
  thumbnail,
  title,
  user,
  current,
  tags,
  roomseq,
  isPrivate,
  mode,
  state,
}) {

  const [roompwShow, setRoompwShow] = useState(false);
  //창 닫는 함수
  const closePwmodal = () => {
    setRoompwShow(false);
  };

  //방 이동
  const navigate = useNavigate();

  // 방 생성되면 created값 true로 변경
  const [created, setCreated] = useState(false);

  //썸네일 교체용
  const [thum, setThum] = useState(closedImg);
  const changethum = () => {
    if (thumbnail === null) setThum(closedImg);
  };

  const [tagColor, setTagColor] = useState([]);

  //roomseq 넘기기 -> join버튼 활성화되면 값 들어감.
  const [roomNum, setRoomNum] = useState("");

  //join버튼 활성화
  //roomseq가 바뀔때마다 작동하면서 바뀌게 됨.
  useEffect(() => {
    if (roomseq !== undefined) {
      setCreated(true);
      if (isPrivate === false) {
        setThum(openImg3);
      } else {
        setThum(lock2);
      }
      setRoomNum(roomseq); //방 번호 변수를 바꿈.
    }
  }, [roomseq]);

  //방이 꽉찬 경우
  const roomPull = () => {
    swal
      .fire({
        text: "방 정원이 초과되었습니다.",
        icon: "warning",
        confirmButtonColor: "#73E0C1",
        confirmButtonText: "확인",
      })
      .then((result) => {
        console.log("sweetalert", result);
      });
  };

  //방에 들어가는 사용자 값
  const onJoinRoom = (e) => {
    if (current === 6) {
      roomPull();
    } else if (0 < current < 6) {
      if (isPrivate === false) {
        //공개창일때
        //입장 가능한 방이니깐 버튼 활성화 & 버튼색 변경
        setCreated(true);


        //백으로 룸넘버랑 pw 빈값 보내기 => 500에러 발생
        axios({
          method: "post",
          url: "https://i6a306.p.ssafy.io:8080/api/v1/lobby/enter",
          data: {
            room_seq: parseInt(roomNum),
            password: "",
          },
          headers: {
            Authorization: state[0].token,
          },
        }).then((res) => {
        });
        
        navigate(`/Room/${mode}/${roomNum}`);
      }
      
    }
  };

  return (
    <div className={Styles.roomsamecss}>
      <div hidden>{roomseq}</div>
      <img className={Styles.video} src={thum} alt="thumbnail" />

      <div className={Styles.roomtitle}>{title}</div>

      <div className={Styles.roomgroup}>
        <div className={Styles.roomuser}>{user}</div>
        <div className={Styles.roomfull}>{current}/6</div>
      </div>

      <div className={Styles.tag}>
        {tags &&
          tags.map((tag) => {
            if (tag.tag_name === "발라드") {
              return <h style={{ color: "#F9B208" }}>#{tag.tag_name} </h>;
            } else if (tag.tag_name === "R&B") {
              return <h style={{ color: "#FFDA1A" }}>#{tag.tag_name} </h>;
            } else if (tag.tag_name === "K-POP") {
              return <h style={{ color: "#73E0C1" }}>#{tag.tag_name} </h>;
            } else if (tag.tag_name === "힙합") {
              return <h style={{ color: "#F2789F" }}>#{tag.tag_name} </h>;
            } else if (tag.tag_name === "팝") {
              return <h style={{ color: "#F999B7" }}>#{tag.tag_name} </h>;
            } else if (tag.tag_name === "트로트") {
              return <h style={{ color: "#19F62F" }}>#{tag.tag_name} </h>;
            } else if (tag.tag_name === "인디") {
              return <h style={{ color: "#FFF89A" }}>#{tag.tag_name} </h>;
            } else if (tag.tag_name === "ROCK") {
              return <h style={{ color: "#32C1CD" }}>#{tag.tag_name} </h>;
            } else if (tag.tag_name === "댄스") {
              return <h style={{ color: "#F9C5D5" }}>#{tag.tag_name} </h>;
            } else if (tag.tag_name === "7080") {
              return <h style={{ color: "#9EFFB9" }}>#{tag.tag_name} </h>;
            } else if (tag.tag_name === "1990") {
              return <h style={{ color: "#B983FF" }}>#{tag.tag_name} </h>;
            } else if (tag.tag_name === "2000") {
              return <h style={{ color: "#94B3FD" }}>#{tag.tag_name} </h>;
            } else if (tag.tag_name === "2010") {
              return <h style={{ color: "#94DAFF" }}>#{tag.tag_name} </h>;
            } else if (tag.tag_name === "2020") {
              return <h style={{ color: "#99FEFF" }}>#{tag.tag_name} </h>;
            }
          })}
      </div>
      <div className={Styles.joinlink}>
        {isPrivate === false ? (
          <button
            id="join"
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
        ) : (
          <button
            id="join"
            className={Styles.joinbtn}
            disabled={created === false}
            onClick={() => setRoompwShow(true)}
            style={{
              backgroundColor: created ? "#e9d4fa" : "gray",
              color: created ? "#350061da" : "black",
            }}
          >
            Join this room
          </button>
        )}
        <RoomPw
          show={roompwShow}
          onHide={closePwmodal} 
          roomseq={roomNum} 
          state={state}
          mode={mode}
        />
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, null)(Door);
