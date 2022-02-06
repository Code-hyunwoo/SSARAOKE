import React from "react";
import NavbarHome from "../layout/NavbarHome";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Kakao } = window;

function Login() {
  const navigate = useNavigate();
  const LoginWithKakao = () => {
    Kakao.Auth.login({
      success: (response) => {
        axios
          .post("http://i6a306.p.ssafy.io:8080/api/v1/auth/kakao", {
            accessToken: response.access_token,
            oauthType: "KAKAO",
            refreshToken: response.refresh_token,
          })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            console.log(res);
            alert("로그인 되었습니다.");
            navigate("/lobby");
          });
      },
      fail: (error) => {
        alert(JSON.stringify(error));
      },
    });
  };
  return (
    <div className={styles.itembg}>
      <NavbarHome />
      <div className={styles.logincontent}>
        <h2 className={styles.main}>Welcome SSARAOKE</h2>
        <button className={styles.btn} onClick={LoginWithKakao}>
          Kakao Login
        </button>
      </div>
    </div>
  );
}

export default Login;
