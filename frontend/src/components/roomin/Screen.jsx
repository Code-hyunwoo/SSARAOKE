import styles from "./Room.module.css";
import ReactPlayer from "react-player";
import { useState } from "react";



function Screen ({mode, now, nextMusic}){
    
    function endMusic(){
        // alert(`곡 종료`)
        nextMusic()
    }

    return (
        <div>
            <ReactPlayer 
            id={mode} 
            url={now}
            playing={true}
            muted={false}
            controls={true}
            onEnded={() => {endMusic()}}
            />
    {/* <button onClick={sendYTUrl}>연습버튼</button> */}
        </div>
    )

}

// 'https://www.youtube.com/watch?v=4gXmClk8rKI', 'https://www.youtube.com/watch?v=t8KtQ8-nImI'
export default Screen