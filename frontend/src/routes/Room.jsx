import styles from "../components/roomin/Room.module.css";
import Musicbar from "../components/roomin/Musicbar";
import Screen from "../components/roomin/Screen";
import RoomChat from "../components/roomin/R_Chat";
import Button from "../components/roomin/Button";
import MirrorBall from "../components/roomin/MirrorBall";
import LightRope from "../components/roomin/LightRope";
import ChangeMode from "../components/roomin/ChangeMode";
import { useState } from "react";
import Crazylights from "../components/roomin/Crazylights";
import { Link, useParams } from "react-router-dom";
import Controller from "../components/remote/Controller";
import kurentoUtils from "kurento-utils";
import { connect } from "react-redux";
import { useEffect } from "react";
import Firework from "../components/remote/Firework";
import AWS from "aws-sdk";

////////////////////////////////////////////////////////////participants
var participants = {};
function Participant(name, sendMessage) {

  this.name = name;
  var container = document.createElement("div");
  container.id = name;

  console.log("creating video");
  var span = document.createElement("span");
  var video = document.createElement("video");
  var rtcPeer;

  container.appendChild(video);
  container.appendChild(span);
  document.getElementById("participants").appendChild(container);

  span.appendChild(document.createTextNode(name));

  video.id = "video-" + name;
  video.autoplay = true;
  video.controls = false;

  console.log("DONE");

  this.getElement = function () {
    return container;
  };

  this.getVideoElement = function () {
    return video;
  };

  this.offerToReceiveVideo = function (error, offerSdp, wp) {
    if (error) return console.error("sdp offer error");
    console.log("Invoking SDP offer callback function");
    var msg = { id: "receiveVideoFrom", sender: name, sdpOffer: offerSdp };
    sendMessage(msg);
  };

  this.onIceCandidate = function (candidate, wp) {
    console.log("Local candidate" + JSON.stringify(candidate));

    var message = {
      id: "onIceCandidate",
      candidate: candidate,
      name: name,
    };
    sendMessage(message);
  };

  Object.defineProperty(this, "rtcPeer", { writable: true });

  this.dispose = function () {
    console.log("Disposing participant " + this.name);
    this.rtcPeer.dispose();
    container.parentNode.removeChild(container);
  };
}


////////////////////////////////////////////////////////////Room

