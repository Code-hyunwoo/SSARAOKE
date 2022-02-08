import styles from "../components/roomin/Room.module.css";
import Musicbar from "../components/roomin/Musicbar";
import Screen from "../components/roomin/Screen";
import NormalCam from "../components/roomin/NormalCam";
import RoomChat from "../components/roomin/R_Chat";
import Button from "../components/roomin/Button";
import MirrorBall from "../components/roomin/MirrorBall";
import LightRope from "../components/roomin/LightRope";
import ChangeMode from "../components/roomin/ChangeMode";
import { useState } from "react"
import Crazylights from "../components/roomin/Crazylights";
import { Link } from "react-router-dom";
import Controller from "../components/remote/Controller";
import kurentoUtils from 'kurento-utils'
import Participant from "../components/roomin/Participants";

function Basic (){
    const [openChangeMode, setOpenChangeMode] = useState(false);
    const practice = ['https://www.youtube.com/watch?v=Xk7_eEx58ds','https://www.youtube.com/watch?v=4gXmClk8rKI', 'https://www.youtube.com/watch?v=t8KtQ8-nImI']
    const [bookList, setbookList] =  useState(practice);
    const [nowPlaymusic,setnowPlaymusic] = useState('');
    const [participants,setParticipants] = useState({});    //서버에서 보내 줄 현재 참여자 내역
    const name = "구아"; //redux에 저장된 user nickname
    const room = "1"; //redux에 저장된 room_seq

    //갈아치워야 할 기존 영역

    var ws = new WebSocket('wss://i6a306.p.ssafy.io:8443/groupcall');
    ws.onopen = () => {
        console.log('WebSocket Client Connected');
    };

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
        //107이나 108중에 하나 안돌아감
        var participant = new Participant(name, sendMessage);
        console.log("=====Participant:[구아]=====")
        console.log(participant);
        setParticipants(participants[name] = participant);
        // console.log("=====Participants[구아]=====")
        // console.log(participants['구아']);
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
        console.log(participants);
        for ( var key in participants) {
            participants[key].dispose();
        }
        document.getElementById('join').style.display = 'block';
        document.getElementById('room').style.display = 'none';

        ws.close();
    }

    function receiveVideo(sender) {
        var participant = new Participant(sender, sendMessage);
        setParticipants(participants[sender] = participant);
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
        setParticipants(delete participants[request.name]);
    }

    function sendMessage(message) {
        var jsonMessage = JSON.stringify(message);
        console.log('Sending message: ' + jsonMessage);
        ws.send(jsonMessage);
    }

    function register() {
        // name = document.getElementById('name').value;
        // room = document.getElementById('roomName').value;
        
        // document.getElementById('room-header').innerText = 'ROOM ' + room;
        // document.getElementById('participants').innerText = '내 이름은 ' + name;
        // document.getElementById('join').style.display = 'none';
        // document.getElementById('room').style.display = 'block';

        var message = {
            id : 'joinRoom',
            name : '구아',
            room : '1',
        }
        sendMessage(message);
    }
        /*채팅, 유튜브 링크 */
    //채팅 받았을 때(공용)
    function onReceiveChat(sender){
        // if(sender.name == name){
        //     sender.name = '나';
        // }
        console.log(`[receiveChat] ${sender.name}님이 ${sender.room}에 ${sender.msg}를 보냈습니다.`);
    }
    //채팅 보낼 때
    function sendChat(){
        var chatMsg = document.getElementById('chatTxt').value;
        var name='구아';
        var room = '1';
        var message = {
            id : 'sendChat',
            name : name,    //내 이름 
            room : room,    //현재 룸
            msg: chatMsg,
        }
        console.log(`[sendChat] ${name}: ${chatMsg} at room ${room}`);
        sendMessage(message);
    }

    //유튜브 url 발신
    //노래 끝났고 다음 노래 재생해야 하는 경우 방장이 호출
    //현재 재생되는 노래 없을 경우 시작 버튼 누른 사람이 호출
    function sendYTUrl(){
        setbookList(bookList);  //이거 꼭 필요할까요
        var YTUrl = bookList[0];
        var message = {
            id: 'sendYTUrl',
            room: room,
            url: YTUrl,   //axios로 받아온 예약리스트 첫번째 걸 setting.
        }
        console.log(`[sendYTUrl]유튜브 요청 보냄, url: ${YTUrl} at room ${room}`);
        sendMessage(message);   //메세지 send하고 
        bookList.shift();
        setbookList(bookList);
        console.log(bookList)
    }

    function onReceiveYTUrl(request){   //server에서 받아서 setNowPlayMusic
        console.log(`${request.room}에 ${request.url} 재생 요청 들어옴 -> YT플레이어로 당장 틀기`);
        var YTUrl = request.url;
        setnowPlaymusic(YTUrl)
    }

    // function testmusic(){
    //     setnowPlaymusic(bookList[0]);
    // }
    
    function nextMusic(){

        var YTUrl = bookList[0]; 
        var message = {
             id: 'sendYTUrl',
            // room: room,
             // url: YTUrl,
        }
        console.log(YTUrl)  
        setnowPlaymusic(bookList[0]);
        bookList.shift();
        setbookList(bookList);
        console.log(bookList)
    }

    return (
        <div className={styles.room}>
            <input type={"button"} onClick={register} defaultValue={"구아로 1번방입장"}></input>
            <input type={"text"} id={"chatTxt"}></input>
            <input type={"button"} onClick={sendChat} defaultValue={"채팅전송"}></input>
            <input type={"button"} onClick={sendYTUrl} defaultValue={"url전송"}></input>
            <input type={"button"} onClick={leaveRoom} defaultValue={"바이바이"}></input>
            
            
            <LightRope />
            <Crazylights />
            <Musicbar />
            <MirrorBall />
            <Screen mode={styles.ScreenBasic} now={nowPlaymusic} nextMusic={nextMusic}/>
            <div className={styles.BasicCamBox}>
                 <div id="participants"></div>
                 <NormalCam mode={styles.BasicNormalCam} sendMessage={sendMessage}/>
                 {/* <NormalCam mode={styles.BasicNormalCam}/>
                 <NormalCam mode={styles.BasicNormalCam}/>
                 <NormalCam mode={styles.BasicNormalCam}/>  
                 <NormalCam mode={styles.BasicNormalCam}/>  
                 <NormalCam mode={styles.BasicNormalCam}/>   */}
            </div>
            <div className={styles.BasicChatBox}>
                <RoomChat mode={styles.BasicChat} />
            </div>
            <div className={styles.ButtonBox}>
                <Button text={"마이크"}/>
                <Button text={"캠"}/>
                <Controller book={bookList} sendYTUrl={sendYTUrl}/>
                
                <Button text={"컨텐츠"}/>
                <button className={styles.btn, styles.neon} 
                onClick={()=> {
                    setOpenChangeMode(true);
                }}> 모드선택 </button>
                {openChangeMode && <ChangeMode closeChangeMode={setOpenChangeMode}/>}
                <button className={styles.btn,  styles.neon}><Link to='/lobby' id={styles.btn_no}> 나가기</Link></button>
            </div> 
        </div>
    ) 
}


export default Basic;