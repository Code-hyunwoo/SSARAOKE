import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Styles from "./ChangeMode.module.css";

function ChangeMode_modal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        // 모달버전
        <div>
            
            <button className={Styles.mbtn} variant="warning" onClick={handleShow}>
                Mode
            </button>

            <Modal 
                show={show} 
                onHide={handleClose} 
                // animation={false}
                size="xl"
                // size="lg"
                // aria-labelledby="contained-modal-title-vcenter"
                // centered
                // handleClose
                className={Styles.modalContent}
                >
                <div className={Styles.modalContent2}>
                    <Modal.Header closeButton>
                        {/* <Modal.Title id="contained-modal-title-vcenter"> */}
                        <Modal.Title>
                            <h1 className={Styles.textM}>
                                choose the mode
                            </h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <button className={Styles.Basicmbtn }>Basic</button>
                        <button className={Styles.Freembtn }>Free</button>
                        <button className={Styles.Solombtn }>Solo</button>
                        <button className={Styles.Duetmbtn }>Duet</button>
                    </Modal.Body>
                    {/* <Modal.Footer> */}
                    {/* <div> */}
                        {/* <button onClick={handleClose} className={Styles.btnContent} >Close</button> */}
                    {/* </div> */}
                    {/* </Modal.Footer> */}
                </div>
            </Modal>

                {/* <div> */}
                    {/* <h1 className={Styles.text}>
                        choose the mode
                    </h1> */}
                {/* </div> */}
                {/* <div> */}
                    {/* <button className={Styles.Basicbtn}>Basic</button>
                    <button className={Styles.Freebtn}>Free</button>
                    <button className={Styles.Solobtn}>Solo</button>
                    <button className={Styles.Duetbtn}>Duet</button> */}
                {/* </div> */}
        </div>
    )
}

// function ChangeMode_modal() {
//     const [modalShow, setModalShow] = React.useState(false);
    
//     return (
//         <>
//         <Button variant="warning" onClick={() => setModalShow(true)}>
//           Mode
//         </Button>
  
//         <modal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//           />
//       </>
//     );
// }

export default ChangeMode_modal;