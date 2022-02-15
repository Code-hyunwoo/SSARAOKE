import styles from "../components/roomin/Room.module.css";
import Musicbar from "../components/roomin/Musicbar";
import Screen from "../components/roomin/Screen";
import RoomChat from "../components/roomin/R_Chat";
import Button from "../components/roomin/Button";
import MirrorBall from "../components/roomin/MirrorBall";
import LightRope from "../components/roomin/LightRope";
import ChangeMode from "../components/roomin/ChangeMode";
import Contents from "../components/roomin/Contents";
import { useState } from "react";
import Crazylights from "../components/roomin/Crazylights";
import { Link, useParams } from "react-router-dom";
import Controller from "../components/remote/Controller";
import { connect } from "react-redux";
import { useEffect } from "react";
import Firework from "../components/remote/Firework";
import UserVideoComponent from "../components/openvidu/UserVideoComponent";
import { OpenVidu } from "openvidu-browser";
import axios from "axios";
import Dream from "../components/roomin/Dream";
import GoodDay from "../components/roomin/GoodDay";
import ScoreBoard from "../components/roomin/ScoreBoard";

const OPENVIDU_SERVER_URL = "https://i6a306.p.ssafy.io";
const OPENVIDU_SERVER_SECRET = "qwer1234";
const URL_PREFIX = "https://www.youtube.com/watch?v=";

////////////////////////////////////////////////////////////Room

