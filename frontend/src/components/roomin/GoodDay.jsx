import styles from "./Room.module.css";
import ReactPlayer from "react-player";



function GoodDay({setstartGoodDay}) {
    
    function closeContents(){
        setstartGoodDay(false)
    }
    

    return (
        <div id={styles.contentsdiv}>
            <ReactPlayer 
            id={styles.ScreenDuet} 
            url={'https://ssaraoke.s3.ap-northeast-2.amazonaws.com/duet/KakaoTalk_20220214_133835329.mp4'}
            playing={true}
            muted={true}
            controls={false}
            />
            <ReactPlayer 
            id={styles.duetContents} 
            url={'https://ssaraoke.s3.ap-northeast-2.amazonaws.com/duet/KakaoTalk_20220214_133809960.mp4'}
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