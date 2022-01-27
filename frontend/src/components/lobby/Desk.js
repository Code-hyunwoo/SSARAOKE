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

import Styles from "./Desk.module.css"
import { render } from "@testing-library/react";
import { useState } from "react";
import { Button, Modal, Ratio } from "react-bootstrap";

function Desk() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
      <>
        <Button className={Styles.btn} variant="secondary" onClick={handleShow}>
          방 생성
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>방 생성</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            방 제목 : <input /> <br/><br/>
            {/* 방 타입 : <radio>Basic(8인)</radio> <radio>Solo(8인)</radio> */}
            방 타입 : <br/>
            <input type="radio" name="mode" value="Basic" /> Basic(8인) &nbsp;&nbsp;
            <input type="radio" name="mode" value="Free" /> Free(8인)<br/>
            <input type="radio" name="mode" value="Solo" /> Solo(8인) &nbsp;&nbsp;&nbsp;
            <input type="radio" name="mode" value="Duet" /> Duet(8인)<br/><br/>
            태그 : <br/>
            <input type="checkbox" name="song" value="ballade" /> #발라드 &nbsp;&nbsp;
            <input type="checkbox" name="song" value="hiphop" /> #힙합<br/>
            <input type="checkbox" name="song" value="trot" /> #트로트 &nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="song" value="popsong" /> #팝송<br/><br/>
            공개여부 : <br />
            <input type="radio" name="public" value="open" /> 공개 &nbsp;&nbsp;
            <input type="radio" name="public" value="close" /> 비공개 <input type="password" name="roompw" value="roompw" placeholder="password" /><br/>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger">paly!!</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
//   render(<Desk />);

  export default Desk;