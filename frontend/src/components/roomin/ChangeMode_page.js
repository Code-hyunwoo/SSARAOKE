import { Button } from "react-bootstrap";
import Styles from "./ChangeMode.module.css";
import ChangeMode_modal from "./ChangeMode_modal";

function ChangeMode() {

    return(
        // 그냥 새로운 페이지로 이동하는 버전
        <div>
            <div>
                <h1 className={Styles.text}>
                    choose the mode
                </h1>
            </div>
            <div>
                <button className={Styles.Basicbtn}>Basic</button>
                <button className={Styles.Freebtn}>Free</button>
                <button className={Styles.Solobtn}>Solo</button>
                <button className={Styles.Duetbtn}>Duet</button>
            </div>
            <ChangeMode_modal />
        </div>

    )
}
export default ChangeMode;