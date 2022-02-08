import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Styles from "./Mypage.module.css";

function Email(props) {
// function Email(props) {

    // const [emailShow, setEmailShow] = React.useState(false);
  

    //변경할 이메일값 받아오기
    const [newemail, setNewemail] = useState('');
    const getEmail = (e) => {
        setNewemail(e.target.value);
        console.log(newemail);
    }

    //변경한 이메일 값 보내기 & 버튼 누르면 창 닫기도록
    const onChangeEmail = () => {
        axios
        .patch('http://i6a306.p.ssafy.io:8080/api/v1/user/email', {
            changed: newemail,
        }
        , {headers :{
            "Content-Type": 'application/json',
            // "Authorization" : token,  // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
            "Authorization" : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiaXNzIjoic3NhcmFva2UiLCJleHAiOjE2NDU0NTEwODEsImlhdCI6MTY0NDE1NTA4MX0.N9j_0TcCsgKetRCh26r-p93hajHoSPV7OLk6jsXswNKgAMSGbI-kl3Vh9YRtKoq14CnEN20pFVaC99HbAzQFDw',  // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
        }})
        .then((res) => {
            console.log(res);
        })
        .catch((res) => {
            console.log(res);
        })
    };


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
                        E-Mail 수정 : <input name="newemail" onChange={getEmail} placeholder={`E-Mail`} />&nbsp;
                        {/* 버튼 누르면 모달 종료 어떻게??*/}
                        <button 
                            style={{borderRadius:'30vh', backgroundColor:'#ffcd438f'}} 
                            onClick={onChangeEmail, props.onHide }
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