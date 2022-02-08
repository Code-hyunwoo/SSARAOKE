import React, { useCallback, useEffect, useState } from "react";
import "./Lobbychat.css";
import io from "socket.io-client";
import ReactScrollableFeed from "react-scrollable-feed"
  

const socket = io.connect("http://localhost:80");
socket.emit("init", "연결되었습니다.");

function Lobbychat() {
  
  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState({ name: "", message: "" });
  
  useEffect(() => {
    return () => {
      socket.close();
    };
  }, []);
  
  useEffect(() => {
    socket.on("receive message", (message) => {
      setChatArr((chatArr) => chatArr.concat(message));
    }); //receive message이벤트에 대한 콜백을 등록해줌
  }, []);
  const buttonHandler = useCallback(() => {
    socket.emit("send message", { name: chat.name, message: chat.message }); 
    //버튼을 클릭했을 때 send message이벤트 발생
    setChat({name: chat.name, message: ""})
  }, [chat]);
  const changeMessage = useCallback(
    (e) => {
      setChat({ name: chat.name, message: e.target.value });
    },
    [chat]
  );
  const changeName = useCallback(
    (e) => {
      setChat({ name: e.target.value, message: chat.message });
    },
    [chat]
  );

  const onKeyPress=(e)=> {
    if(e.key ==='Enter'){
      buttonHandler();
      e.target.value = ''
    }
  }

  return (
    <div className="ChatScreen">
      <div className="Box">
        <div className="ChatBox">
          <ReactScrollableFeed>
          {chatArr.map((ele) => (
            <div className="Chat">
              <span className="ChatName">{ele.name} :</span>
              <span className="ChatContent">{ele.message}</span>
            </div>
          ))}
          </ReactScrollableFeed>
        </div>
        <div className="InputBox">
          <input placeholder="이름" className="Nick" onChange={changeName}></input>
          <input placeholder="메세지" className="Contents" onChange={changeMessage} onKeyPress={onKeyPress} required maxLength='48'></input>
          <button className="chatbtn" onClick={buttonHandler}>등록</button>
        </div>
      </div>
    </div>
  );
}

export default Lobbychat;