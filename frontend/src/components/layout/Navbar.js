import styles from "./Navbar.module.css";
import logo from "../../assets/SSARAOKE-LOGO4.png";
import { Link } from "react-router-dom";

function AppBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <img src={logo} height={60} alt="ssaraoke logo"></img>
        <a href="#Home" className={styles.title}>
          SSARAOKE
        </a>
      </div>
      <div className={styles.right}>
        <a href="#About" className={styles.content}>
          About
        </a>
        <a href="#Signin" className={styles.content}>
          SignIn
        </a>
        <a href="#features" className={styles.content}>
          MyPage
        </a>
      </div>
    </div>
  );
}

export default AppBar;
