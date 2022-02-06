import styles from "./NavbarLobby.module.css";
import logo from "../../assets/SSARAOKE-LOGO4.png";
import { Link } from "react-router-dom";
import SearchIcon from "./SearchIcon.js";

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
      <div className="py-1">
        <div className={styles.roomnamesearch}>
          <input
            type="text"
            placeholder="방 제목을 검색하세요."
            style={{ width: 450 }}
          />
          <button
            type="submit"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SearchIcon />
          </button>
        </div>
        <div className="pt-2">
          <button className={styles.roomtagsearch}>#발라드</button>
          <button className={styles.roomtagsearch}>#R&B</button>
          <button className={styles.roomtagsearch}>#힙합</button>
          <button className={styles.roomtagsearch}>#K-POP</button>
          <button className={styles.roomtagsearch}>#팝</button>
          <button className={styles.roomtagsearch}>#트로트</button>
          <button className={styles.roomtagsearch}>#인디</button>
          <button className={styles.roomtagsearch}>#ROCK</button>
          <button className={styles.roomtagsearch}>#댄스</button>
          <button className={styles.roomtagsearch}>#7080</button>
          <button className={styles.roomtagsearch}>#1990</button>
          <button className={styles.roomtagsearch}>#2000</button>
          <button className={styles.roomtagsearch}>#2010</button>
          <button className={styles.roomtagsearch}>#2020</button>
        </div>
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
