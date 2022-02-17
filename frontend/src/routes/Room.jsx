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
import AWS from "aws-sdk";
import UserVideoComponent from "../components/openvidu/UserVideoComponent";
import { OpenVidu } from "openvidu-browser";
import axios from "axios";
import Dream from "../components/roomin/Dream";
import GoodDay from "../components/roomin/GoodDay";
import ScoreBoard from "../components/roomin/ScoreBoard";
import Draggable from "react-draggable";
import Clap from "../components/remote/audio/Clap.wav";
import Tambourine from "../components/remote/audio/Tambourine.mp3";
import Swal from "sweetalert2";

const OPENVIDU_SERVER_URL = "https://i6a306.p.ssafy.io";
const OPENVIDU_SERVER_SECRET = "qwer1234";
const URL_PREFIX = "https://www.youtube.com/watch?v=";
const RANDOM_PITCH = [
  "0.76",
  "0.77",
  "0.78",
  "0.79",
  "0.80",
  "1.4",
  "1.5",
  "1.7",
  "1.8",
  "2.0",
];
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
  const [musicbartitle, setmusicbartitle] = useState("");
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
        console.log(event); // Message
        console.log(event.data); // Message
        console.log(event.from); // Connection object of the sender
        // console.log(event.type); // The type of message ("my-chat")
        console.log(`[receiveChat] ${event.data}를 받았습니다.`);
        // setChatArr((chatArr) => chatArr.concat(event.data));
        const message = event.data.split(":");
        const chatmsg = { name: message[0], msg: message[1] };
        setChatArr((chatArr) => chatArr.concat(chatmsg));
        console.log(chatArr);
        console.log("[ReceiveMessage]" + event.data);
      });
      mySession.on("signal:YTUrl", (event) => {
        var data = JSON.parse(event.data);
        var url;
        if (event.data.url === "") {
          url = data.url;
        } else {
          url = URL_PREFIX + data.url;
        }
        setmusicbartitle(data.title);
        setnowPlaymusic(url); //현재 재생할 url
      });

      mySession.on("signal:effect", (event) => {
        console.log(`effect: ${event.data}`);
        if (event.data === "clap") {
          //clap 치기
          const audio = new Audio(Clap);
          audio.volume = 0.03;
          audio.play();
        } else if (event.data === "tambourine") {
          //tambourine 치기
          const audio2 = new Audio(Tambourine);
          audio2.volume = 0.2;
          audio2.play();
        } else if (event.data === "firework") {
          //firework 쏘기
          setOpenFirework(true);
          setTimeout(function () {
            setOpenFirework(false);
          }, 6000);
        }
      });

      mySession.on("signal:basicSinger", (event) => {
        document.getElementById(event.data).className = styles.basicSingercam;
        console.log("내가 Singer다!");
      });

      mySession.on("signal:basicSingerout", (event) => {
        document.getElementById(event.data).className = "undefined";
      });

      mySession.on("signal:soloSinger", (event) => {
        document.getElementById(event.data).className = styles.soloSingercam;
        console.log("Solo캠 이동!");
      });

      mySession.on("signal:soloSingerout", (event) => {
        document.getElementById(event.data).className = "undefined";
        console.log("Solo캠 아웃!");
      });

      mySession.on("signal:duetSinger", (event) => {
        document.getElementById(event.data).className = styles.duetSingercam;
        console.log("Duet캠1 이동!");
      });

      mySession.on("signal:duetSingerout", (event) => {
        document.getElementById(event.data).className = "undefined";
        console.log("Duet캠1 아웃!");
      });

      mySession.on("signal:duetSinger2", (event) => {
        document.getElementById(event.data).className = styles.duetSingercam2;
        console.log("Duet캠2 이동!");
      });

      mySession.on("signal:duetSinger2out", (event) => {
        document.getElementById(event.data).className = "undefined";
        console.log("Duet캠2 아웃!");
      });

      mySession.on("signal:changeMode", (event) => {
        if (event.data === "Basic") {
          transformBasic();
          console.log("Basic 으로 Change!");
        } else if (event.data === "Free") {
          transformFree();
          console.log("Free 로 Change!");
        } else if (event.data === "Solo") {
          transformSolo();
          console.log("Solo 로 Change!");
        } else if (event.data === "Duet") {
          transformDuet();
          console.log("Duet 으로 Change!");
        }
      });

      mySession.on("signal:Contents", (event) => {
        if (event.data === "Dream") {
          setstartDream(true);
          console.log("듀엣컨텐츠 Dream");
        } else if (event.data === "GoodDay") {
          setstartGoodDay(true);
          console.log("듀엣컨텐츠 GoodDay");
        }
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
              mirror: true, // Whether to mirror your local video or not
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
    console.log("[sendChat] 이것은 채팅임");
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
        var data = {
          url: res.data.song_no,
          title: res.data.song_title,
        };
        sendMessage("YTUrl", JSON.stringify(data)); //전송
        console.log(
          `[sendYTUrl]유튜브 요청 보냄, url: ${res.data.song_no} at room ${room}`
        );
      })
      .catch((res) => {
        console.log("불러오기 실패", res);
      });
  }

  function sendClap() {
    sendMessage("effect", "clap");
  }

  function sendTambourine() {
    sendMessage("effect", "tambourine");
  }

  function sendFire() {
    sendMessage("effect", "firework");
  }

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
      new Swal({
        title: "에코 추가 완료!",
        timer: 500,
        showConfirmButton: false,
      });
      console.log("에코 추가");
    } else {
      setgsfilter(false);
      me.stream.removeFilter();
      new Swal({
        title: "에코 제거 완료!",
        timer: 500,
        showConfirmButton: false,
      });
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
      new Swal({
        title: "확성기 설정 완료!",
        timer: 500,
        showConfirmButton: false,
      });
      console.log("확성기 추가");
    } else {
      setgsfilter(false);
      me.stream.removeFilter();
      new Swal({
        title: "확성기 해제 완료!",
        timer: 500,
        showConfirmButton: false,
      });
      console.log("확성기 제거");
    }
  }

  function voiceFilterModulation() {
    const me = publisher;
    if (!gsfilter) {
      setgsfilter(true);
      let pitch = RANDOM_PITCH[Math.floor(Math.random() * RANDOM_PITCH)];
      me.stream.applyFilter("GStreamerFilter", { command: `pitch pitch=1.7` });
      new Swal({
        title: "음성변조 설정 완료!",
        timer: 500,
        showConfirmButton: false,
      });
      console.log("음성 변조 추가");
    } else {
      setgsfilter(false);
      me.stream.removeFilter();
      new Swal({
        title: "음성변조 해제 완료!",
        timer: 500,
        showConfirmButton: false,
      });
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
      // document.getElementById(name).className = styles.basicSingercam;
      sendMessage("basicSinger", name);
    } else {
      // document.getElementById(name).className = "undefined";
      sendMessage("basicSingerout", name);
    }
  }

  function solosinger() {
    if (document.getElementById(name).className !== styles.soloSingercam) {
      // document.getElementById(name).className = styles.soloSingercam;
      sendMessage("soloSinger", name);
    } else {
      // document.getElementById(name).className = "undefined";
      sendMessage("soloSingerout", name);
    }
  }
  function duetsinger() {
    if (document.getElementById(name).className !== styles.duetSingercam) {
      // document.getElementById(name).className = styles.duetSingercam;
      sendMessage("duetSinger", name);
    } else {
      // document.getElementById(name).className = "undefined";
      sendMessage("duetSingerout", name);
    }
  }

  function duetsinger2() {
    if (document.getElementById(name).className !== styles.duetSingercam2) {
      // document.getElementById(name).className = styles.duetSingercam2;
      sendMessage("duetSinger2", name);
    } else {
      // document.getElementById(name).className = "undefined";
      sendMessage("duetSinger2out", name);
    }
  }
  ///////////////////////////////////////Free모드 캠 움직임
  const [Opacity, setOpacity] = useState(false);
  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };

  function sendChangeModeB() {
    sendMessage("changeMode", "Basic");
  }

  function sendChangeModeF() {
    sendMessage("changeMode", "Free");
  }
  function sendChangeModeS() {
    sendMessage("changeMode", "Solo");
  }
  function sendChangeModeD() {
    sendMessage("changeMode", "Duet");
  }

  function sendstartDream() {
    sendMessage("Contents", "Dream");
  }

  function sendstartGoodDay() {
    sendMessage("Contents", "GoodDay");
  }

  //////////////////////////////////////////////////////////////////////S3 파일 업로드
  //S3 버킷관련 정보들을 포함하고 있는 객체 -> process.env~가 붙은 것은 환경변수 -> 외부에 보여주지 않기 위함. -> npm i dotenv 설치해야
  // const s3 = new AWS.S3({
  //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //   secretAccessKey: process.env.AWS_DEFAULT_REGION,
  //   region: process.env.AWS_DEFAULT_REGION,
  //   //아마존.doc
  //   //apiVersion:
  //   //params: {Bucket: }
  // });

  //UUID 사용할거면, npm i uuid하고 import{v1, v3, v4, v5} from 'uuid';해야
  //v1: 타임스탬프 기준, v3: MD5 해시, v4:랜덤값, v5: SHA-1해시 기준
  // const uploadParams = {
  //   Bucket: process.env.AWS_BUCKET,
  //   Body: file,
  //   key: `image/${v1().toString().replace("-","")}.${file.type.split("/")[1]}`,
  //   ContentType: file.type,
  //   ACL: "public-read",
  // }

  //npm i uuid, npm i 'aws-sdk' 설치
  //import AWS from "aws-sdk"; 임포트
  //버킷, region 값 생성
  const S3_BUCKET = "YOUR_BUCKET_NAME_HERE"; //BUCKET 이름 자리
  const REGION = "YOUR_DESIRED_REGION_HERE"; //Region 값 자리

  AWS.config.update({
    accessKeyId: "", //access키 id 넣기
    secretAccessKey: "", //secretaccess 키 넣기
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET }, //위에서 지정한 BUCKET을 받아와서 생성
    region: REGION,
  });

  // const UploadFileToS3WithNativeSdk = () => {
  const [progress, setProgress] = useState(0); //업로드 로딩 퍼센트 용
  const [selectedFile, setSelectedFile] = useState(null); //선택된 파일 받아오는 함수

  const handleFileInput = (e) => {
    //input 태그에서 저장되는 파일 불러서 저장하는 함수
    setSelectedFile(e.target.files[0]);
    //만약 녹화진행중인 영상 바로 저장할꺼면 e.target.files[0]대신 해당 영상 변수를 넣으면 될 것
  };

  const uploadFile = (file) => {
    //input 태그에 타입이 file이 것의 값을 가져와라
    const params = {
      ACL: "public-read", //공개범위?
      Body: file, //업로드된 파일이 들어갈 자리
      Bucket: S3_BUCKET, //저장될 버켓
      Key: file.name, //파일 이름?
    };

    myBucket
      .putObject(params) //내 버켓에 위에서 설정한 params 를 바탕으로 넣기
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100)); //로딩
      })
      .send((err) => {
        if (err) console.log(err);
      });
  };
  // }

  return (
    <div className={styles.room}>
      <LightRope />
      <Crazylights />
      <Musicbar musicbartitle={musicbartitle} />
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
        {/* 캠무빙  style={{opacity: Opacity? "0.6" : "1"}} -> 넣으면 잡았을때 반투명 되는데 넣으면 빨간줄ㅠㅜ*/}
        {nowMode === "Freemode" ? (
          <div id="video-container" style={{ opacity: Opacity ? "0.6" : "1" }}>
            {session !== undefined ? (
              <Draggable onStart={handleStart} onStop={handleEnd}>
                <div>
                  <UserVideoComponent streamManager={publisher} />
                </div>
              </Draggable>
            ) : null}
            {session !== undefined
              ? subscribers.map((sub, i) => (
                  <div key={i} className="stream-container col-md-6 col-xs-6">
                    <Draggable onStart={handleStart} onStop={handleEnd}>
                      <div>
                        <UserVideoComponent streamManager={sub} />
                      </div>
                    </Draggable>
                  </div>
                ))
              : null}
          </div>
        ) : (
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
        )}
        {/* 켐무빙 */}
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
          sendMessage={sendMessage}
          setOpenFirework={setOpenFirework}
          voiceFilterEcho={voiceFilterEcho}
          voiceFilterMegaPhone={voiceFilterMegaPhone}
          voiceFilterModulation={voiceFilterModulation}
          setstartDream={setstartDream}
          setstartGoodDay={setstartGoodDay}
          sendClap={sendClap}
          sendTambourine={sendTambourine}
          sendFire={sendFire}
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
            sendChangeModeD={sendChangeModeD}
            sendstartDream={sendstartDream}
            sendstartGoodDay={sendstartGoodDay}
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
            sendChangeModeB={sendChangeModeB}
            sendChangeModeF={sendChangeModeF}
            sendChangeModeS={sendChangeModeS}
            sendChangeModeD={sendChangeModeD}
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
