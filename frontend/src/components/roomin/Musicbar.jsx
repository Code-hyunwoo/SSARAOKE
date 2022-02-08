import styles from "./Room.module.css";
import Marquee from "react-fast-marquee";

function Musicbar() {
  return (
    <div id={styles.Musicbar}>
      <Marquee gradientWidth={0} speed={40} className={styles.Musicbar}>
        <text>
          {" "}
          [Now Playing] Fromise9 - DM
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [NEXT]
          Fromise9 - WE GO
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </text>
      </Marquee>
    </div>
  );
}

export default Musicbar;
