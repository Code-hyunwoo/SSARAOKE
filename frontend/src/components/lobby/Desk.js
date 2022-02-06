// import React from 'react';
// import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Styles from "./Desk.module.css"

// function Desk() {
//     // const onClick = () => {
//     //     // window.location.replace("/components/lobby/CreateRoom")
//     //     document.location.href("/CreateRoom")
//     // };
//     return(
//         // <Link to = "/CreateRoom">
//             <button className={Styles.btn}>방 생성</button>
//         // </Link>
//             // <button onClick={onClick}>방 생성</button>
//     )
// }
// export default Desk;

import Styles from "./Lobby.module.css";
import Dstyles from "./Desk.module.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function Desk() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setcheckedTags(new Set());
  };
  const handleShow = () => setShow(true);

  const [checkedTags, setcheckedTags] = useState(new Set());
  const [bChecked, setChecked] = useState(false);

  const checkedTagsHandler = (value, isChecked) => {
    if (isChecked) {
      checkedTags.add(value);
      setcheckedTags(checkedTags);
      // console.log(checkedTags);
    } else if (!isChecked && checkedTags.has(value)) {
      checkedTags.delete(value);
      setcheckedTags(checkedTags);
    }
  };

  const checkHandler = ({ target }) => {
    // console.log(target)
    setChecked(target.bChecked);
    // console.log(target.bChecked)
    checkedTagsHandler(target.value, target.checked);
    if (checkedTags.size === 5) {
      alert(`태그는 최대 4개까지 선택할 수 있습니다.`);
      checkedTags.delete(target.value);
      setcheckedTags(checkedTags);
      console.log(checkedTags);
      target.checked = false;
    }
  };

  return (
    <>
      <button className={Styles.btn} variant="secondary" onClick={handleShow}>
        Create Room
      </button>
      <div className={Styles.btnimg}>
        <img
          src={"https://cdn-icons-png.flaticon.com/512/1700/1700765.png"}
          className={Styles.btnimg2}
          alt="Mic Icon"
        />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        // keyboard={false}
        // className={Dstyles.modalContent} //화면 전체 노랑
      >
        {/* 모달창만 해당하는 부분 */}
        <div className={Dstyles.modposi}>
          <div className={Dstyles.createroombg}>
            <Modal.Header closeButton>
              <div className={Dstyles.createtitle}>노래방 생성</div>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className={Dstyles.roomtitle}>방 제목 : </div>
                <input type={"text"} className={Dstyles.titleinput} />
              </div>

              <div>
                <div className={Dstyles.roomtype}>방 타입 :</div>
                <div className={Dstyles.typeB}>
                  <input
                    type="radio"
                    name="mode"
                    value="Basic"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp;Basic(8인)
                </div>
                <div className={Dstyles.typeF}>
                  <input
                    type="radio"
                    name="mode"
                    value="Free"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp;Free(8인)
                </div>
                <div className={Dstyles.typeS}>
                  <input
                    type="radio"
                    name="mode"
                    value="Solo"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp;Solo(8인)
                </div>
                <div className={Dstyles.typeD}>
                  <input
                    type="radio"
                    name="mode"
                    value="Duet"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp;Duet(8인)
                </div>
              </div>

              <div>
                <div className={Dstyles.roomtag}>태그 : </div>
                <div className={Dstyles.roomtag2}>(최대 4개) </div>
                <div className={Dstyles.tagB}>
                  <input
                    type="checkbox"
                    name="song"
                    value="ballad"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #발라드
                </div>
                <div className={Dstyles.tagH}>
                  <input
                    type="checkbox"
                    name="song"
                    value="hiphop"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #힙합
                </div>
                <div className={Dstyles.tagQ}>
                  <input
                    type="checkbox"
                    name="song"
                    value="rock"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #ROCK
                </div>
                <div className={Dstyles.tagT}>
                  <input
                    type="checkbox"
                    name="song"
                    value="trot"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #트로트
                </div>
                <div className={Dstyles.tagP}>
                  <input
                    type="checkbox"
                    name="song"
                    value="pop"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #팝
                </div>

                <div className={Dstyles.tagW}>
                  <input
                    type="checkbox"
                    name="song"
                    value="k-pop"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #K-POP
                </div>
                <div className={Dstyles.tagZ}>
                  <input
                    type="checkbox"
                    name="song"
                    value="r&b"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #R&B
                </div>
                <div className={Dstyles.tagX}>
                  <input
                    type="checkbox"
                    name="song"
                    value="dance"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #댄스
                </div>
                <div className={Dstyles.tagC}>
                  <input
                    type="checkbox"
                    name="song"
                    value="indie"
                    checked={bChecked}
                    onChange={(e) => {
                      checkHandler(e);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp; #인디
                </div>
                <div className={Dstyles.tag7080}>
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
                <div className={Dstyles.tag1990}>
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
                <div className={Dstyles.tag2000}>
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
                <div className={Dstyles.tag2010}>
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
                <div className={Dstyles.tag2020}>
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
                <div className={Dstyles.roomFC}>공개여부 : </div>
                <div className={Dstyles.roomFree}>
                  <input
                    type="radio"
                    name="public"
                    value="open"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp;공개
                </div>
                <div className={Dstyles.roomclose}>
                  <input
                    type="radio"
                    name="public"
                    value="close"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  &nbsp;비공개
                  <input
                    type="password"
                    name="roompw"
                    placeholder="password"
                    className={Dstyles.roompw}
                  />
                  {/* </div>
                <div > */}
                </div>
              </div>
              <div>
                <button className={Dstyles.btn}>만들기</button>
              </div>
            </Modal.Body>
            {/* <Modal.Footer > */}
            {/* <div>
              <Button className={Dstyles.btn} >만들기</Button>
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
