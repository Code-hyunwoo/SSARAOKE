import {React} from 'react';
import styles from "../components/roomin/Room.module.css";
import Screen from "../components/roomin/Screen";
import kurentoUtils from 'kurento-utils'

const PARTICIPANT_MAIN_CLASS = 'participant main';
const PARTICIPANT_CLASS = 'participant';

/**
 * Creates a video element for a new participant
 *
 * @param {String} name - the name of the new participant, to be used as tag
 *                        name of the video element.
 *                        The tag of the new element will be 'video<name>'
 * @return
 */
function Participant(name) {
    //span, video(사용자 영상)
    this.name = name;
    var container = document.createElement('div');
    container.className = isPresentMainParticipant() ? PARTICIPANT_CLASS : PARTICIPANT_MAIN_CLASS;
    container.id = name;

    console.log("creating video")
    var span = document.createElement('span');
    var video = document.createElement('video');
    var rtcPeer;

    container.appendChild(video);
    container.appendChild(span);
    container.onclick = switchContainerClass;
    document.getElementById('participants').appendChild(container);

    span.appendChild(document.createTextNode(name));

    video.id = 'video-' + name;
    video.autoplay = true;
    video.controls = false;


    console.log("DONE")

    this.getElement = function() {
        return container;
    }

    this.getVideoElement = function() {
        return video;
    }

    function switchContainerClass() {
        if (container.className === PARTICIPANT_CLASS) {
            var elements = Array.prototype.slice.call(document.getElementsByClassName(PARTICIPANT_MAIN_CLASS));
            elements.forEach(function(item) {
                item.className = PARTICIPANT_CLASS;
            });

            container.className = PARTICIPANT_MAIN_CLASS;
        } else {
            container.className = PARTICIPANT_CLASS;
        }
    }

    function isPresentMainParticipant() {
        return ((document.getElementsByClassName(PARTICIPANT_MAIN_CLASS)).length != 0);
    }

    this.offerToReceiveVideo = function(error, offerSdp, wp){
        if (error) return console.error ("sdp offer error")
        console.log('Invoking SDP offer callback function');
        var msg =  { id : "receiveVideoFrom",
            sender : name,
            sdpOffer : offerSdp
        };
        sendMessage(msg);
    }


    this.onIceCandidate = function (candidate, wp) {
        console.log("Local candidate" + JSON.stringify(candidate));

        var message = {
            id: 'onIceCandidate',
            candidate: candidate,
            name: name
        };
        sendMessage(message);
    }

    Object.defineProperty(this, 'rtcPeer', { writable: true});

    this.dispose = function() {
        console.log('Disposing participant ' + this.name);
        this.rtcPeer.dispose();
        container.parentNode.removeChild(container);
    };
}

var ws = new WebSocket('wss://i6a306.p.ssafy.io:8443/groupcall');
ws.onopen = () => {
    console.log('WebSocket Client Connected');
};
var participants = {};
var name;
var room;

window.onbeforeunload = function() {
    ws.close();
};

ws.onmessage = function(message) {
    var parsedMessage = JSON.parse(message.data);
    console.info('Received message: ' + message.data);

    switch (parsedMessage.id) {
        case 'existingParticipants':
            onExistingParticipants(parsedMessage);
            break;
        case 'newParticipantArrived':
            onNewParticipant(parsedMessage);
            break;
        case 'participantLeft':
            onParticipantLeft(parsedMessage);
            break;
            case 'receiveChat': //채팅을 받았습니다!
            onReceiveChat(parsedMessage);
            break;
        case 'receiveYTUrl': //야 이거 당장 틀어야 함
            onReceiveYTUrl(parsedMessage);
            break;
        case 'receiveVideoAnswer':
            receiveVideoResponse(parsedMessage);
            break;
        case 'iceCandidate':
            participants[parsedMessage.name].rtcPeer.addIceCandidate(parsedMessage.candidate, function (error) {
                if (error) {
                    console.error("Error adding candidate: " + error);
                    return;
                }
            });
            break;
        default:
            console.error('Unrecognized message', parsedMessage);
    }
}

/*채팅, 유튜브 링크 */
//채팅 받았을 때(공용)
function onReceiveChat(sender){
    if(sender.name == name){
        sender.name = '나';
    }
    console.log(`[receiveChat] ${sender.name}님이 ${sender.room}에 ${sender.msg}를 보냈습니다.`);
}
//채팅 보낼 때
function sendChat(){
    var chatMsg = document.getElementById('input_chat').value;
    var message = {
        id : 'sendChat',
        name : name,    //내 이름 
        room : room,    //현재 룸
        msg: chatMsg,
    }
    console.log(`[sendChat] ${name}: ${chatMsg} at room ${room}`);
    sendMessage(message);
}
//유튜브 url 수신했을 경우(공용)
function onReceiveYTUrl(request){
    console.log(`${request.room}에 ${request.url} 재생 요청 들어옴 -> YT플레이어로 당장 틀기`);
    YTUrl = request.url;
    //목표: Screen의 react-player에서 YTUrl을 재생해야 함 
    //재생하는 코드가 이 자리에 있어야 함 
}
//유튜브 url 발신하는 경우(방장만, 현재 유튜브 재생 끝났을 때)
function sendYTUrl(){
    //시작 버튼 눌러서 호출했을 경우 해당 곡을 시그널링으로 보냄
    //자동재생의 경우 일단 5초 쉬었다가
        //뮤직바 처음에 있는 곡을 시그널링에 보내고 
        //예약목록에서 지우는 거 여기서 하나? 여기서 해야하나? 일단 지움
    var YTUrl = "https://youtu.be/D5Y11hwjMNs"; //여기에 다음 곡 song_no로 검색해서 url 끌어와야함
    var message = {
        id: 'sendYTUrl',
        room: room,
        url: YTUrl,
    }//url
    console.log(`[sendYTUrl]유튜브 요청 보냄, url: ${YTUrl} at room ${room}`);
    sendMessage(message);
}


