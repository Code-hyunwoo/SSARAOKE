import styles from "./CreateRoom.module.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Desk() {
  //모달 실행
  const [show, setShow] = useState(false);

  //모달 종료시, 값들 리셋
  const handleClose = () => {
    setShow(false);
    setcheckedTags(new Set());
    setRoomTitle("");
    setSelected("");
    setOpended("");
    setRoompw("");
  };
  const handleShow = () => setShow(true);

  //tag 값 받아오기
  const [checkedTags, setcheckedTags] = useState(new Set());
  const [bChecked, setChecked] = useState(false); //체크가 되었는지 여부를 위한 함수. 기본 F -비워져있음.

  const checkedTagsHandler = (value, isChecked) => {
    // value = 각 태그들의 value, 체크되면
    if (isChecked) {
      //체크되면
      checkedTags.add(value); //set()에 그 value를 넣음.
      setcheckedTags(checkedTags); //4개를 체크하면 그 4개가 들어감. checkedTags을 나중에 백에 전송할때 쓰면 됨.
      // console.log(checkedTags);
    } else if (!isChecked && checkedTags.has(value)) {
      checkedTags.delete(value);
      setcheckedTags(checkedTags);
    }
  };

  //tag 값 4개만 받아오도록 하는 함수.
  const checkHandler = ({ target }) => {
    //체크하는 순간 실행
    // console.log(target)
    setChecked(target.bChecked); //체크되어서 T가 된다.
    // console.log(target.bChecked)
    checkedTagsHandler(target.value, target.checked); //내가 클릭한 값, 내가 클릭한 값의 체크 여부(bchecked) set()함수에 넣고
    if (checkedTags.size === 5) {
      //set()함수에 4개를 넘으면
      alert(`태그는 최대 4개까지 선택할 수 있습니다.`);
      checkedTags.delete(target.value); //아까 들어간 값을 삭제
      setcheckedTags(checkedTags); //남은 4개가 다시 set()의 값
      console.log(checkedTags);
      target.checked = false; //그 빠진 값을 다시 T에서 F로 되돌린다.(체크되어있는 상태를 풀어주는것. set에서는 이미 빠졌고)
    }
  };

  // 객체 업데이트를 위해 useState안에 객체를 사용
  // 현재값   , 변경할 값       =  초기값
  // 방제 가져오기
  const [roomTitle, setRoomTitle] = useState("");
  const getTitle = (e) => {
    // console.log(e.target); //이벤트가 발생한 타겟의 요소 출력
    // console.log(e.target.value); //이벤트가 발생한 타겟의 value를 출력
    setRoomTitle(e.target.value); //이게 이제 roomTitle을 이 값으로 지정한 것.
    console.log(roomTitle); //한글자 칠때마다 콘솔이 우수수 찍힘
  };

  // 모드 값 가져오기 - radio버튼이기에 한번에 하나만 체크됨.
  const [selected, setSelected] = useState("");
  const checkedModeHandler = (e) => {
    setSelected(e.target.value);
    console.log(selected);
  };
  //값을 바꾸는 것은 onChange!!!

  //방 타입 -> checkedTags를 가져오면 됨. 이미 만들어 주셨음. 굿!
  //set으로는 백 전달 불가. 변경해줘야
  //1. 배열로 변경
  //2. 값 보내기 전에 set을 []로 변경하여 보내기
  const arrcheckedTags = Array.from(checkedTags);
  // console.log('배열:', arrcheckedTags);

  //방 공개 여부 -boolean으로
  const [opened, setOpended] = useState(false);

  // const roomopenHandler = ({target}) => {
  //     setOpended(target.opened);
  //     console.log(opened);
  // }

  let value = true;
  const roomopenHandler = (e) => {
    if (typeof e.target.value === "string") {
      e.target.value === "false" ? (value = false) : (value = true);
    }
    console.log(value);
  };
  //   const roomopenHandler = (e) => {
  //     setOpended(e.target.value);
  //     console.log(selected);
  // }

  //비밀번호 -> 비공개방으로 설정하면 비밀번호를 필로 넣도록 설정
  const [roompw, setRoompw] = useState("");
  const getRoompw = (e) => {
    setRoompw(e.target.value);
    console.log(roompw);
  };

  //방 생성 버튼을 누르면, 선택된 값들을 보내기 위해 & 방장 정보도 보내야
  const navigate = useNavigate(); //생성된 방으로 보내기 위해

  //헤더에 토큰을 넣어서 보내는 역할
  const onCreateRoom = (e) => {
    if (value === true && roompw === "") {
      e.preventDefault();
      alert(`비밀번호를 입력해 주세요`);
    } else if (value === false || (value === true && roompw !== "")) {
      // const res = axios
      axios
        .post(
          "https://i6a306.p.ssafy.io:8080/api/v1/lobby",
          {
            //post로 보낼 데이터
            title: roomTitle,
            tags: arrcheckedTags,
            // mode: selected,
            // is_private: opened,
            // Private: opened,
            isPrivate: value,
            password: roompw,
          },
          {
            headers: {
              "Content-Type": "application/json",
              // "Authorization" : token,  // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaXNzIjoic3NhcmFva2UiLCJleHAiOjE2NDU2MDAyMDIsImlhdCI6MTY0NDMwNDIwMn0.bAx6gwfL1Ej3u-J-Bb8Tmqf5_Eiw1UsHajGHHKPb41sxtns0Ri55jKkWvzMm9D2UJfB2dYkZGtmc0EOaEGYqWA", // -> (헤란 토큰)승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
            },
          }
        )
        .then((res) => {
          console.log(res);
          navigate(`/${selected}`);
        });
    }
    // navigate(`/${selected}`)
  };

  return (
    <>
      <div className={styles.btngroup}>
        <button
          className={styles.btnCreate}
          variant="secondary"
          onClick={handleShow}
        >
          Create Room
        </button>
        <img
          src={"https://cdn-icons-png.flaticon.com/512/1700/1700765.png"}
          className={styles.btnimg}
          alt="Mic Icon"
        />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        // keyboard={false}
        // className={styles.modalContent} //화면 전체 노랑
      >
        {/* 모달창만 해당하는 부분 */}
        <div className={styles.modposi}>
          <div className={styles.createroombg}>
            <Modal.Header closeButton>
              <div className={styles.createtitle}>노래방 생성</div>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className={styles.roomtitle}>방 제목 : </div>
                <input
                  type={"text"}
                  className={styles.titleinput}
                  onChange={getTitle}
                  name="title"
                />
              </div>

              <div>
                <div className={styles.roomtype}>방 타입 :</div>
                <div className={styles.typeB}>
                  <input
                    type="radio"
                    name="mode"
                    value="Basic"
                    checked={selected === "Basic"}
                    onChange={checkedModeHandler}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp;Basic(6인)
                </div>
                <div className={styles.typeF}>
                  <input
                    type="radio"
                    name="mode"
                    value="Free"
                    checked={selected === "Free"}
                    onChange={checkedModeHandler}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp;Free(6인)
                </div>
                <div className={styles.typeS}>
                  <input
                    type="radio"
                    name="mode"
                    value="Solo"
                    checked={selected === "Solo"}
                    onChange={checkedModeHandler}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp;Solo(6인)
                </div>
                <div className={styles.typeD}>
                  <input
                    type="radio"
                    name="mode"
                    value="Duet"
                    checked={selected === "Duet"}
                    onChange={checkedModeHandler}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp;Duet(6인)
                </div>
              </div>

              <div>
                <div className={styles.roomtag}>태그 : </div>
                <div className={styles.roomtag2}>(최대 4개) </div>
                <div className={styles.tagB}>
                  <input
                    type="checkbox"
                    name="song"
                    value="발라드"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #발라드
                </div>
                <div className={styles.tagH}>
                  <input
                    type="checkbox"
                    name="song"
                    value="힙합"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #힙합
                </div>
                <div className={styles.tagQ}>
                  <input
                    type="checkbox"
                    name="song"
                    value="ROCK"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #ROCK
                </div>
                <div className={styles.tagT}>
                  <input
                    type="checkbox"
                    name="song"
                    value="트로트"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #트로트
                </div>
                <div className={styles.tagP}>
                  <input
                    type="checkbox"
                    name="song"
                    value="팝"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #팝
                </div>

                <div className={styles.tagW}>
                  <input
                    type="checkbox"
                    name="song"
                    value="K-POP"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #K-POP
                </div>
                <div className={styles.tagZ}>
                  <input
                    type="checkbox"
                    name="song"
                    value="R&B"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #R&B
                </div>
                <div className={styles.tagX}>
                  <input
                    type="checkbox"
                    name="song"
                    value="댄스"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #댄스
                </div>
                <div className={styles.tagC}>
                  <input
                    type="checkbox"
                    name="song"
                    value="인디"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #인디
                </div>
                <div className={styles.tag7080}>
                  <input
                    type="checkbox"
                    name="song"
                    value="7080"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #7080
                </div>
                <div className={styles.tag1990}>
                  <input
                    type="checkbox"
                    name="song"
                    value="1990"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #1990
                </div>
                <div className={styles.tag2000}>
                  <input
                    type="checkbox"
                    name="song"
                    value="2000"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #2000
                </div>
                <div className={styles.tag2010}>
                  <input
                    type="checkbox"
                    name="song"
                    value="2010"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #2010
                </div>
                <div className={styles.tag2020}>
                  <input
                    type="checkbox"
                    name="song"
                    value="2020"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #2020
                </div>
              </div>

              <div>
                <div className={styles.roomFC}>공개여부 : </div>
                <div className={styles.roomFree}>
                  <input
                    type="radio"
                    name="public"
                    value="false"
                    // value="open"
                    // checked={opened == 'open'}
                    // checked={opened}
                    // onChange={(e) => {roomopenHandler(e)}}
                    onChange={roomopenHandler}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp;공개
                </div>
                <div className={styles.roomclose}>
                  <input
                    type="radio"
                    name="public"
                    value="true"
                    // value="close"
                    // checked={opened == 'close'}
                    // checked={opened}
                    // onChange={(e) => {roomopenHandler(e)}}
                    onChange={roomopenHandler}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp;비공개
                  <input
                    type="password"
                    name="roompw"
                    placeholder="password"
                    onChange={getRoompw}
                    className={styles.roompw}
                  />
                  {/* </div>
                <div > */}
                </div>
              </div>
              <div>
                {/* <button className={styles.btn} >만들기</button> */}
                <button className={styles.btn} onClick={onCreateRoom}>
                  만들기
                </button>
              </div>
            </Modal.Body>
            {/* <Modal.Footer > */}
            {/* <div>
              <Button className={styles.btn} >만들기</Button>
              </div> */}
            {/* </Modal.Footer> */}
          </div>
        </div>
      </Modal>
    </>
  );
}

//   render(<Desk />);

export default Desk;