function Room({ state }) {
  const [openChangeMode, setOpenChangeMode] = useState(false);
  const [openContents, setOpenContents] = useState(false);
  const [openFirework, setOpenFirework] = useState(false);
  // const practice = [
  //   "Xk7_eEx58ds",
  //   "4gXmClk8rKI",
  //   "t8KtQ8-nImI",
  // ];
  const [nowPlaymusic, setnowPlaymusic] = useState("");
  const [chatArr, setChatArr] = useState([]);

  const name = state[0].nickname; //{ Nickname }.Nickname; //redux에 저장된 user nickname
  const { mode, roomnum } = useParams();
  const room = { roomnum }.roomnum; //redux에 저장된 room_seq
  const firstmode = { mode }.mode;

  const [transScreen, settransScreen] = useState(styles.ScreenBasic);
  const [transCamBox, settransCamBox] = useState(styles.BasicCamBox);
  const [transChatBox, settransChatBox] = useState(styles.BasicChatBox);
  const [transChat, settransChat] = useState(styles.BasicChat);
  const [nowMode, setnowMode] = useState("Basicmode");
  const [startDream, setstartDream] = useState(false);
  const [startGoodDay, setstartGoodDay] = useState(false);
  const [startScoreBoard, setstartScoreBoard] = useState(false);

  // const [ myUserName, setmyUserName] = useState({ Nickname }.Nickname);//Nickname으로 쓰임
  const [session, setsession] = useState(undefined);
  const [publisher, setpublisher] = useState(undefined);
  const [subscribers, setsubscribers] = useState([]);
  const [OV, setOV] = useState(undefined);
  const [gsfilter, setgsfilter] = useState(false);
  const [nowplaying, setnowplaying] = useState(false);
  function transformBasic() {
    settransScreen(styles.ScreenBasic);
    settransCamBox(styles.BasicCamBox);
    settransChatBox(styles.BasicChatBox);
    settransChat(styles.BasicChat);
    setnowMode("Basicmode");
  }

  function transformSolo() {
    settransScreen(styles.ScreenSolo);
    settransCamBox(styles.SoloCamBox);
    settransChatBox(styles.SoloChatBox);
    settransChat(styles.SoloChat);
    setnowMode("Solomode");
  }

  function transformDuet() {
    settransScreen(styles.ScreenDuet);
    settransCamBox(styles.DuetCamBox);
    settransChatBox(styles.DuetChatBox);
    settransChat(styles.FreeChat);
    setnowMode("Duetmode");
  }

  function transformFree() {
    settransScreen(styles.ScreenFree);
    settransCamBox(styles.FreeCamBox);
    settransChatBox(styles.FreeChatBox);
    settransChat(styles.FreeChat);
    setnowMode("Freemode");
  }

  useEffect(() => {
    if (firstmode === "Basic") {
      transformBasic();
    } else if (firstmode === "Free") {
      transformFree();
    } else if (firstmode === "Solo") {
      transformSolo();
    } else if (firstmode === "Duet") {
      transformDuet();
    }
  }, []);

  useEffect(() => {
    // --- 3) Specify the actions when events take place in the session ---
    // my-chat
    if (session !== undefined && OV !== undefined) {
      var mySession = session;
      console.log("-----session changed-----");
      console.log(mySession);
      mySession.on("signal:my-chat", (event) => {
        console.log(event.data); // Message
        console.log(event.from); // Connection object of the sender
        // console.log(event.type); // The type of message ("my-chat")
        console.log(`[receiveChat] ${event.data}를 받았습니다.`);
        setChatArr((chatArr) => chatArr.concat(event.data));
        console.log("[ReceiveMessage]" + event.data);
      });
      mySession.on("signal:YTUrl", (event) => {
        console.log("[ReceiveURL]" + event.data);
        console.log(`${event.data} 재생 요청 들어옴 -> YT플레이어로 당장 틀기`);
        var url;
        if (event.data === "") {
          url = event.data;
          setnowplaying(false);
        } else {
          url = URL_PREFIX + event.data;
          setnowplaying(true);
        }
        // setYTUrl(url);
        //뮤직바 설정해야 함
        setnowPlaymusic(url); //현재 재생할 url
      });

      // On every new Stream received...
      mySession.on("streamCreated", (event) => {
        // Subscribe to the Stream to receive it. Second parameter is undefined
        // so OpenVidu doesn't create an HTML video by its own
        let Subscriber = mySession.subscribe(event.stream, undefined);
        let subs = subscribers;
        subs.push(Subscriber);
        setsubscribers(subs);
        // setsubscribers([...subscribers, Subscriber]); //여기서 렌더가 되어야 하는데
        // this.forceUpdate(); //강제 렌더

        console.log("-----new sub-----");
        console.log(Subscriber);
        console.log(subscribers);
      });

      // On every Stream destroyed...
      mySession.on("streamDestroyed", (event) => {
        // Remove the stream from 'subscribers' array
        deleteSubscriber(event.stream.streamManager);
      });

      // On every asynchronous exception...
      mySession.on("exception", (exception) => {
        console.warn(exception);
      });

      // --- 4) Connect to the session with a valid user token ---

      // 'getToken' method is simulating what your server-side should do.
      // 'token' parameter should be retrieved and returned by your own backend
      getToken().then((token) => {
        console.log("-----getToken then-----");
        // First param is the token got from OpenVidu Server. Second param can be retrieved by every user on event
        // 'streamCreated' (property Stream.connection.data), and will be appended to DOM as the user's nickname
        mySession
          .connect(token, { clientData: name })
          .then(() => {
            let publisher = OV.initPublisher(undefined, {
              audioSource: undefined, // The source of audio. If undefined default microphone
              videoSource: undefined, // The source of video. If undefined default webcam
              publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
              publishVideo: true, // Whether you want to start publishing with your video enabled or not
              resolution: "640x480", // The resolution of your video
              frameRate: 30, // The frame rate of your video
              insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
              mirror: false, // Whether to mirror your local video or not
            });

            // --- 6) Publish your stream ---

            mySession.publish(publisher);

            // Set the main video in the page to display our webcam and store our Publisher
            setpublisher(publisher);
            // this.setState({
            //     // mainStreamManager: publisher,
            //     publisher: publisher,
            // });
          })
          .catch((error) => {
            console.log(
              "There was an error connecting to the session:",
              error.code,
              error.message
            );
          });
      });
    }
  }, [session]);

  useEffect(() => {
    console.log("입장확인");
    console.log({ roomnum });
    console.log({ mode });
    register();
  }, []);

  window.onbeforeunload = function () {
    onbeforeunload();
  };

  function onbeforeunload() {
    leaveRoom();
  }

  const deleteSubscriber = (streamManager) => {
    let subs = subscribers;
    let idx = subs.indexOf(streamManager, 0);
    if (idx > -1) {
      subs.splice(idx, 1);
      setsubscribers([...subs]);
    }
  };

  function leaveRoom() {
    // --- 7) Leave the session by calling 'disconnect' method over the Session object ---

    const mySession = session;

    if (mySession) {
      mySession.disconnect();
    }

    // Empty all properties...
    setOV(undefined);
    setsession(undefined);
    setsubscribers([]);
    setpublisher(undefined);

    axios
      .post(
        "https://i6a306.p.ssafy.io:8080/api/v1/room/out",
        {
          room_seq: room,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: state[0].token,
          },
        }
      )
      .then((res) => {
        console.log("out 성공", res);
      })
      .catch((res) => {
        console.log(room);
        console.log("out 실패", res);
      });
  }
  function sendMessage(type, data) {
    const mySession = session;
    mySession
      .signal({
        data: data, // Any string (optional)
        to: [], // Array of Connection objects (optional. Broadcast to everyone if empty)
        type: type, // The type of message (optional)
      })
      .then(() => {
        console.log(type + " successfully sent");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function register() {
    console.log("-----Register-----");
    let OV = new OpenVidu();
    setOV(OV);
    setsession(OV.initSession());
  }

  function sendChat(msg) {
    console.log("[sendChat] 이것은 채ㅣㅌㅇ임");
    var chatMsg = state[0].nickname + ":" + msg;
    console.log(`[sendChat] ${chatMsg}`);
    sendMessage("my-chat", chatMsg);
  }

  function sendYTUrl() {
    //첫곡 불러와서 전송, 해당 곡은 DB에서 삭제 됨
    axios
      .get(`https://i6a306.p.ssafy.io:8080/api/v1/reservation/first/${room}`)
      .then((res) => {
        console.log("예약첫번째곡 불러옴", res.data);
        //title어디다 저장해두지 뮤직바 어디지
        sendMessage("YTUrl", res.data.song_no); //전송
        console.log(
          `[sendYTUrl]유튜브 요청 보냄, url: ${res.data.song_no} at room ${room}`
        );
      })
      .catch((res) => {
        console.log("불러오기 실패", res);
      });
  }

  // function nextMusic() {
  //   var next = bookList[0];
  //   setYTUrl(next);
  //   sendMessage('YTUrl', YTUrl);
  //   bookList.shift();
  //   setbookList(bookList);
  //   console.log(bookList)
  // }

  function audioMute() {
    const me = publisher;
    if (me.stream.audioActive) {
      me.publishAudio(false);
      console.log("마이크 끄기");
    } else {
      me.publishAudio(true);
      console.log("마이크 켜기");
    }
  }

  function videoMute() {
    const me = publisher;
    if (me.stream.videoActive) {
      me.publishVideo(false);
      console.log("비디오 끄기");
    } else {
      me.publishVideo(true);
      console.log("비디오 켜기");
    }
  }

  function voiceFilterEcho() {
    const me = publisher;
    if (!gsfilter) {
      setgsfilter(true);
      me.stream.applyFilter("GStreamerFilter", {
        command: "audioecho delay=50000000 intensity=0.7 feedback=0.5",
      });
      console.log("에코 추가");
    } else {
      setgsfilter(false);
      me.stream.removeFilter();
      console.log("에코 제거");
    }
  }

  function voiceFilterMegaPhone() {
    const me = publisher;
    if (!gsfilter) {
      setgsfilter(true);
      me.stream.applyFilter("GStreamerFilter", {
        command: "audioamplify amplification=1.7",
      });
      console.log("확성기 추가");
    } else {
      setgsfilter(false);
      me.stream.removeFilter();
      console.log("확성기 제거");
    }
  }

  function voiceFilterModulation() {
    const me = publisher;
    if (!gsfilter) {
      setgsfilter(true);
      me.stream.applyFilter("GStreamerFilter", { command: `pitch pitch=1.7` });
      console.log("음성 변조 추가");
    } else {
      setgsfilter(false);
      me.stream.removeFilter();
      console.log("음성 변조 제거");
    }
  }

  function getToken() {
    return createSession(room).then((sessionId) => createToken(sessionId));
  }

  function createSession(sessionId) {
    return new Promise((resolve, reject) => {
      var data = JSON.stringify({ customSessionId: sessionId });
      axios
        .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions", data, {
          headers: {
            Authorization:
              "Basic " + btoa("OPENVIDUAPP:" + OPENVIDU_SERVER_SECRET),
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("CREATE SESION", response);
          resolve(response.data.id);
        })
        .catch((response) => {
          var error = Object.assign({}, response);
          if (error?.response?.status === 409) {
            resolve(sessionId);
          } else {
            console.log(error);
            console.warn(
              "No connection to OpenVidu Server. This may be a certificate error at " +
                OPENVIDU_SERVER_URL
            );
            if (
              window.confirm(
                'No connection to OpenVidu Server. This may be a certificate error at "' +
                  OPENVIDU_SERVER_URL +
                  '"\n\nClick OK to navigate and accept it. ' +
                  'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' +
                  OPENVIDU_SERVER_URL +
                  '"'
              )
            ) {
              window.location.assign(
                OPENVIDU_SERVER_URL + "/accept-certificate"
              );
            }
          }
        });
    });
  }

  function createToken(sessionId) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          OPENVIDU_SERVER_URL +
            "/openvidu/api/sessions/" +
            sessionId +
            "/connection",
          JSON.stringify({
            kurentoOptions: {
              allowedFilters: ["GStreamerFilter", "FaceOverlayFilter"],
            },
          }),
          {
            headers: {
              Authorization:
                "Basic " + btoa("OPENVIDUAPP:" + OPENVIDU_SERVER_SECRET),
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("TOKEN", response);
          resolve(response.data.token);
        })
        .catch((error) => reject(error));
    });
  }

  function basicsinger() {
    if (document.getElementById(name).className !== styles.basicSingercam) {
      document.getElementById(name).className = styles.basicSingercam;
    } else {
      document.getElementById(name).className = "undefined";
    }
  }

  function solosinger() {
    if (document.getElementById(name).className !== styles.soloSingercam) {
      document.getElementById(name).className = styles.soloSingercam;
    } else {
      document.getElementById(name).className = "undefined";
    }
  }
  function duetsinger() {
    if (document.getElementById(name).className !== styles.duetSingercam) {
      document.getElementById(name).className = styles.duetSingercam;
    } else {
      document.getElementById(name).className = "undefined";
    }
  }

  function duetsinger2() {
    if (document.getElementById(name).className !== styles.duetSingercam2) {
      document.getElementById(name).className = styles.duetSingercam2;
    } else {
      document.getElementById(name).className = "undefined";
    }
  }

  return (
    <div className={styles.room}>
      <LightRope />
      <Crazylights />
      <Musicbar />
      <MirrorBall />
      <Screen
        mode={transScreen}
        now={nowPlaymusic}
        // nextMusic={nextMusic}
        setstartScoreBoard={setstartScoreBoard}
      />
      {openFirework && <Firework />}
      {startDream && <Dream setstartDream={setstartDream} />}
      {startGoodDay && <GoodDay setstartGoodDay={setstartGoodDay} />}
      {startScoreBoard && (
        <ScoreBoard setstartScoreBoard={setstartScoreBoard} />
      )}

      <div className={transCamBox}>
        <div id="video-container">
          {session !== undefined ? (
            <UserVideoComponent streamManager={publisher} />
          ) : null}
          {session !== undefined
            ? subscribers.map((sub, i) => (
                <div key={i} className="stream-container col-md-6 col-xs-6">
                  <UserVideoComponent streamManager={sub} />
                </div>
              ))
            : null}
        </div>
      </div>
      <div className={transChatBox}>
        <RoomChat mode={transChat} sendChat={sendChat} chatArr={chatArr} />
      </div>
      <div className={styles.ButtonBox}>
        <Button text={"마이크"} getOnClick={audioMute} />
        <Button text={"캠"} getOnClick={videoMute} />
        {nowMode === "Basicmode" && (
          <Button text={"Singer"} getOnClick={basicsinger} />
        )}
        {nowMode === "Freemode" && (
          <Button text={"Singer"} getOnClick={basicsinger} />
        )}
        {nowMode === "Solomode" && (
          <Button text={"Singer"} getOnClick={solosinger} />
        )}
        {nowMode === "Duetmode" && (
          <Button text={"Singer1"} getOnClick={duetsinger} />
        )}
        {nowMode === "Duetmode" && (
          <Button text={"Singer2"} getOnClick={duetsinger2} />
        )}

        <Controller
          roomseq={room}
          sendYTUrl={sendYTUrl}
          setOpenFirework={setOpenFirework}
          nowplaying={nowplaying}
          voiceFilterEcho={voiceFilterEcho}
          voiceFilterMegaPhone={voiceFilterMegaPhone}
          voiceFilterModulation={voiceFilterModulation}
          setstartDream={setstartDream}
          setstartGoodDay={setstartGoodDay}
        />
        <button
          className={(styles.btn, styles.neon)}
          onClick={() => {
            setOpenContents(true);
          }}
        >
          {" "}
          컨텐츠{" "}
        </button>
        {openContents && (
          <Contents
            closeContents={setOpenContents}
            transformDuet={transformDuet}
            setstartDream={setstartDream}
            setstartGoodDay={setstartGoodDay}
          />
        )}

        <button
          className={(styles.btn, styles.neon)}
          onClick={() => {
            setOpenChangeMode(true);
          }}
        >
          {" "}
          모드선택{" "}
        </button>
        {openChangeMode && (
          <ChangeMode
            closeChangeMode={setOpenChangeMode}
            transformBasic={transformBasic}
            transformSolo={transformSolo}
            transformDuet={transformDuet}
            transformFree={transformFree}
          />
        )}
        <Link to="/lobby" id={styles.btn_no}>
          <button onClick={leaveRoom} className={(styles.btn, styles.neon)}>
            {" "}
            나가기
          </button>
        </Link>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { state };
}

// function mapStateToProps(state) {
//     const Nickname = state[0].nickname;
//     return { Nickname };
// }

export default connect(mapStateToProps, null)(Room);
