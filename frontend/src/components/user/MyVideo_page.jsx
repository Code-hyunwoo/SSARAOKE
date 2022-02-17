import { Table } from "react-bootstrap";
import Styles from "./MyPageMain.module.css";
import VStyles from "./MyVideo.module.css";
import { BsTrash2Fill, BsTrash2 } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";
import Forest from "../lobby/background/Forest";

function MyVideoPage() {

    return(
        <div>
            <Forest />

            <Link to="/mypage">
                <button className={Styles.backbtn}></button>
            </Link>
            {/* 자판기시작 */}
            {/* 큰틀 */}
            <div className={Styles.machineOutline}>
                {/* 작은틀 */}
                <div className={VStyles.machineInline} style={{height: '78vh', }}>
                    <div className={VStyles.Sh1} style={{top: '2vh'}} >My Video</div>
                    <div style={{padding:'1vw' ,top:'11vh', left:'3.2vw'}} className={VStyles.table}>
                        <Table scrollables>
                            <thead className={VStyles.tablehead}>
                                <tr>
                                    <th>#</th>
                                    <th>영상</th>
                                    <th>제목</th>
                                </tr>
                            </thead>
                            <tbody className={VStyles.tablebody}>
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
                                    <th >YYYY.MM.DD.hh.mm </th>
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

                    {/* 떨어진 캔들 */}
                    <div className={VStyles.pink}></div>
                    <div className={VStyles.yellow}></div>
                    <div className={VStyles.bora}></div>
                    <div className={VStyles.navy}></div>
                    <div className={VStyles.blue}></div>
                    <div className={VStyles.sky}></div>
                    <div className={VStyles.red}></div>
                
                </div>
            </div>
            {/* 쓰레기통 */}
                <button style={{ backgroundColor: "black", borderColor: "black" }}>
                    <div className={Styles.trash1}></div>
                    <div className={Styles.trash2}></div>
                    <div className={Styles.trash4}></div>
                    <div className={Styles.trash7}></div>
                    <div className={Styles.trash5}></div>
                    <div className={Styles.trash6}></div>
                    <div className={Styles.trashCan}></div>

                    <Link to="/">
                    <div>
                        {" "}
                        <BsTrash2Fill className={Styles.trashCan} color="#0381D7" />
                        <BsTrash2 className={Styles.trashCan} color="#0381D7" />
                    </div>
                    </Link>
                </button>   
        </div>
    )
    
}
export default MyVideoPage;