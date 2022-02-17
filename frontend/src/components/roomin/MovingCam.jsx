import styles from "./Moving.module.css";
import Draggable from "react-draggable";
import React, { useState } from "react";



function MovingCam ({mode, sendMessage}){


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

            
        </div>
    )
}


export default MovingCam;