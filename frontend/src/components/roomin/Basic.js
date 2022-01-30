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

function Basic (){
    const [openChangeMode, setOpenChangeMode] = useState(false);

    return (
        <div className={styles.room}>
            <LightRope />
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
                <button className={styles.btn, styles.neon} 
                onClick={()=> {
                    setOpenChangeMode(true);
                }}> 모드선택 </button>
                {openChangeMode && <ChangeMode closeChangeMode={setOpenChangeMode}/>}
                <Button text={"나가기"}/>
            </div> 
        </div>
    ) 
}



export default Basic;