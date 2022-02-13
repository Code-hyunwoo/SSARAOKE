import styles from "./Room.module.css";
import ReactPlayer from "react-player";
import DreamMv from "./video/Dream.mp4";
import Baek from "./video/Baek.mp4";



function Dream({setstartDream}) {
    
    function closeContents(){
        setstartDream(false)
    }
    

    return (
        <div id={styles.contentsdiv}>
            <ReactPlayer 
            id={styles.ScreenDuet} 
            url={DreamMv}
            playing={true}
            muted={true}
            controls={false}
            />
            <ReactPlayer 
            id={styles.duetContents} 
            url={Baek}
            playing={true}
            muted={false}
            controls={false}
            volume={0.4}
            onEnded={closeContents}
            />
            
        </div>
    )

}

export default Dream