import { Button, Modal, Table } from "react-bootstrap";
import Styles from "./RoomPw.module.css"

function RoomPw(props) {

    //room 비밀번호용 - MainLobby로 이사예정
    // const [roompwShow, setRoompwShow] = React.useState(false);

    return(
        <div>

            {/* onClick={() => setRoompwShow(true)} */}
            {/* <RoomPw 
                show={roompwShow} 
                onHide={() => setRoompwShow(false)}
            /> */}

            <Modal
                {...props}
                // size="sm"
            >
            {/* <div className={Styles.bigtable}> */}
            <div>
                <div className={Styles.bigtable}>
                    <Modal.Body className={Styles.createroombg}>
                    <div className={Styles.inputPW}>
                        <h className={Styles.hfont}>비밀번호: &nbsp;</h>
                        <input className={Styles.inputbox} id="roompw" name="roompw" type={"password"} placeholder=" 비밀번호를 입력하세요" ></input>
                        &nbsp;<button type="submit" className={Styles.button}>입력</button>
                    </div>
                    </Modal.Body>
                </div>
            </div>
        </Modal>        
        </div>
    )
    
}
export default RoomPw;