import { useState } from "react";
import { Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import Book from "./Book";
import Effect from "./Effect";
import MusicSearchbar from "./MusicSearchbar";
import MSearchResult from "./M_SearchResult";
import Record from "./Record";
import Styles from "./remote.module.css";
import styles2 from "../roomin/Room.module.css"


function Controller({book, sendYTUrl}) {
    const [show, setShow] = useState(false);
    const [booklist, setbookList] =useState(book);
    const startbookList = () => {
        // var YTUrl = booklist[0]; 
        // var message = {
        //      id: 'sendYTUrl',
        //     room: room,
        //      url: YTUrl,
        // }
        // console.log(YTUrl)
        sendYTUrl(booklist);
        // booklist.shift();
        // setbookList(booklist);
        // alert(`새로운 곡 시작!`)
        // console.log(booklist)
        // console.log(`[sendYTUrl]유튜브 요청 보냄, url: ${YTUrl} at room ${room}`);
        // sendMessage(message);
        }
        
    



    return (
        
        <div>
            <button className={styles2.btn, styles2.neon} 
                onClick={()=> {
                    setShow(true)
                }}> 리모콘 </button>
           
            <Modal 
              show={show} 
              onHide={() => setShow(false)} 
              size="xl"
              dialogClassName="modal-90w"
              >
                <div className={styles2.modalposition}>  
                <div  className={Styles.remotebg} > 
                    <ModalHeader closeButton >
                        <Modal.Title>
                        </Modal.Title>
                    </ModalHeader>
                    <ModalBody>
                        <div >
                            {/* 검색창 */}
                                <div className={Styles.searchpage}>
                                    {/* 검색 */}
                                    <div>
                                    <MusicSearchbar />
                                    </div>
                                    {/* 검색 결과 */}
                                    <MSearchResult />
                                </div>
                            </div>
                            {/* 버튼창 */}
                            <div className={Styles.remotepage}>
                                {/* 기타 효과 - 템포, 에코, 음성, 조명, 필터, 박수 북, 폭죽, 좋아요 등  */}
                                <div className={Styles.effectpage}>
                                    <Effect />
                                </div>
                                {/* 노래 관련 버튼 */}
                                <div>
                                    {/* 북마크 목록 */}
                                    <button className={Styles.bookmarklist}>BookMark</button>
                                    <button className={Styles.songstart} onClick={startbookList}>시작</button>
                                    <button className={Styles.songdelete}>취소</button>
                                    {/* 녹화 시작/중지 */}
                                    <Record />
                                    {/* 노래 예약, 삭제, 목록 */}
                                    <Book />
                                </div>
                        </div>
                    </ModalBody>
                </div>
                </div>
            </Modal>
              
        </div>
    )
}

export default Controller;