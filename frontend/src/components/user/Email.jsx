import React from "react";
import { Modal } from "react-bootstrap";
import Styles from "./Mypage.module.css";

function Email(props) {
// function Email(props) {

    const [emailShow, setEmailShow] = React.useState(false);
  
    const handleClose = () => setEmailShow(false);
    // const handleShow = () => setEmailShow(true);

    return(
        <div>
            <Modal
                {...props}
                size="sm"
            >
                <div className={Styles.EmailModal}>
                    <Modal.Body>
                    {/* <div style={{textAlign:'center', padding:'5%'}}> */}
                    <div style={{textAlign:'center'}}>
                        E-Mail 수정 : <input  placeholder={`E-Mail`}></input>&nbsp;
                        {/* 버튼 누르면 모달 종료 어떻게??*/}
                        <button 
                            style={{borderRadius:'30vh', backgroundColor:'#ffcd438f'}} 
                            onClick={handleClose}
                        >
                            수정
                        </button>
                    </div>
                    </Modal.Body>
                </div>
            </Modal>

        </div>
    )
}

export default Email;