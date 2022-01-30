import styles from "./Room.module.css";
import Musicbar from "./Musicbar";
import Screen from "./Screen";
import NormalCam from "./NormalCam";
import RoomChat from "./R_Chat";
import Button from "./Button";
import MirrorBall from "./MirrorBall";
import LightRope from "./LightRope";
import ChangeMode from "./ChangeMode";
import { useState } from "react"


function Solo (){
    const [openChangeMode, setOpenChangeMode] = useState(false);


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
                <button className={styles.btn, styles.neon} id={styles.unfolding}
                onClick={()=> {
                    setOpenChangeMode(true);
                }}> 모드선택 </button>
                {openChangeMode && <ChangeMode closeChangeMode={setOpenChangeMode}/>}
                
                <Button text={"나가기"}/>
            </div> 
        </div>
    ) 
}



export default Solo;