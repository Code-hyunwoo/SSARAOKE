import styles from "./Room.module.css";
import Musicbar from "./Musicbar";
import Screen from "./Screen";
import NormalCam from "./NormalCam";
import RoomChat from "./R_Chat";
import Button from "./Button";
import MirrorBall from "./MirrorBall";

function Basic (){


    return (
        <div className={styles.room}>
            <Musicbar />
            <MirrorBall />
            <Screen mode={styles.ScreenBasic} />
            <div className={styles.BasicCamBox}>
                 <NormalCam mode={styles.BasicNormalCam}/>
                 <NormalCam mode={styles.BasicNormalCam}/>
                 <NormalCam mode={styles.BasicNormalCam}/>
                 <NormalCam mode={styles.BasicNormalCam}/>  
            </div>
            <div className={styles.BasicChatBox}>
                <RoomChat mode={styles.BasicChat} />
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



export default Basic;