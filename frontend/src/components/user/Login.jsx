import React from "react";
import NavbarHome from "../layout/NavbarHome";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import { Link } from "react-router-dom";

const { Kakao } = window;

function Login({ DispatchaddInfo, state }) {
  const navigate = useNavigate();

  const LoginWithKakao = () => {
    Kakao.Auth.login({
      success: (response) => {
        console.log(response);
        axios
          .post("https://i6a306.p.ssafy.io:8080/api/v1/auth/kakao", {
            accessToken: response.access_token,
            oauthType: "KAKAO",
            refreshToken: response.refresh_token,
          })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            console.log("(JWT포함)백엔드로부터 받은 응답 : ", res);
            if (state.length === 0) {
              DispatchaddInfo({
                seq: res.data.seq,
                nickname: res.data.nickname,
                token: res.data.token,
              });
            }

            alert("로그인 성공! SSARAOKE에 오신 것을 환영합니다!");
            navigate("/lobby");
            console.log("로그인 성공 후 state : ", state);
          });
      },
      fail: (error) => {
        alert("로그인에 실패했습니다.");
        navigate("/");
        // alert(JSON.stringify(error));
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
