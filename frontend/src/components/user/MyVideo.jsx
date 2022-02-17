import { Button, Modal, Table } from "react-bootstrap";
import Styles from "./MyVideo.module.css"

function MyVideo(props) {

    return(
        <div>
            <Modal
                {...props}
                size="xl"
            >
                <div className={Styles.Myvideobg}>
                    <Modal.Header closeButton >
                        <div className={Styles.Sh1}>My Video</div>
                    </Modal.Header>
                    <Modal.Body scrollables>
                    <div className={Styles.table}>
                        <Table scrollables>
                            <thead className={Styles.tablehead}>
                                <tr>
                                    <th>#</th>
                                    <th>영상</th>
                                    <th>제목</th>
                                </tr>
                            </thead>
                            <tbody className={Styles.tablebody}>
                                <tr>
                                    <th>1</th>
                                    <th>
                                        <span>
                                            <video id="" controls >
                                                <source src='?'></source>
                                            </video>
                                        </span>
                                    </th>
                                    <th>YYYY.MM.DD.hh.mm </th>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <th>
                                        <span>
                                            <video id="" controls>
                                                <source src='?'></source>
                                            </video>
                                        </span>
                                    </th>
                                    <th style={{textAlign:'center'}}>YYYY.MM.DD.hh.mm </th>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <th>
                                        <span>
                                            <video id="" controls>
                                                <source src='?'></source>
                                            </video>
                                        </span>
                                    </th>
                                    <th>YYYY.MM.DD.hh.mm </th>
                                </tr>
                            </tbody>
                            
                        </Table>
                    </div>
                    </Modal.Body>
                </div>
            </Modal>        
        </div>
    )
    
}
export default MyVideo;