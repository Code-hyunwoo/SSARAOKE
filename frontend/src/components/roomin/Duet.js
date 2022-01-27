import styles from "./Room.module.css";
import Musicbar from "./Musicbar";
import Screen from "./Screen";
import NormalCam from "./NormalCam";
import RoomChat from "./R_Chat";
import Button from "./Button";
import MirrorBall from "./MirrorBall";
import SingerCam from "./SingerCam";

function Free (){


    return (
        <div className={styles.room}>
            <Musicbar />
            <MirrorBall />
            <Screen mode={styles.ScreenFree}/>
            <SingerCam mode={styles.DuetSingerCam1} />
            <SingerCam mode={styles.DuetSingerCam2} />
            <div className={styles.DuetCamBox1}>
                 <NormalCam mode={styles.DuetNormalCam}/>
                 <NormalCam mode={styles.DuetNormalCam}/>
            </div>
            <div className={styles.DuetCamBox2}>     
                 <NormalCam mode={styles.DuetNormalCam}/>
                 <NormalCam mode={styles.DuetNormalCam}/>
            </div>

            <div className={styles.FreeChatBox}>
                <RoomChat mode={styles.FreeChat}/>
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



export default Free;