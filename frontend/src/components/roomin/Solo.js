import styles from "./Room.module.css";
import Musicbar from "./Musicbar";
import Screen from "./Screen";
import NormalCam from "./NormalCam";
import RoomChat from "./R_Chat";
import Button from "./Button";
import MirrorBall from "./MirrorBall";
import LightRope from "./LightRope";
import Marquee from "react-fast-marquee"

function Solo (){


    return (
        <div className={styles.room}>
            <LightRope />
            <Musicbar />
            <MirrorBall />
            <Screen mode={styles.ScreenSolo}/>
            <NormalCam mode={styles.SoloSingerCam}/>
            <div className={styles.SoloCamBox}>     
                <NormalCam mode={styles.SoloNormalCam}/>
                <NormalCam mode={styles.SoloNormalCam}/>
                <NormalCam mode={styles.SoloNormalCam}/>
                <NormalCam mode={styles.SoloNormalCam}/>
                <NormalCam mode={styles.SoloNormalCam}/>
            </div>

            <div className={styles.SoloChatBox}>
                <RoomChat mode={styles.SoloChat}/>
            </div>
            <div className={styles.ButtonBox}>
                <Button text={"마이크, 캠"}/>
                <Button text={"리모콘"}/>
                <Button text={"컨텐츠"}/>
                <Button text={"모드선택"}/>
                <Button text={"나가기"}/>
            </div> 
        </div>
    ) 
}



export default Solo;