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

import Styles from "./Lobby.module.css"
import Dstyles from "./Desk.module.css"
import { render } from "@testing-library/react";
import { useState } from "react";
import { Button, Modal, Ratio } from "react-bootstrap";

function Desk() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
      <>
        <button className={Styles.btn} variant="secondary" onClick={handleShow}>
          <h2>방 생성</h2>
        </button>
  
        <Modal
          show={show}
          onHide={handleClose}
          // backdrop="static"
          keyboard={false}
          // className={Dstyles.modalContent} //화면 전체 노랑
        >
          {/* 모달창만 해당하는 부분 */}
          <div className={Dstyles.createroombg}>
            <Modal.Header closeButton >
              <div className={Dstyles.createtitle}>노래방 생성</div>
            </Modal.Header>
            <Modal.Body >
              <div>
                <div className={Dstyles.roomtitle}>방 제목 : </div>
                <input type={"text"} className={Dstyles.titleinput}/>
              </div>
              
              <div>
                <div className={Dstyles.roomtype}>
                  방 타입 :
                </div>
                <div className={Dstyles.typeB}>
                <input 
                    type="radio" 
                    name="mode" 
                    value="Basic"
                    style={{width:"20px", height:"20px" }} 
                  /> &nbsp;Basic(8인)
                </div>
                <div className={Dstyles.typeF}>
                <input 
                    type="radio" 
                    name="mode" 
                    value="Free"
                    style={{width:"20px", height:"20px" }} 
                  /> &nbsp;Free(8인)
                </div>
                <div className={Dstyles.typeS}>
                  <input 
                    type="radio" 
                    name="mode" 
                    value="Solo"
                    style={{width:"20px", height:"20px" }} 
                  /> &nbsp;Solo(8인)
                </div>
                <div className={Dstyles.typeD}>
                  <input 
                    type="radio" 
                    name="mode" 
                    value="Duet"
                    style={{width:"20px", height:"20px" }} /> &nbsp;Duet(8인)
                </div>
              </div>

              <div>
                <div className={Dstyles.roomtag}>태그 : </div>
                <div className={Dstyles.tagB}>
                  <input 
                  type="checkbox" 
                  name="song" 
                  value="ballade"
                  style={{width:"20px", height:"20px" }} 
                  /> &nbsp; #발라드
                </div>
                <div className={Dstyles.tagH}>
                  <input 
                    type="checkbox" 
                    name="song" 
                    value="hiphop" 
                    style={{width:"20px", height:"20px" }} 
                    /> &nbsp;#힙합
                </div>
                <div className={Dstyles.tagT}>
                  <input 
                    type="checkbox" 
                    name="song" 
                    value="trot" 
                    style={{width:"20px", height:"20px" }} 
                    /> &nbsp;#트로트 
                </div>
                <div className={Dstyles.tagP}>
                  <input 
                    type="checkbox" 
                    name="song" 
                    value="popsong" 
                    style={{width:"20px", height:"20px" }} 
                    /> &nbsp;#팝송
                </div>
              </div>
              
              <div>
                <div className={Dstyles.roomFC}>공개여부 : </div>
                <div className={Dstyles.roomFree}>
                  <input 
                    type="radio" 
                    name="public" 
                    value="open" 
                    style={{width:"20px", height:"20px" }} 
                  /> &nbsp;공개 
                </div>
                <div className={Dstyles.roomclose}>
                  <input 
                    type="radio" 
                    name="public" 
                    value="close" 
                    style={{width:"20px", height:"20px" }} 
                    /> &nbsp;비공개 
                </div>
                <div >
                  <input 
                    type="password" 
                    name="roompw" 
                    placeholder="password" 
                    className={Dstyles.roompw}
                  />
                </div>
              </div>
              {/* <div>
              <Button className={Dstyles.btn} >만들기</Button>
              </div> */}
            </Modal.Body>
            {/* <Modal.Footer > */}
              <div>
              <Button className={Dstyles.btn} >만들기</Button>
              </div>
            {/* </Modal.Footer> */}
          </div>
        </Modal>
      </>
    );
  }
  
//   render(<Desk />);

  export default Desk;