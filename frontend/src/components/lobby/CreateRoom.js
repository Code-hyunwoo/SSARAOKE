import styles from "./CreateRoom.module.css";
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
        <div className={styles.createroombg}>
          <Modal.Header closeButton>
            <div className={styles.createtitle}>노래방 생성</div>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className={styles.roomtitle}>방 제목 : </div>
              <input type={"text"} className={styles.titleinput} />
            </div>

            <div>
              <div className={styles.roomtype}>방 타입 :</div>
              <div className={styles.typeB}>
                <input
                  type="radio"
                  name="mode"
                  value="Basic"
                  style={{ width: "20px", height: "20px" }}
                />{" "}
                &nbsp;Basic(8인)
              </div>
              <div className={styles.typeF}>
                <input
                  type="radio"
                  name="mode"
                  value="Free"
                  style={{ width: "20px", height: "20px" }}
                />{" "}
                &nbsp;Free(8인)
              </div>
              <div className={styles.typeS}>
                <input
                  type="radio"
                  name="mode"
                  value="Solo"
                  style={{ width: "20px", height: "20px" }}
                />{" "}
                &nbsp;Solo(8인)
              </div>
              <div className={styles.typeD}>
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
                  value="open"
                  style={{ width: "20px", height: "20px" }}
                />{" "}
                &nbsp;공개
              </div>
              <div className={styles.roomclose}>
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
                  className={styles.roompw}
                />
                {/* </div>
                <div > */}
              </div>
            </div>
            <div>
              <button className={styles.btn}>만들기</button>
            </div>
          </Modal.Body>
          {/* <Modal.Footer > */}
          {/* <div>
              <Button className={styles.btn} >만들기</Button>
              </div> */}
          {/* </Modal.Footer> */}
        </div>
      </Modal>
    </>
  );
}

//   render(<Desk />);

export default Desk;
