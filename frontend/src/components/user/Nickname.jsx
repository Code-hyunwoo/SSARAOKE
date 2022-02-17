import axios from "axios";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import Styles from "./Mypage.module.css";
import swal from "sweetalert2";

function Nickname({ show, onHide, state, DispatchmodifyNickname }) {
  //변경할 닉네임값 받아오기
  const [newnickname, setNewnickname] = useState("");
  const getNickname = (e) => {
    setNewnickname(e.target.value);
  };

  //동일 닉네임 입력 경고창
  const sameNickname = () => {
    swal
      .fire({
        title: "동일 닉네임이 존재합니다.",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      })
      .then((result) => {
        console.log("sweetalert", result);
      });
  };

  const success = () => {
    swal
      .fire({
        title: "닉네임 수정 성공!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      })
      .then((result) => {
        console.log("sweetalert", result);
      });
  };

  const onChangeNickname = () => {
    axios
      .patch(
        "https://i6a306.p.ssafy.io:8080/api/v1/user/nickname",
        {
          changed: newnickname,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: state[0].token,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          DispatchmodifyNickname(newnickname);
          onHide();
          success();
        }
      })
      .catch((arr) => {
        sameNickname();
      });
  };

  //엔터로 입력가능하도록
  const entermodify = (e) => {
    if (e.key === "Enter") {
      onChangeNickname();
    }
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} size="sm">
        <div className={Styles.NicknameModal}>
          <Modal.Body>
            <div style={{ textAlign: "center" }}>
              Nickname 수정 :{" "}
              <input
                type="text"
                style={{ left: "90vw" }}
                placeholder="Nickname"
                name="newnickname"
                onChange={getNickname}
                onKeyPress={entermodify}
                maxLength="5"
              />
              &nbsp;
              <br />
              <button
                style={{
                  width: "3.2vw",
                  top: "20vh",
                  borderRadius: "30vh",
                  whiteSpace: "nowrap",
                  backgroundColor: "rgba(94, 163, 219, 0.753)",
                }}
                onClick={onChangeNickname}
              >
                수정
              </button>
              <button
                style={{
                  top: "20vh",
                  borderRadius: "30vh",
                  backgroundColor: "rgba(94, 163, 219, 0.753)",
                }}
                onClick={onHide}
              >
                닫기
              </button>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    DispatchmodifyNickname: (newNickname) =>
      dispatch(actionCreators.modifyNickname(newNickname)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nickname);
