import styles from "./Room.module.css";
import ReactPlayer from "react-player";
import IU from "./video/IU.mp4";
import GoodDayMv from "./video/GoodDay.mp4";



function GoodDay({setstartGoodDay}) {
    
    function closeContents(){
        setstartGoodDay(false)
    }
    

    return (
        <div id={styles.contentsdiv}>
            <ReactPlayer 
            id={styles.ScreenDuet} 
            url={GoodDayMv}
            playing={true}
            muted={true}
            controls={false}
            />
            <ReactPlayer 
            id={styles.duetContents} 
            url={IU}
            playing={true}
            muted={false}
            controls={false}
            volume={0.4}
            onEnded={closeContents}
            />
            
        </div>
    )

}

export default GoodDay