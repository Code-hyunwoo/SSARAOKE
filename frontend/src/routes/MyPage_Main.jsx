import Styles from "../components/user/MyPageMain.module.css";
import Stylescan from "../components/user/MypageCan.module.css";
import { BsTrash2Fill, BsTrash2 } from "react-icons/bs";
import React from "react";
import MyVideo from "../components/user/MyVideo";
import { Link } from "react-router-dom";
import Bookmark from "../components/user/Bookmark";
import Nickname from "../components/user/Nickname";
import Email from "../components/user/Email";
import Forest from "../components/lobby/background/Forest";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import RoomPw from "../components/lobby/RoomPw";

function Mypage_Main() {
  // 모달용
  const [bookmarkShow, setBookmarkShow] = React.useState(false);
  const [videoShow, setVideoShow] = React.useState(false);
  const [nicknameShow, setNicknameShow] = React.useState(false);
  const [emailShow, setEmailShow] = React.useState(false);
  // 마우스오버용
  const [bookMShow, setBookMShow] = React.useState(false);
  const [videoMShow, setVideoMShow] = React.useState(false);

  return (
    <div>
      <Forest />
      {/* <SpaceBackground /> */}
      {/* <LobbyBackGround /> */}

      <Link to="/lobby">
        <button className={Styles.backbtn}></button>
      </Link>
      {/* 자판기시작 */}
      {/* 큰틀 */}
      <div className={Styles.machineOutline}>
        {/* 작은틀 */}
        <div className={Styles.machineInline}>
          {/* 윗층 캔 */}
          {/* 모달, 마우스오버.아웃 */}
          <div
            onClick={() => setBookmarkShow(true)}
            onMouseOver={() => setBookMShow(true)}
            onMouseOut={() => setBookMShow(false)}
          >
            {/* 툴팁 */}
            <OverlayTrigger
              delay={{ hide: 5, show: 5 }}
              overlay={(props) => <Tooltip {...props}> Click me!</Tooltip>}
              placement="right"
            >
              <div>
                <div>
                  <div
                    style={
                      bookMShow
                        ? {
                            position: "absolute",
                            width: "62vw",
                            height: "20vh",
                            left: "0.5vw",
                            top: "1vh",
                            borderRadius: "3vw",
                            display: "block",
                            // border: '0.4vw dotted #ff77f8'
                          }
                        : { border: "none" }
                    }
                  >
                    {/* <button onClick={() => setBookmarkShow(true)} className={Stylescan.canPink} style={{top:'6%',left: '4%'}}></button> */}
                    <button
                      className={Stylescan.canPink}
                      style={{ top: "6%", left: "4%" }}
                    ></button>
                    <button
                      className={Stylescan.canY}
                      style={{ top: "6%", left: "17.5%" }}
                    ></button>
                    <button
                      className={Stylescan.canP}
                      style={{ top: "6%", left: "31%" }}
                    ></button>
                    <button
                      className={Stylescan.canB}
                      style={{ top: "6%", left: "45%" }}
                    ></button>
                    <button
                      className={Stylescan.canR}
                      style={{ top: "6%", left: "59%" }}
                    ></button>
                    <button
                      className={Stylescan.canN}
                      style={{ top: "6%", left: "72%" }}
                    ></button>
                    <button
                      className={Stylescan.canBB}
                      style={{ top: "6%", left: "86%" }}
                    ></button>
                    {/* <Bookmark
                            show={bookmarkShow}
                            onHide={() => setBookmarkShow(false)}
                        /> */}
                  </div>
                </div>
              </div>
            </OverlayTrigger>{" "}
            {/* 툴팁 끝 */}
          </div>
          {/* 북마크 모달  */}
          <Bookmark show={bookmarkShow} onHide={() => setBookmarkShow(false)} />

          {/* 막대 바 */}
          <div className={Styles.canBar} style={{ top: "22vh" }}>
            {" "}
            BookMark
          </div>

          {/* 아랫층 캔 */}
          {/* 모달, 마우스오버/아웃 */}
          <div
            onClick={() => setVideoShow(true)}
            onMouseOver={() => setVideoMShow(true)}
            onMouseOut={() => setVideoMShow(false)}
          >
            <div>
              <div>
                <div>
                  <div>
                    {/* 툴팁 */}
                    <OverlayTrigger
                      delay={{ hide: 5, show: 5 }}
                      overlay={(props) => (
                        <Tooltip {...props}> Click me!</Tooltip>
                      )}
                      placement="right"
                    >
                      {/* 마우스오버 */}
                      <div
                        style={
                          videoMShow
                            ? {
                                position: "absolute",
                                width: "62vw",
                                height: "20vh",
                                left: "0.5vw",
                                top: "17vh",
                                borderRadius: "3vw",
                                // border: '0.4vw dotted #ff77f8'
                              }
                            : { border: "none" }
                        }
                      >
                        <button
                          onClick={() => setVideoShow(true)}
                          className={Stylescan.canB}
                          style={{ top: "52.5%", left: "4%" }}
                        ></button>
                        <button
                          onClick={() => setVideoShow(true)}
                          className={Stylescan.canBB}
                          style={{ top: "52.5%", left: "17.5%" }}
                        ></button>
                        <button
                          onClick={() => setVideoShow(true)}
                          className={Stylescan.canR}
                          style={{ top: "52.5%", left: "31%" }}
                        ></button>
                        <button
                          onClick={() => setVideoShow(true)}
                          className={Stylescan.canPink}
                          style={{ top: "52.5%", left: "45%" }}
                        ></button>
                        <button
                          onClick={() => setVideoShow(true)}
                          className={Stylescan.canY}
                          style={{ top: "52.5%", left: "59%" }}
                        ></button>
                        <button
                          onClick={() => setVideoShow(true)}
                          className={Stylescan.canP}
                          style={{ top: "52.5%", left: "72%" }}
                        ></button>
                        <button
                          onClick={() => setVideoShow(true)}
                          className={Stylescan.canN}
                          style={{ top: "52.5%", left: "86%" }}
                        ></button>
                      </div>
                    </OverlayTrigger>{" "}
                    {/* 툴팁 */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MyVideo show={videoShow} onHide={() => setVideoShow(false)} />
          {/* 막대 바 */}
          <div className={Styles.canBar} style={{ top: "47vh" }}>
            My Video
          </div>
        </div>
        {/* 닉네임 */}
        <button
          onClick={() => setNicknameShow(true)}
          className={Styles.nicknameBox}
        >
          {" "}
          {`Nickname`}{" "}
        </button>
        <Nickname show={nicknameShow} onHide={() => setNicknameShow(false)} />
        {/* 싸라오케 */}
        <div className={Styles.ssaraoke}>SSARAOKE</div>
        {/* 번호 */}
        <div className={Styles.phoneN}>010-7100-1722</div>
        {/* 이메일 */}
        <button onClick={() => setEmailShow(true)} className={Styles.emailBox}>
          {" "}
          {`E-mail`}{" "}
        </button>
        <Email show={emailShow} onHide={() => setEmailShow(false)} />

        {/* 지폐투입구 */}
        <div className={Styles.cash}></div>
        {/* 동전 투입구 */}
        <div className={Styles.coin}></div>
        <div className={Styles.coinLine}></div>
        {/* 자판기 문여는거 */}
        <div className={Styles.machineDoor}></div>
        <div className={Styles.machineDoorR}></div>
      </div>

      {/* 쓰레기통 */}
      <button style={{ backgroundColor: "black", borderColor: "black" }}>
        <div className={Styles.trash1}></div>
        <div className={Styles.trash2}></div>
        <div className={Styles.trash4}></div>
        <div className={Styles.trash7}></div>
        <div className={Styles.trash5}></div>
        <div className={Styles.trash6}></div>
        <div className={Styles.trashCan}></div>

        <Link to="/">
          <div>
            {" "}
            <BsTrash2Fill className={Styles.trashCan} color="#0381D7" />
            <BsTrash2 className={Styles.trashCan} color="#0381D7" />
          </div>
        </Link>
      </button>
    </div>
  );
}
export default Mypage_Main;
