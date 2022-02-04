import styles from "./Login.module.css";
import React from "react";
import { Link } from "react-router-dom";
import NavbarHome from "../layout/NavbarHome";

const { Kakao } = window;

function Login() {
  const LoginWithKakao = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        console.log(JSON.stringify(authObj));
      },
      fail: function (err) {
        alert(JSON.stringify(err));
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
        <button>
          <Link to="/lobby">KAKAO LOGIN</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