function Room({ Nickname }) {
    

    const [openChangeMode, setOpenChangeMode] = useState(false);
    const [openFirework, setOpenFirework] =useState(false);
    const practice = [
      "https://www.youtube.com/watch?v=Xk7_eEx58ds",
      "https://www.youtube.com/watch?v=4gXmClk8rKI",
      "https://www.youtube.com/watch?v=t8KtQ8-nImI",
    ];
    const [bookList, setbookList] = useState(practice);
    const [nowPlaymusic, setnowPlaymusic] = useState("");
    // const [participants,setParticipants] = useState({});    //서버에서 보내 줄 현재 참여자 내역
    const [chatArr, setChatArr] = useState([]);
  
    const name = { Nickname }.Nickname; //redux에 저장된 user nickname
    const {mode, roomnum} = useParams();
    const room = {roomnum}.roomnum; //redux에 저장된 room_seq
    const firstmode = {mode}.mode;

    const [ transScreen, settransScreen] = useState(styles.ScreenBasic);
    const [ transCamBox, settransCamBox] = useState(styles.BasicCamBox);
    const [ transChatBox, settransChatBox] = useState(styles.BasicChatBox);
    const [ transChat, settransChat] = useState(styles.BasicChat);
    const [ nowMode, setnowMode] = useState('Basicmode');

    function transformBasic() {
        settransScreen(styles.ScreenBasic);
        settransCamBox(styles.BasicCamBox);
        settransChatBox(styles.BasicChatBox);
        settransChat(styles.BasicChat);
        setnowMode('Basicmode')
    }

    function transformSolo() {
        settransScreen(styles.ScreenSolo);
        settransCamBox(styles.SoloCamBox);
        settransChatBox(styles.SoloChatBox);
        settransChat(styles.SoloChat);
        setnowMode('Solomode')
    }

    function transformDuet() {
        settransScreen(styles.ScreenDuet);
        settransCamBox(styles.DuetCamBox);
        settransChatBox(styles.DuetChatBox);
        settransChat(styles.FreeChat);
        setnowMode('Duetmode')
    }

    function transformFree() {
        settransScreen(styles.ScreenFree);
        settransCamBox(styles.FreeCamBox);
        settransChatBox(styles.FreeChatBox);
        settransChat(styles.FreeChat);
        setnowMode('Freemode')
    }
    
    useEffect(() => {
      if (firstmode ==='Basic'){
        transformBasic();
      } else if(firstmode === 'Free'){
        transformFree();
      } else if(firstmode === 'Solo'){
        transformSolo();
      } else if(firstmode === 'Duet'){
        transformDuet();
      }
    },[])
    //갈아치워야 할 기존 영역
  
    var ws = new WebSocket("wss://i6a306.p.ssafy.io:8443/groupcall");
    useEffect(() => {
      console.log('입장확인')
      console.log({roomnum})
      console.log({mode})
      ws.onopen = () => {
      register()
      console.log("WebSocket Client Connected");
    };
  }, []);
  //   ws.onopen = () => {
  //     register()
  //     console.log("WebSocket Client Connected");
  //   };
  
    ws.onmessage = function (message) {
      var parsedMessage = JSON.parse(message.data);
      console.info("Received message: " + message.data);
  
      switch (parsedMessage.id) {
        case "existingParticipants":
          onExistingParticipants(parsedMessage);
          break;
        case "newParticipantArrived":
          onNewParticipant(parsedMessage);
          break;
        case "participantLeft":
          onParticipantLeft(parsedMessage);
          break;
        case "receiveChat": //채팅을 받았습니다!
          onReceiveChat(parsedMessage);
          break;
        case "receiveYTUrl": //야 이거 당장 틀어야 함
          onReceiveYTUrl(parsedMessage);
          break;
        case "receiveVideoAnswer":
          receiveVideoResponse(parsedMessage);
          break;
        case "iceCandidate":
          participants[parsedMessage.name].rtcPeer.addIceCandidate(
            parsedMessage.candidate,
            function (error) {
              if (error) {
                console.error("Error adding candidate: " + error);
                return;
              }
            }
          );
          break;
        default:
          console.error("Unrecognized message", parsedMessage);
      }
    };
  
    function onNewParticipant(request) {
      receiveVideo(request.name);
    }
  
    function receiveVideoResponse(result) {
      participants[result.name].rtcPeer.processAnswer(
        result.sdpAnswer,
        function (error) {
          if (error) return console.error(error);
        }
      );
    }
  
    function callResponse(message) {
      if (message.response != "accepted") {
        console.info("Call not accepted by peer. Closing call");
        window.stop();
      } else {
        kurentoUtils.WebRtcPeer.processAnswer(
          message.sdpAnswer,
          function (error) {
            if (error) return console.error(error);
          }
        );
      }
    }
  
    function onExistingParticipants(msg) {
      var constraints = {
        audio: true,
        video: {
          mandatory: {
            maxWidth: 320,
            maxFrameRate: 15,
            minFrameRate: 15,
          },
        },
      };
      console.log(name + " registered in room ");
      var participant = new Participant(name, sendMessage);
      console.log("=====Participant=====");
      console.log(participant);
      participants[name] = participant;
      // setParticipants(participants[name] = participant);
      var video = participant.getVideoElement();
  
      var options = {
        localVideo: video,
        mediaConstraints: constraints,
        configuration: {
          iceServers: [
            {
              urls: "turn:3.38.244.111:3478",
              username: "ssaraoke",
              credential: "qwer1234",
            },
          ],
          iceTransportPolicy: "relay",
        },
        onicecandidate: participant.onIceCandidate.bind(participant),
      };
      participant.rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerSendonly(
        options,
        function (error) {
          if (error) {
            return console.error(error);
          }
          this.generateOffer(participant.offerToReceiveVideo.bind(participant));
        }
      );
  
      msg.data.forEach(receiveVideo);
    }
  
    function leaveRoom() {
      sendMessage({
        id: "leaveRoom",
      });
      console.log(participants);
      for (var key in participants) {
        participants[key].dispose();
      }
      ws.close();
    }
  
    function receiveVideo(sender) {
      var participant = new Participant(sender, sendMessage);
      // setParticipants(participants[sender] = participant);
      participants[sender] = participant;
      var video = participant.getVideoElement();
  
      var options = {
        remoteVideo: video,
        configuration: {
          iceServers: [
            {
              urls: "turn:3.38.244.111:3478",
              username: "ssaraoke",
              credential: "qwer1234",
            },
          ],
          iceTransportPolicy: "relay",
        },
        onicecandidate: participant.onIceCandidate.bind(participant),
      };
  
      participant.rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerRecvonly(
        options,
        function (error) {
          if (error) {
            return console.error(error);
          }
          this.generateOffer(participant.offerToReceiveVideo.bind(participant));
        }
      );
    }
  
    function onParticipantLeft(request) {
      console.log("Participant " + request.name + " left");
      var participant = participants[request.name];
      participant.dispose();
      // setParticipants(delete participants[request.name]);
      delete participants[request.name];
    }
  
    function sendMessage(message) {
      var jsonMessage = JSON.stringify(message);
      console.log("Sending message: " + jsonMessage);
      ws.send(jsonMessage);
    }
  
    function register() {
      var message = {
        id: "joinRoom",
        name: { Nickname }.Nickname,
        room: room,
      };
      sendMessage(message);
    }
    /*채팅, 유튜브 링크 */
    //채팅 받았을 때(공용)
    function onReceiveChat(sender) {
      console.log(
        `[receiveChat] ${sender.name}님이 ${sender.room}에 ${sender.msg}를 보냈습니다.`
      );
      setChatArr((chatArr) => chatArr.concat(sender));
    }
  
    //채팅 보낼 때
    function sendChat(msg) {
      var chatMsg = msg;
      var name = { Nickname }.Nickname;
      var message = {
        id: "sendChat",
        name: name, //내 이름
        room: room, //현재 룸
        msg: chatMsg,
      };
      console.log(`[sendChat] ${name}: ${chatMsg} at room ${room}`);
      sendMessage(message);
    }
  
    //유튜브 url 발신
    //노래 끝났고 다음 노래 재생해야 하는 경우 방장이 호출
    //현재 재생되는 노래 없을 경우 시작 버튼 누른 사람이 호출
    function sendYTUrl() {
      var YTUrl = bookList[0];
      var message = {
        id: "sendYTUrl",
        room: room,
        url: YTUrl, //axios로 받아온 예약리스트 첫번째 걸 setting.
      };
      console.log(`[sendYTUrl]유튜브 요청 보냄, url: ${YTUrl} at room ${room}`);
      sendMessage(message); //메세지 send하고
      bookList.shift();
      setbookList(bookList);
      console.log(bookList);
    }
  
    function onReceiveYTUrl(request) {
      //server에서 받아서 setNowPlayMusic
      console.log(
        `${request.room}에 ${request.url} 재생 요청 들어옴 -> YT플레이어로 당장 틀기`
      );
      var YTUrl = request.url;
      setnowPlaymusic(YTUrl);
    }
  
    function nextMusic() {
      var YTUrl = bookList[0];
      var message = {
        id: "sendYTUrl",
        room: room,
        url: YTUrl,
      };
      // console.log(YTUrl)
      sendMessage(message);
      bookList.shift();
      setbookList(bookList);
      // console.log(bookList)
    }
  
    function audioMute() {
      if (participants[name].rtcPeer.audioEnabled) {
        console.log("마이크 끄기");
        participants[name].rtcPeer.audioEnabled = false;
      } else {
        console.log("마이크 켜기");
        participants[name].rtcPeer.audioEnabled = true;
      }
    }
    function videoMute() {
      if (participants[name].rtcPeer.videoEnabled) {
        console.log("비디오 끄기");
        participants[name].rtcPeer.videoEnabled = false;
      } else {
        console.log("비디오 켜기");
        participants[name].rtcPeer.videoEnabled = true;
      }
    }
  
    function basicsinger(){
      if (document.getElementById(name).className !== styles.basicSingercam) {
        document.getElementById(name).className=styles.basicSingercam
    } else {
        document.getElementById(name).className = "undefined"
    }
  }
  
    function solosinger(){
      
      if (document.getElementById(name).className !== styles.soloSingercam) {
          document.getElementById(name).className=styles.soloSingercam
    } else {
          document.getElementById(name).className = "undefined"
    }
  }
    function duetsinger(){
    if (document.getElementById(name).className !== styles.duetSingercam) {
      document.getElementById(name).className=styles.duetSingercam
  } else {
      document.getElementById(name).className = "undefined"
}
  }

    function duetsinger2(){
    if (document.getElementById(name).className !== styles.duetSingercam2) {
      document.getElementById(name).className=styles.duetSingercam2
  } else {
      document.getElementById(name).className = "undefined"
}
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
  const S3_BUCKET = 'YOUR_BUCKET_NAME_HERE'; //BUCKET 이름 자리
  const REGION = 'YOUR_DESIRED_REGION_HERE'; //Region 값 자리

  AWS.config.update({
    accessKeyId: '', //access키 id 넣기
    secretAccessKey: '', //secretaccess 키 넣기
  });

  const myBucket = new AWS.S3({
    params: {Bucket: S3_BUCKET}, //위에서 지정한 BUCKET을 받아와서 생성
    region: REGION,
  })

  // const UploadFileToS3WithNativeSdk = () => {
    const [progress, setProgress] = useState(0); //업로드 로딩 퍼센트 용
    const [selectedFile, setSelectedFile] = useState(null); //선택된 파일 받아오는 함수

    const handleFileInput = (e) => { //input 태그에서 저장되는 파일 불러서 저장하는 함수
      setSelectedFile(e.target.files[0]); 
      //만약 녹화진행중인 영상 바로 저장할꺼면 e.target.files[0]대신 해당 영상 변수를 넣으면 될 것
    }

    const uploadFile = (file) => { //input 태그에 타입이 file이 것의 값을 가져와라
      const params = {
        ACL: "public-read", //공개범위?
        Body: file, //업로드된 파일이 들어갈 자리
        Bucket: S3_BUCKET, //저장될 버켓
        Key: file.name //파일 이름?
      };

      myBucket.putObject(params) //내 버켓에 위에서 설정한 params 를 바탕으로 넣기
        .on('httpUploadProgress', (evt) => {
          setProgress(Math.round((evt.loaded / evt.total)* 100)) //로딩
        })
        .send((err) => {
          if(err) console.log(err)
        })
    }
  // }



  return (
    <div className={styles.room}>
      <LightRope />
      <Crazylights />
      <Musicbar />
      <MirrorBall />
      <Screen
        mode={transScreen}
        now={nowPlaymusic}
        nextMusic={nextMusic}
      />
      {openFirework && <Firework/>}
      <div className={transCamBox}>
        <div id="participants"></div>
      </div>
      <div className={transChatBox}>
        <RoomChat
          mode={transChat}
          sendChat={sendChat}
          chatArr={chatArr}
        />
      </div>
      <div className={styles.ButtonBox}>
        <Button text={"마이크"} getOnClick={audioMute} />
        <Button text={"캠"} getOnClick={videoMute} />
        {nowMode === 'Basicmode' && <Button text={"Singer"} getOnClick={basicsinger} /> }
        {nowMode === 'Freemode' && <Button text={"Singer"} getOnClick={basicsinger} /> }
        {nowMode === 'Solomode' && <Button text={"Singer"} getOnClick={solosinger} />}
        {nowMode === 'Duetmode' && <Button text={"Singer1"} getOnClick={duetsinger} />}
        {nowMode === 'Duetmode' && <Button text={"Singer2"} getOnClick={duetsinger2} />}
        <Controller book={bookList} sendYTUrl={sendYTUrl} setOpenFirework={setOpenFirework}/>
        <Button text={"컨텐츠"} />
        <button
          className={(styles.btn, styles.neon)}
          onClick={() => {
            setOpenChangeMode(true);
          }}
        >
          {" "}
          모드선택{" "}
        </button>
        {openChangeMode && 
        <ChangeMode 
        closeChangeMode={setOpenChangeMode} 
        transformBasic={transformBasic}
        transformSolo={transformSolo}
        transformDuet={transformDuet}
        transformFree={transformFree}
        />}
        {/* 영상 저장버튼 */}
        <input type="file" onChange={handleFileInput} />
        <button onClick={() => uploadFile(selectedFile)}></button>
        {/*  */}
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
    const Nickname = state[0].nickname;
    return { Nickname };
  }
  
  export default connect(mapStateToProps, null)(Room);