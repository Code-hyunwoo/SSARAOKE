import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import Styles from "./Mypage.module.css";
import swal from 'sweetalert2';

function Email({ show, onHide, state, DispatchmodifyEmail }) {

  //변경할 이메일값 받아오기
  const [newemail, setNewemail] = useState("");
  const getEmail = (e) => {
    setNewemail(e.target.value);
  };

  const success = () => {
    swal.fire({
      title: '이메일 수정 성공!',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })
  }

  //변경한 이메일 값 보내기 & 버튼 누르면 창 닫기도록
  const onChangeEmail = () => {
    axios
      .patch(
        "https://i6a306.p.ssafy.io:8080/api/v1/user/email",
        {
          changed: newemail,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: state[0].token, 
          },
        }
      )
      .then((res) => {
        DispatchmodifyEmail(newemail);
        onHide();
        success();
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const entermodify = (e) => {
    if (e.key === "Enter") {
      onChangeEmail();
    }
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} size="sm">
        <div className={Styles.EmailModal}>
          <Modal.Body>
            <div style={{ textAlign: "center" }}>
              E-Mail 수정 :{" "}
              <input
                type="text"
                name="newemail"
                onChange={getEmail}
                placeholder="Email"
                onKeyPress={entermodify}
              />
              &nbsp;
              <button
                style={{ borderRadius: "30vh", backgroundColor: "#ffcd438f" }}
                onClick={onChangeEmail}
              >
                수정
              </button>
              <button
                style={{ borderRadius: "30vh", backgroundColor: "#ffcd438f" }}
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
    DispatchmodifyEmail: (newEmail) =>
      dispatch(actionCreators.modifyEmail(newEmail)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Email);
