import styles from "./NavbarLobby.module.css";
import logo from "../../assets/SSARAOKE-LOGO4.png";
import { Link } from "react-router-dom";

function NavbarLobby() {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link to="/">
          <img src={logo} height={60} alt="ssaraoke logo"></img>
        </Link>
        <Link to="/" className={styles.title}>
          SSARAOKE
        </Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="방을 검색하세요."
          style={{ width: 300 }}
        />
        <button type="submit">검색</button>
      </div>
      <div className={styles.right}>
        <Link to="/" className={styles.content}>
          Logout
        </Link>
        <Link to="/mypage" className={styles.content}>
          MyPage
        </Link>
      </div>
    </div>
  );
}

export default NavbarLobby;
