import Styles from "./remote.module.css";

function Record() {

    return(
        <div>
            <button className={Styles.recordstart}>녹화 시작</button>
            <button className={Styles.recordend}>녹화 종료</button>
        </div>
    )
}
export default Record;