import styles from "./NavbarHome.module.css";
import logo from "../../assets/SSARAOKE-LOGO4.png";
import { Link } from "react-router-dom";

function NavbarHome() {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link to="/">
          <img src={logo} height={60} alt="ssaraoke logo"></img>
        </Link>
        <Link to="/" className={styles.title}>
          SSARAOKE
        </Link>
      </div>
    </div>
  );
}

export default NavbarHome;
