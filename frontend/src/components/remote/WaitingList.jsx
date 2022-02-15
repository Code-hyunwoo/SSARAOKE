import Styles from "./remote.module.css";
import { Modal, ModalBody } from "react-bootstrap";
import { useState } from "react";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import wstyle from "./WaitingList.module.css";
import axios from "axios";
import Swal from "sweetalert2";

function WaitingList({ roomseq }) {
  const [show, setShow] = useState(false);
  const [waitlist, setWaitlist] = useState([]);
  const getBooklist = () => {
    // console.log(roomseq);
    axios
      .get(
        `https://i6a306.p.ssafy.io:8080/api/v1/reservation/list/${roomseq}`,
        {
          room_seq: roomseq,
        }
      )
      .then((res) => {
        console.log(res);
        setWaitlist(res.data);
      })
      .catch(() => {
        alert("Error가 발생했습니다.");
      });
  };

  const failed = () => {
    Swal.fire({
      icon: "error",
      title: "요청 실패",
      text: "에러가 발생했습니다.",
    });
  };

  const deleteItem = (seq) => {
    axios
      .delete("https://i6a306.p.ssafy.io:8080/api/v1/reservation/delete", {
        // delete 메서드는 data에 값을 넣어줘야 함
        data: {
          reservation_seq: seq,
          room_seq: roomseq,
        },
      })
      .then((res) => {
        console.log(res);
        setWaitlist(res.data);
      })
      .catch(() => {
        failed();
      });
  };

  return (
    <div>
      <button
        className={Styles.booklist}
        onClick={() => {
          setShow(true);
          getBooklist();
        }}
      >
        예약 목록
      </button>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
      >
        <div className={wstyle.listbg}>
          <ModalHeader closeButton closeVariant="white"></ModalHeader>
          <ModalBody>
            예약 리스트
            {waitlist.map((item, index) => (
              <li>
                #{index + 1} - {item.song_title}{" "}
                <button
                  onClick={() => {
                    deleteItem(item.reservation_seq);
                  }}
                >
                  DEL
                </button>
              </li>
            ))}
          </ModalBody>
        </div>
      </Modal>
    </div>
  );
}

export default WaitingList;
