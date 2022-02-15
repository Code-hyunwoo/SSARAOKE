import axios from "axios";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import Styles from "./Mypage.module.css";
import swal from 'sweetalert2';

function Nickname({ show, onHide, state, DispatchmodifyNickname }) {
  //변경할 닉네임값 받아오기
  // console.log("프롭받은 {state}", state);
  // console.log(typeof onHide);
  const [newnickname, setNewnickname] = useState("");
  const getNickname = (e) => {
    setNewnickname(e.target.value);
    console.log(newnickname);
  };

  //동일 닉네임 입력 경고창
  const sameNickname = () => {
    swal.fire({
      title: '동일 닉네임이 존재합니다.',
      icon: 'error',
      showConfirmButton: false,
      // confirmButtonColor: '#73E0C1',
      // confirmButtonText: '확인'
      timer: 1500
    })
    .then((result) => {
      console.log("sweetalert", result);
    })
  }
  
  const success = () => {
    swal.fire({
      title: '닉네임 수정 성공!',
      icon: 'success',
      showConfirmButton: false,
      // confirmButtonColor: '#73E0C1',
      // confirmButtonText: '확인'
      timer: 1500
    })
    .then((result) => {
      console.log("sweetalert", result);
    })
  }

  const onChangeNickname = () => {
    axios
      .patch(
        "https://i6a306.p.ssafy.io:8080/api/v1/user/nickname",
        {
          changed: newnickname,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // "Authorization" : token,  // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
            Authorization: state[0].token, // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
            // "Authorization" : 'Bearer 19U379_00nq0x7mQEYRvmFLkoB4k-k_IF5jCnQo9dJgAAAF-1yUoHw',  // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
            // "Authorization" : 'Bearer g9bkH1SdbJt7QT8t2Wl80oRCi_EbcE__3Yr9LQo9dJgAAAF-1yUoHg',  // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
          },
        }
      )
      .then((res) => {
        if(res.status === 200){
          DispatchmodifyNickname(newnickname);
          onHide();
          success();
          // window.alert("닉네임 수정 성공!");
        }
        else{
          // alert("동일 닉네임이 존재합니다.");
        }
        // console.log("then",res);
      })
      .catch((arr) => {
        // window.alert("동일 닉네임이 존재합니다.")
        sameNickname();
      });
  };

  //엔터로 입력가능하도록
  const entermodify = (e) => {
    if (e.key === "Enter") {
      onChangeNickname();
    }
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        size="sm"
        // aria-labelledby="contained-modal-title-vcenter"
        // centered
      >
        <div className={Styles.NicknameModal}>
          {/* <Modal.Header closeButton >
                        Nickname 수정
                    </Modal.Header> */}
          <Modal.Body>
            {/* <div style={{padding:'5px', textAlign:'center'}}> */}
            <div style={{ textAlign: "center" }}>
              Nickname 수정 :{" "} <br/>
              <input
                type="text"
                style={{ left: "90vw" }}
                placeholder="Nickname"
                name="newnickname"
                onChange={getNickname}
                onKeyPress={entermodify}
                maxLength="5"
              />
              &nbsp;
              {/* <div> */}
              
              <button
                style={{
                  top: "20vh",
                  borderRadius: "30vh",
                  backgroundColor: "#ffcd438f",
                }}
                onClick={onChangeNickname}
              >
                수정
              </button>
              <button
                style={{
                  top: "20vh",
                  borderRadius: "30vh",
                  backgroundColor: "#ffcd438f",
                }}
                // onClick={onChangeNicname, props.onHide}
                onClick={onHide}
              >
                닫기
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
  );
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
//                 <div className={Styles.NicknameModal}>
//                     {/* <Modal.Header closeButton >
//                         Nickname 수정
//                     </Modal.Header> */}
//                     <Modal.Body>
//                     <div style={{padding:'10px', textAlign:'center'}}>
//                         Nickname 수정 : <input style={{left:'90px'}} placeholder={`Nickname`}></input>&nbsp;
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

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    DispatchmodifyNickname: (newNickname) =>
      dispatch(actionCreators.modifyNickname(newNickname)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nickname);
