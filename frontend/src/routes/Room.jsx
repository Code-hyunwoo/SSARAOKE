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
import OpenViduVideoComponent from "../components/openvidu/OvVideo";
import UserVideoComponent from "../components/openvidu/UserVideoComponent";
import { OpenVidu } from 'openvidu-browser';
import axios from 'axios';

const OPENVIDU_SERVER_URL = 'https://i6a306.p.ssafy.io';
const OPENVIDU_SERVER_SECRET = 'qwer1234';


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

    const [ mySessionId, setmySessionId] = useState('Room1');
    // const [ myUserName, setmyUserName] = useState({ Nickname }.Nickname);//Nickname으로 쓰임
    const [ session, setsession] = useState(undefined);
    const [ publisher, setpublisher] = useState(undefined);
    const [ subscribers, setsubscribers] = useState([]);
    const [OV, setOV] = useState(undefined);
    
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
    },[]);

    


    useEffect(() => {
      
      // --- 3) Specify the actions when events take place in the session ---
      // my-chat
      if(session !== undefined && OV !== undefined){
        var mySession = session;
        console.log("-----session changed-----");
          console.log(mySession);
          mySession.on('signal:my-chat', (event) => {
              console.log(event.data); // Message
              console.log(event.from); // Connection object of the sender
              // console.log(event.type); // The type of message ("my-chat")
              console.log(
              `[receiveChat] ${event.data}를 받았습니다.`
              );
              setChatArr((chatArr) => chatArr.concat(event.data));
              console.log('[ReceiveMessage]' + event.data);
          });
          mySession.on('signal:YTUrl', (event) => {
              console.log('[ReceiveURL]' + event.data);
              console.log(
                `${event.data} 재생 요청 들어옴 -> YT플레이어로 당장 틀기`
              ); 
              var YTUrl = event.data;
              setnowPlaymusic(YTUrl);
        
          });

          // On every new Stream received...
          mySession.on('streamCreated', (event) => {
              // Subscribe to the Stream to receive it. Second parameter is undefined
              // so OpenVidu doesn't create an HTML video by its own
              let Subscriber = mySession.subscribe(event.stream, undefined);
              // var subscribers = subscribers;
              // subscribers.push(subscriber);
              let subs = subscribers;
              subs.push(Subscriber);
              setsubscribers(...subs);

              // Update the state with the new subscribers
              setsubscribers(subscribers);
              console.log(subscribers);
              // this.setState({
              //     subscribers: subscribers,
              // });
          });

          // On every Stream destroyed...
          mySession.on('streamDestroyed', (event) => {

              // Remove the stream from 'subscribers' array
              deleteSubscriber(event.stream.streamManager);
          });

          // On every asynchronous exception...
          mySession.on('exception', (exception) => {
              console.warn(exception);
          });

          // --- 4) Connect to the session with a valid user token ---

          // 'getToken' method is simulating what your server-side should do.
          // 'token' parameter should be retrieved and returned by your own backend
          getToken().then((token) => {
            console.log('-----getToken then-----');
              // First param is the token got from OpenVidu Server. Second param can be retrieved by every user on event
              // 'streamCreated' (property Stream.connection.data), and will be appended to DOM as the user's nickname
              mySession
                  .connect(
                      token,
                      { clientData: name },
                  )
                  .then(() => {
              let publisher = OV.initPublisher(undefined, {
                          audioSource: undefined, // The source of audio. If undefined default microphone
                          videoSource: undefined, // The source of video. If undefined default webcam
                          publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
                          publishVideo: true, // Whether you want to start publishing with your video enabled or not
                          resolution: '640x480', // The resolution of your video
                          frameRate: 30, // The frame rate of your video
                          insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
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
                      console.log('There was an error connecting to the session:', error.code, error.message);
                  });
          });
        }
    },[session]);
  
    useEffect(() => {
      console.log('입장확인')
      console.log({roomnum})
      console.log({mode})
      register();
    }, []);

    // useEffect(() => {
    //   //시작되자마자 빈 배열 찍히는데 중간에 subscriber 추가할 때는 안 뜸
    //   if(subscribers !== []){
    //     console.log('-----subScribers-----');  
    //     console.log(subscribers);
    //   }
    // }, [subscribers]);
    // useEffect(() => {
    //     console.log('-----publisher-----');  
    //     console.log(publisher);
    // }, [publisher]);


    function componentDidMount() {
      window.addEventListener('beforeunload', onbeforeunload);
    }

    function componentWillUnmount() {
        window.removeEventListener('beforeunload', onbeforeunload);
    }

    function onbeforeunload(event) {
        this.leaveRoom();
    }

    function deleteSubscriber(streamManager) {
      let Subscribers = subscribers;
      let index = Subscribers.indexOf(streamManager, 0);
      if (index > -1) {
          Subscribers.splice(index, 1);
          setsubscribers(Subscribers);
      }
    }

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
      setmySessionId('');
      setpublisher(undefined);
    }
    function sendMessage(type, data){
      const mySession = session;
      mySession.signal({
          data: data,  // Any string (optional)
          to: [],                     // Array of Connection objects (optional. Broadcast to everyone if empty)
          type: type             // The type of message (optional)
      })
      .then(() => {
          console.log(type + ' successfully sent');
      })
        .catch(error => {
          console.error(error);
      });
    }

    function register() {
      console.log("-----Register-----");
      let OV = new OpenVidu();
      setOV(OV);
      setsession(OV.initSession());
      
  }
  
    function sendChat(msg){
      console.log('[sendChat] 이것은 채ㅣㅌㅇ임');
      var chatMsg = { Nickname }.Nickname + ":" + msg;
      console.log(`[sendChat] ${chatMsg}`);
      sendMessage('my-chat', chatMsg)
    }
   
    function sendYTUrl(){
      var YTUrl = bookList[0];
      console.log(`[sendYTUrl]유튜브 요청 보냄, url: ${YTUrl} at room ${room}`);
      sendMessage('YTUrl', YTUrl);
      bookList.shift();
      setbookList(bookList);
      console.log(bookList);
    }

    function nextMusic() {
      var YTUrl = bookList[0];
      sendMessage('YTUrl', YTUrl);
      bookList.shift();
      setbookList(bookList);
      console.log(bookList)
    }

    function audioMute(){
      const me = publisher;
      me.publishAudio(false);
    }
    function videoMute(){
      const me = publisher;
      me.publishVideo(false); 
    }

    function getToken() {
        return createSession(mySessionId).then((sessionId) => createToken(sessionId));
    }

  function createSession(sessionId) {
      return new Promise((resolve, reject) => {
          var data = JSON.stringify({ customSessionId: sessionId });
          axios
              .post(OPENVIDU_SERVER_URL + '/openvidu/api/sessions', data, {
                  headers: {
                      Authorization: 'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
                      'Content-Type': 'application/json',
                  },
              })
              .then((response) => {
                  console.log('CREATE SESION', response);
                  resolve(response.data.id);
              })
              .catch((response) => {
                  var error = Object.assign({}, response);
                  if (error?.response?.status === 409) {
                      resolve(sessionId);
                  } else {
                      console.log(error);
                      console.warn(
                          'No connection to OpenVidu Server. This may be a certificate error at ' +
                          OPENVIDU_SERVER_URL,
                      );
                      if (
                          window.confirm(
                              'No connection to OpenVidu Server. This may be a certificate error at "' +
                              OPENVIDU_SERVER_URL +
                              '"\n\nClick OK to navigate and accept it. ' +
                              'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' +
                              OPENVIDU_SERVER_URL +
                              '"',
                          )
                      ) {
                          window.location.assign(OPENVIDU_SERVER_URL + '/accept-certificate');
                      }
                  }
              });
      });
  }

  function createToken(sessionId) {
      return new Promise((resolve, reject) => {
          var data = {};
          axios
              .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions/" + sessionId + "/connection", data, {
                  headers: {
                      Authorization: 'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
                      'Content-Type': 'application/json',
                  },
              })
              .then((response) => {
                  console.log('TOKEN', response);
                  resolve(response.data.token);
              })
              .catch((error) => reject(error));
      });
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
        <div id="participants">
          {publisher !== undefined ? (
            <UserVideoComponent
              streamManager={publisher} />

          ) : null}
          {(session !== undefined) && (subscribers.length !== 0)?(
            Object.values(subscribers).map((sub, i) => ( 
              <div key={i} className="stream-container col-md-6 col-xs-6">
              <UserVideoComponent streamManager={sub} />
              </div>
            ))) 
            : null 
          }
        </div> 
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