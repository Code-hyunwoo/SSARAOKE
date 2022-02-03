import { render } from "@testing-library/react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Styles from "./Lobby.module.css"

function CreateRoom() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          방 생성
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <div className={Styles.createroombg}>
            <Modal.Header closeButton>
              <Modal.Title>방 생성</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              escape key.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </div>
        </Modal> */}
      </>
    );
  }
  
  render(<CreateRoom />);
export default CreateRoom;