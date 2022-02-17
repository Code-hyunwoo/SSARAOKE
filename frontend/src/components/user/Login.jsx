import React from "react";
import NavbarHome from "../layout/NavbarHome";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const { Kakao } = window;

function Login({ DispatchaddInfo, state }) {
  const navigate = useNavigate();

  const loginSuccess = () => {
    Swal.fire({
      title: "로그인 성공!",
      text: "SSARAOKE에 오신 것을 환영합니다!",
      icon: "success",
      confirmButtonColor: "#73E0C1",
      confirmButtonText: "확인",
    })
  };

  const loginFail = () => {
    Swal.fire({
      title:"로그인 실패!",
      icon: 'error',
      confirmButtonColor: '#73E0C1',
      confirmButtonText: '확인'
    })
  }

  const LoginWithKakao = () => {
    Kakao.Auth.login({
      success: (response) => {
        axios
          .post("https://i6a306.p.ssafy.io:8080/api/v1/auth/kakao", {
            accessToken: response.access_token,
            oauthType: "KAKAO",
            refreshToken: response.refresh_token,
          })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            if (state.length === 0) {
              DispatchaddInfo({
                seq: res.data.seq,
                nickname: res.data.nickname,
                token: res.data.token,
                email: res.data.email,
              });
            }
            loginSuccess();
            navigate("/lobby");
          });
      },
      fail: (error) => {
        loginFail();
        navigate("/");
      },
    });
  };
  return (
    <div className={styles.itembg}>
      <NavbarHome />
      <div className={styles.logincontent}>
        <h2 className={styles.main}>Welcome SSARAOKE</h2>
        <button
          className={styles.btnNotLoggedIn}
          onClick={LoginWithKakao}
          hidden={state.length !== 0}
        >
          카카오로 시작하기
        </button>
        <Link to="/lobby">
          <button className={styles.btnLoggedIn} hidden={state.length === 0}>
            로비로 돌아가기
          </button>
        </Link>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    DispatchaddInfo: (infoObj) => dispatch(actionCreators.addInfo(infoObj)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
