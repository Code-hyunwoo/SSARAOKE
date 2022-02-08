import styles from "../components/roomin/Room.module.css";
import Musicbar from "../components/roomin/Musicbar";
import Screen from "../components/roomin/Screen";
import NormalCam from "../components/roomin/NormalCam";
import RoomChat from "../components/roomin/R_Chat";
import Button from "../components/roomin/Button";
import MirrorBall from "../components/roomin/MirrorBall";
import SingerCam from "../components/roomin/SingerCam";
import LightRope from "../components/roomin/LightRope";
import ChangeMode from "../components/roomin/ChangeMode";
import { useState } from "react";
import Crazylights from "../components/roomin/Crazylights";
import { Link } from "react-router-dom";
import Controller from "../components/remote/Controller";

function Duet() {
  const [openChangeMode, setOpenChangeMode] = useState(false);

  return (
    <div className={styles.room}>
      <LightRope />
      <Crazylights />
      <Musicbar />
      <MirrorBall />
      <Screen mode={styles.ScreenFree} />
      <SingerCam mode={styles.DuetSingerCam1} />
      <SingerCam mode={styles.DuetSingerCam2} />
      <div className={styles.DuetCamBox1}>
        <NormalCam mode={styles.DuetNormalCam} />
        <NormalCam mode={styles.DuetNormalCam} />
      </div>
      <div className={styles.DuetCamBox2}>
        <NormalCam mode={styles.DuetNormalCam} />
        <NormalCam mode={styles.DuetNormalCam} />
      </div>

      <div className={styles.FreeChatBox}>
        <RoomChat mode={styles.FreeChat} />
      </div>
      <div className={styles.ButtonBox}>
        <Button text={"마이크"} />
        <Button text={"캠"} />
        <Controller />
        <Button text={"컨텐츠"} />
        <button
          className={(styles.btn, styles.neon)}
          onClick={() => {
            setOpenChangeMode(true);
          }}
        >
          {" "}
          모드선택{" "}
        </button>
        {openChangeMode && <ChangeMode closeChangeMode={setOpenChangeMode} />}
        <button className={(styles.btn, styles.neon)}>
          <Link to="/lobby" id={styles.btn_no}>
            {" "}
            나가기
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Duet;
