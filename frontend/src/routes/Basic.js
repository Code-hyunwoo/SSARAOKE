import styles from "./Room.module.css";
import Musicbar from "../components/roomin/Musicbar";
import Screen from "../components/roomin/Screen";
import NormalCam from "../components/roomin/NormalCam";
import RoomChat from "../components/roomin/R_Chat";
import Button from "../components/roomin/Button";
import MirrorBall from "../components/roomin/MirrorBall";
import LightRope from "../components/roomin/LightRope";
import ChangeMode from "../components/roomin/ChangeMode";
import { useState } from "react"
import Crazylights from "../components/roomin/Crazylights";

function Basic (){
    const [openChangeMode, setOpenChangeMode] = useState(false);

    return (
        <div className={styles.room}>
            <LightRope />
            <Crazylights />
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
                <Button text={"마이크"}/>
                <Button text={"캠"}/>
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