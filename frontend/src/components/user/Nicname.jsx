import axios from "axios";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Styles from "./Mypage.module.css";

function Nicname(props) {

    //변경할 닉네임값 받아오기
    const [newnicname, setNewnicname] = useState('');
    const getNicname = (e) => {
        setNewnicname(e.target.value);
        console.log(newnicname);
    }

    const onChangeNicname = () => {
        axios
        .patch('http://i6a306.p.ssafy.io:8080/api/v1/user/nickname', {
            changed: newnicname,
        }
        , {headers :{
            "Content-Type": 'application/json',
            // "Authorization" : token,  // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
        "Authorization" : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiaXNzIjoic3NhcmFva2UiLCJleHAiOjE2NDU0NTEwODEsImlhdCI6MTY0NDE1NTA4MX0.N9j_0TcCsgKetRCh26r-p93hajHoSPV7OLk6jsXswNKgAMSGbI-kl3Vh9YRtKoq14CnEN20pFVaC99HbAzQFDw',  // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
        // "Authorization" : 'Bearer 19U379_00nq0x7mQEYRvmFLkoB4k-k_IF5jCnQo9dJgAAAF-1yUoHw',  // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
        // "Authorization" : 'Bearer g9bkH1SdbJt7QT8t2Wl80oRCi_EbcE__3Yr9LQo9dJgAAAF-1yUoHg',  // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
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
                // aria-labelledby="contained-modal-title-vcenter"
                // centered
            >
                <div className={Styles.NicnameModal}>
                    {/* <Modal.Header closeButton >
                        Nicname 수정
                    </Modal.Header> */}
                    <Modal.Body>
                    {/* <div style={{padding:'5px', textAlign:'center'}}> */}
                    <div style={{textAlign:'center'}}>
                        Nicname 수정 : <input style={{left:'90vw'}} placeholder={`Nicname`} name="newnicname" onChange={getNicname} />&nbsp;
                        {/* <div> */}
                            <button 
                                style={{top:'20vh',borderRadius:'30vh', backgroundColor:'#ffcd438f'}}
                                onClick={onChangeNicname, props.onHide}
                            >
                                수정
                            </button>
                        {/* </div> */}
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

// function Email(props) {

//     return(
//         <div>
//             <Modal
//                 {...props}
//                 size="sm"
//                 // aria-labelledby="contained-modal-title-vcenter"
//                 // centered
//             >
//                 <div className={Styles.NicnameModal}>
//                     {/* <Modal.Header closeButton >
//                         Nicname 수정
//                     </Modal.Header> */}
//                     <Modal.Body>
//                     <div style={{padding:'10px', textAlign:'center'}}>
//                         Nicname 수정 : <input style={{left:'90px'}} placeholder={`Nicname`}></input>&nbsp;
//                         <div style={{top:'100px'}}>
//                             <button style={{top:'20px',borderRadius:'30%', backgroundColor:'#ffcd438f'}}>수정</button>
//                         </div>
//                     </div>
//                     </Modal.Body>
//                 {/* <Modal.Footer>
//                     <Button onClick={props.onHide}>Close</Button>
//                 </Modal.Footer> */}
//                 </div>
//             </Modal>

//         </div>
//     )
// }

export default Nicname;