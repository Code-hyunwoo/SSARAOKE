import styles from "./Moving.module.css";
import Draggable from "react-draggable";
import React, { useState } from "react";



function MovingCam ({mode, sendMessage}){

    // const [position, setPosition] = React.useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌
    // const trackPos = (data) => {
        // setPosition({ x: data.x, y: data.y }); 
    // };

    const [Opacity, setOpacity] = useState(false);
    const handleStart = () => {
        setOpacity(true);
    };
    const handleEnd = () => {
        setOpacity(false);
    };

    return (
        <div id={mode}>
            { mode === "free"? 
                    <Draggable onStart={handleStart} onStop={handleEnd}>
                        <div id="participants" className={styles.box} style={{opacity: Opacity? "0.6" : "1"}}>
                            
                        </div>
                    </Draggable>
                        : 
                    <div id="participants">
                        <video id={mode} controls>
                            <source src='?'></source>
                        </video>
                    </div> 
            } 

            {/* <div className={transCambox}> 안에 넣어주기*/}
            {/*  */}
            {/* {nowMode === 'Freemode'?
                <Draggable onStart={handleStart} onStop={handleEnd}>
                    <div id="participants" className={styles.box} style={{opacity: Opacity? "0.6" : "1"}}>
                    </div>
                </Draggable>
                : 
                <div id="participants"></div> 
            } */}
            
        </div>
    )
}


export default MovingCam;