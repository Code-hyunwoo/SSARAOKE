import Styles from "./Door.module.css";
import { Link } from "react-router-dom";

function Door({ thumbnail, title, hostname, usercnt = 0 }) {
  return (
    <div className={Styles.roomsamecss}>
      <img className={Styles.video} src={thumbnail} alt="thumbnail" />

      <div className={Styles.roomtitle}>{title}</div>

      <div className={Styles.roomgroup}>
        <div className={Styles.roomuser}>{hostname}</div>
        <div className={Styles.roomfull}>{usercnt}/8</div>
      </div>

      <div className={Styles.tag}> #2010 #K-POP #발라드 #ROCK </div>

      <Link to="/basic" className={Styles.joinlink}>
        <button className={Styles.joinbtn}>Join this room</button>
      </Link>
    </div>
  );
}

export default Door;
