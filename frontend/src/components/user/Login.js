import styles from "./Login.module.css";
import React from "react";
import { Link } from "react-router-dom";

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
    <div>
      <div className={styles.itembg}>
        <h2 className={styles.main}>Welcome SSARAOKE</h2>
        <button className={styles.btn} onClick={LoginWithKakao}>
          Kakao Login
        </button>
      </div>
      <button>
        <Link to="/lobby">KAKAO LOGIN</Link>
      </button>
    </div>
  );
}

export default Login;
