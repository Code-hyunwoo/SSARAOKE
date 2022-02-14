import styles from "./Room.module.css";
import ReactPlayer from "react-player";
import ScoreSound from "./audio/Score.mp3";


function Dream({setstartDream}) {
    
    function closeContents(){
        setstartDream(false)
    }

    
    return (
        <div id={styles.contentsdiv}>
            <ReactPlayer 
            id={styles.ScreenDuet} 
            url={'https://ssaraoke.s3.ap-northeast-2.amazonaws.com/duet/KakaoTalk_20220214_133858027.mp4'}
            playing={true}
            muted={true}
            controls={false}
            />
            <ReactPlayer 
            id={styles.duetContents} 
            url={'https://ssaraoke.s3.ap-northeast-2.amazonaws.com/duet/KakaoTalk_20220214_133749133.mp4'}
            playing={true}
            muted={false}
            controls={false}
            volume={0.4}
            onEnded={()=>{
                closeContents();
            }}
            />
            
        </div>
    )

}

export default Dream