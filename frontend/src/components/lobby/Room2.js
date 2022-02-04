// import { Button, Card, Image } from "react-bootstrap";
import React from "react";
// import Styles from "./Lobby.module.css"
// import L_Chat from "./L_Chat";
// import Lockpicture from "./img/lockpicture.jpg";
// import duet from "./img/duet.jpg";
// import free from "./img/free.jpg";
// import { Link } from "react-router-dom";
import Room1line from "./Room1line";
import Roomline2 from "./Roomline2";
import Roomline3 from "./Roomline3";
import Roomline4 from "./Roomline4";
import Roomline5 from "./Roomline5";

// import styled from "styled-components";

function Room() {

    // const roomSen = styled.Room` top: 58%`;

    return(
        <div>
            {/* 윗줄 */}
            <Room1line />
            
        {/* 두번째 줄은 top:'68%', 세번째 줄은 top:'106%', 
                네번째 줄은 top:'144%', 세번째 줄은 top:'182%'*/}

            {/* <div style={{top:'68%'}}> */}
                {/* <Room2line/> */}
                {/* <Room2line style={{top:'68%'}}/> */}
            {/* </div>
            <div style={{top:'106%'}}>
                <Room2line />
            </div>
            <div style={{top:'106%'}}>
                <Room2line />
            </div>
            <div style={{top:'106%'}}>
                <Room2line />
            </div> */}

            {/* 두번째 아랫줄 */}
            {/* <Room2line /> */}
            <Roomline2 />
            
            {/* 세번째 아랫줄 */}
            {/* <Room3line /> */}
            <Roomline3 />

            {/* 네번째 아랫줄 */}
            {/* <Room4line /> */}
            <Roomline4 />

            {/* 다섯번째 아랫줄 */}
            {/* <Room5line /> */}
            <Roomline5 />

        </div> 
    )
}

export default Room;