// import { Card, CardGroup, Navbar } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Desk from "../components/lobby/Desk";
// import L_Chat from './L_Chat';
import Room2 from "../components/lobby/Room2";
import Styles from "../components/lobby/Lobby.module.css";
import { Link } from "react-router-dom";
import LobbyBackGround from "../components/lobby/LobbyBackGround";
import NavbarLobby from "../components/layout/NavbarLobby";

function MainLobby() {
  return (
    // <Navbar />
    <div>
      <NavbarLobby />
      <LobbyBackGround />

      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></script>
      <div>
        {/* <img alt="자판기" style={{paddingRight: "450px"}} src='https://www.figma.com/file/cyLMPjvATwJR1Vi4GYL53o/6%ED%8C%80-SSARAOKE_-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=117%3A146'/> */}
        {/*  style={{ marginleft: '95%'}} 하면 우측으로 이동 -> 추후 css 먹이기 */}
        <div className={Styles.machine}>
          <div className={Styles.machine2}>
            <button className={Styles.can}></button>
            <button className={Styles.can2}></button>
            <button className={Styles.can3}></button>
            <button className={Styles.can4}></button>
            <button className={Styles.can5}></button>
            <button className={Styles.can6}></button>
          </div>
        </div>

        <button>
          <Link to="/Mypage">Mypage</Link>
        </button>
        <Desk />
      </div>

      <div>
        <Room2 />
        {/* <Room2 roomnum={Styles.doorL}/>
                <Room2 roomnum={Styles.doorR}/>
                <Room2 className={Styles.doorDL}/>
                <Room2 className={Styles.doorDR}/>
                <Room2 className={Styles.doorML}/>
                <Room2 className={Styles.doorMR}/> */}
      </div>
    </div>
  );
}

export default MainLobby;

// element.style {
//     padding-right: 300px;
// }