function onNewParticipant(request) {
    receiveVideo(request.name);
}

function receiveVideoResponse(result) {
    participants[result.name].rtcPeer.processAnswer (result.sdpAnswer, function (error) {
        if (error) return console.error (error);
    });
}

function callResponse(message) {
    if (message.response != 'accepted') {
        console.info('Call not accepted by peer. Closing call');
        window.stop();
    } else {
        kurentoUtils.WebRtcPeer.processAnswer(message.sdpAnswer, function (error) {
            if (error) return console.error (error);
        });
    }
}

function onExistingParticipants(msg) {
	var constraints = {
		audio : true,
		video : {
			mandatory : {
				maxWidth : 320,
				maxFrameRate : 15,
				minFrameRate : 15
			}
		}
	};
	console.log(name + " registered in room ");
	var participant = new Participant(name);
	participants[name] = participant;
	var video = participant.getVideoElement();

	var options = {
	      localVideo: video,
	      mediaConstraints: constraints,
		configuration: {
			iceServers:[{urls: 'turn:3.38.244.111:3478', username:'ssaraoke', credential: 'qwer1234'}],
			iceTransportPolicy: 'relay'
		},
	      onicecandidate: participant.onIceCandidate.bind(participant)
	    }
	participant.rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerSendonly(options,
		function (error) {
		  if(error) {
			  return console.error(error);
		  }
		  this.generateOffer (participant.offerToReceiveVideo.bind(participant));
	});

	msg.data.forEach(receiveVideo);
}

function leaveRoom() {
    sendMessage({
        id : 'leaveRoom'
    });

    for ( var key in participants) {
        participants[key].dispose();
    }
    document.getElementById('join').style.display = 'block';
    document.getElementById('room').style.display = 'none';

    ws.close();
}

function receiveVideo(sender) {
	var participant = new Participant(sender);
	participants[sender] = participant;
	var video = participant.getVideoElement();

	var options = {
      remoteVideo: video,
	configuration: {
		iceServers: [{urls: 'turn:3.38.244.111:3478', username:'ssaraoke', credential:'qwer1234'}],
		iceTransportPolicy: 'relay'
	},
      onicecandidate: participant.onIceCandidate.bind(participant)
    }

	participant.rtcPeer = new kurentoUtils.WebRtcPeer.WebRtcPeerRecvonly(options,
			function (error) {
			  if(error) {
				  return console.error(error);
			  }
			  this.generateOffer (participant.offerToReceiveVideo.bind(participant));
	});;
}

function onParticipantLeft(request) {
    console.log('Participant ' + request.name + ' left');
    var participant = participants[request.name];
    participant.dispose();
    delete participants[request.name];
}

function sendMessage(message) {
    var jsonMessage = JSON.stringify(message);
    console.log('Sending message: ' + jsonMessage);
    ws.send(jsonMessage);
}

var YTUrl="";

const GroupCall = () =>{
    function register() {
        name = document.getElementById('name').value;
        room = document.getElementById('roomName').value;
        
        document.getElementById('room-header').innerText = 'ROOM ' + room;
        document.getElementById('participants').innerText = '내 이름은 ' + name;
        document.getElementById('join').style.display = 'none';
        document.getElementById('room').style.display = 'block';

        var message = {
            id : 'joinRoom',
            name : name,
            room : room,
        }
        sendMessage(message);
    }
    return(
        <div id="container">
          <div id="wrapper">
            <div id="join" style={{display: "block"}}>
              <div acceptCharset="UTF-8">
                <p>
                  <input type="text" name="name" defaultValue={""} id="name"
                    placeholder="Username" required/>
                </p>
                <p>
                  <input type="text" name="room" defaultValue={""} id="roomName"
                    placeholder="Room" required/>
                </p>
                    <button id='submitBtn' onClick={register} >Join</button>
              </div>
            </div>
            <div id="room" style={{display: "none"}}>
                <h2 id="room-header">룸</h2>
                <div id="participants"></div>

                {/*채팅, 링크 관련*/}
                <Screen mode={styles.ScreenBasic}/>
                <input type="text" id="input_chat" placeholder={"전송할 메세지를 입력하세요"}></input>
                <input type="button" id="button-leave" onClick={sendChat}
                    defaultValue={"채팅 전송"}/>
                <input type="button" id="button-leave" onClick={sendYTUrl}
                    defaultValue={"링크 전송(방장권한)"}/>
    
                <input type="button" id="button-leave" onMouseUp={leaveRoom}
                    defaultValue={"Leave Room"}/>
            </div>
          </div>
        </div>
    )
}

export default GroupCall;