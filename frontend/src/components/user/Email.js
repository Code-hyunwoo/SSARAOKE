import { Modal } from "react-bootstrap";
import Styles from "./Mypage.module.css";

function Email(props,{emailShow}) {

    return(
        <div>
            <Modal
                {...props}
                size="sm"
            >
                <div className={Styles.EmailModal}>
                    <Modal.Body>
                    <div style={{textAlign:'center'}}>
                        E-Mail 수정 : <input  placeholder={`E-Mail`}></input>&nbsp;
                        {/* 버튼 누르면 모달 종료 어떻게??*/}
                        <button 
                            style={{borderRadius:'30%', backgroundColor:'#ffcd438f'}} 
                            onClick={() => emailShow(false)}
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