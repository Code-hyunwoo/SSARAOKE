import styles from "./NavbarLobby.module.css";
import logo from "../../assets/SSARAOKE-LOGO4-modified.png";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "./SearchIcon";
import { connect } from "react-redux";
import { actionCreators } from "../../store";

const { Kakao } = window;

function NavbarLobby({ state, DispatchdeleteInfo }) {
  const navigate = useNavigate();
  const Logout = () => {
    // 카카오 라이브러리 이용하면 인증코드(access, refresh token만 삭제 / 로컬의 JWT는 남겨둠)
    // if (Kakao.Auth.getAccessToken()) {
    //   console.log(
    //     "카카오 인증 엑세스 토큰 존재",
    //     window.Kakao.Auth.getAccessToken()
    //   );
    //   alert("로그아웃 완료! 이용해 주셔서 감사합니다!");
    //   Kakao.Auth.logout(() => {
    //     console.log("카카오 로그아웃 완료", window.Kakao.Auth.getAccessToken());
    //   });
    //   navigate("/");
    // }
    DispatchdeleteInfo();
    alert("로그아웃 완료! 이용해 주셔서 감사합니다!");
    navigate("/");
  };
  // console.log("방금 로그인한 사용자의 seq : ", state[0].seq);
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
        <div className={styles.content} onClick={Logout}>
          Logout
        </div>
        <Link to="/mypage" className={styles.content}>
          MyPage
        </Link>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  // console.log("ownProps입니다:", ownProps);
  return {
    DispatchdeleteInfo: () => dispatch(actionCreators.deleteInfo()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarLobby);
