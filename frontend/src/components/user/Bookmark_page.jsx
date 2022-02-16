import { Table } from "react-bootstrap";
import Styles from "./MyPageMain.module.css";
import BStyles from "./Bookmark.module.css";
import { BsTrash2Fill, BsTrash2 } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";
import Forest from "../lobby/background/Forest";

function BookmarkPage() {

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
                <div className={BStyles.machineInline} style={{height: '78vh', }}>
                    <div className={BStyles.Sh1} style={{top: '2vh'}} >Bookmark</div>
                    <div style={{padding:'1vw' ,top:'9vh', left:'3.2vw'}} className={BStyles.table}>
                        <Table style={{top:'15vh'}}>
                            <thead className={BStyles.tablehead} >
                                <tr>
                                    <th>#</th>
                                    <th>가수</th>
                                    <th>노래 제목</th>
                                </tr>
                                </thead>
                                <tbody className={BStyles.tablebody}>
                                <tr>
                                    <th>1</th>
                                    <th>오마이걸</th>
                                    <th>던던 댄스 </th>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <th>종현</th>
                                    <th>02:34</th>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <th>에스파</th>
                                    <th>Next Level</th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                
                </div>

                {/* 떨어진 캔들 */}
                <div className={BStyles.pink}></div>
                <div className={BStyles.yellow}></div>
                <div className={BStyles.bora}></div>
                <div className={BStyles.navy}></div>
                <div className={BStyles.blue}></div>
                <div className={BStyles.sky}></div>
                <div className={BStyles.red}></div>

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
export default BookmarkPage;