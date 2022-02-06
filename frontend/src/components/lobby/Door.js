import Styles from "./Door.module.css";
import { Link } from "react-router-dom";

function Door({ title, user, thumbnail }) {
  return (
    <div className={Styles.roomsamecss}>
      <img className={Styles.video} src={thumbnail} alt="thumbnail" />

      <div className={Styles.roomtitle}>{title}</div>

      <div className={Styles.roomgroup}>
        <div className={Styles.roomuser}>{user}</div>
        <div className={Styles.roomfull}>8/8</div>
      </div>

      <div className={Styles.tag}> #2010 #K-POP #발라드 #ROCK </div>

      <Link to="/basic" className={Styles.joinlink}>
        <button className={Styles.joinbtn}>Join this room</button>
      </Link>
    </div>
  );
}

export default Door;
