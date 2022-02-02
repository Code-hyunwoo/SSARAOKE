import { Modal } from "react-bootstrap";
import Styles from "./Mypage.module.css";

function Nicname(props) {

    return(
        <div>
            <Modal
                {...props}
                size="sm"
                // aria-labelledby="contained-modal-title-vcenter"
                // centered
            >
                <div className={Styles.NicnameModal}>
                    {/* <Modal.Header closeButton >
                        Nicname 수정
                    </Modal.Header> */}
                    <Modal.Body>
                    <div style={{padding:'10px', textAlign:'center'}}>
                        Nicname 수정 : <input style={{left:'90px'}} placeholder={`Nicname`}></input>&nbsp;
                        <div style={{top:'100px'}}>
                            <button style={{top:'20px',borderRadius:'30%', backgroundColor:'#ffcd438f'}}>수정</button>
                        </div>
                    </div>
                    </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
                </div>
            </Modal>

        </div>
    )
}

function Email(props) {

    return(
        <div>
            <Modal
                {...props}
                size="sm"
                // aria-labelledby="contained-modal-title-vcenter"
                // centered
            >
                <div className={Styles.NicnameModal}>
                    {/* <Modal.Header closeButton >
                        Nicname 수정
                    </Modal.Header> */}
                    <Modal.Body>
                    <div style={{padding:'10px', textAlign:'center'}}>
                        Nicname 수정 : <input style={{left:'90px'}} placeholder={`Nicname`}></input>&nbsp;
                        <div style={{top:'100px'}}>
                            <button style={{top:'20px',borderRadius:'30%', backgroundColor:'#ffcd438f'}}>수정</button>
                        </div>
                    </div>
                    </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
                </div>
            </Modal>

        </div>
    )
}

export default Nicname;