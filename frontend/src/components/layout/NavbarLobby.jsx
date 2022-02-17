import styles from "./NavbarLobby.module.css";
import logo from "../../assets/SSARAOKE-LOGO4-modified.png";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "./SearchIcon";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import swal from 'sweetalert2';

const { Kakao } = window;

function NavbarLobby({ state, DispatchdeleteInfo }) {
  const navigate = useNavigate();

  const logoutSuccess = () => {
    swal.fire({
      title:"로그아웃 완료!",
      text: "이용해 주셔서 감사합니다!",
      icon: 'success',
      confirmButtonColor: '#73E0C1',
      confirmButtonText: '확인'
    })
    .then((result) => {
      console.log("sweetalert", result);
    })
  }

  const Logout = () => {
    DispatchdeleteInfo();
    logoutSuccess();
    navigate("/");
  };
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
          <button className={styles.roomtagsearch} style={{color:"#F9B208"}}>#발라드</button>
          <button className={styles.roomtagsearch} style={{color:"#FFDA1A"}}>#R&B</button>
          <button className={styles.roomtagsearch} style={{color:"#F2789F"}}>#힙합</button>
          <button className={styles.roomtagsearch} style={{color:"#73E0C1"}}>#K-POP</button>
          <button className={styles.roomtagsearch} style={{color:"#F999B7"}}>#팝</button>
          <button className={styles.roomtagsearch} style={{color:"#19F62F"}}>#트로트</button>
          <button className={styles.roomtagsearch} style={{color:"#FFF89A"}}>#인디</button>
          <button className={styles.roomtagsearch} style={{color:"#32C1CD"}}>#ROCK</button>
          <button className={styles.roomtagsearch} style={{color:"#F9C5D5"}}>#댄스</button>
          <button className={styles.roomtagsearch} style={{color:"#9EFFB9"}}>#7080</button>
          <button className={styles.roomtagsearch} style={{color:"#B983FF"}}>#1990</button>
          <button className={styles.roomtagsearch} style={{color:"#94B3FD"}}>#2000</button>
          <button className={styles.roomtagsearch} style={{color:"#94DAFF"}}>#2010</button>
          <button className={styles.roomtagsearch} style={{color:"#99FEFF"}}>#2020</button>
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
  return {
    DispatchdeleteInfo: () => dispatch(actionCreators.deleteInfo()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarLobby);
