import Styles from "../components/user/MyPageMain.module.css"
import Stylescan from "../components/user/MypageCan.module.css"
import { BsTrash2Fill, BsTrash, BsTrash2 } from "react-icons/bs";
import React from "react";
import bookmark from "../components/user/Bookmark";
import MyVideo from "../components/user/MyVideo";
import { Link } from "react-router-dom";
import Bookmark from "../components/user/Bookmark";
import Nicname from "../components/user/Nicname";
import Email from "../components/user/Email";
import MyPageBG from "../components/user/MyPageBG";
import LobbyBackGround from "../components/lobby/LobbyBackGround";

function Mypage_Main() {
    const [bookmarkShow, setBookmarkShow] = React.useState(false);
    const [videoShow, setVideoShow] = React.useState(false); 
    const [nicnameShow, setNicnameShow] = React.useState(false); 
    const [emailShow, setEmailShow] = React.useState(false); 

    return(
        <div>
            <LobbyBackGround />
            <button className={Styles.backbtn}><Link to="/"></Link></button>
            {/* 자판기시작 */}
            {/* 큰틀 */}
            <div className={Styles.machineOutline}>
                {/* 작은틀 */}
                <div className={Styles.machineInline}>
                    {/* 윗층 캔  onMouseOver={} 사용해보기  */}
                    <div>
                        <button onClick={() => setBookmarkShow(true)} className={Stylescan.canPink} style={{top:'20px',left: '50px'}}></button>
                        <button onClick={() => setBookmarkShow(true)} className={Stylescan.canY} style={{top:'20px', left: '225px'}}></button>
                        <button onClick={() => setBookmarkShow(true)} className={Stylescan.canP} style={{top:'20px', left: '400px'}}></button>
                        <button onClick={() => setBookmarkShow(true)} className={Stylescan.canB} style={{top:'20px', left: '575px'}}></button>
                        <button onClick={() => setBookmarkShow(true)} className={Stylescan.canR} style={{top:'20px', left: '750px'}}></button>
                        <button onClick={() => setBookmarkShow(true)} className={Stylescan.canN} style={{top:'20px', left: '925px'}}></button>
                        <button onClick={() => setBookmarkShow(true)} className={Stylescan.canBB} style={{top:'20px', left: '1100px'}}></button>
                        <Bookmark
                            show={bookmarkShow}
                            onHide={() => setBookmarkShow(false)}
                        />
                    </div>
                        {/* 막대 바 */}
                    <div className={Styles.canBar} style={{top:'230px', textAlign: 'center', fontSize:'28px'}}> BookMark</div>
                    {/* 아랫층 캔 */}
                    <div>
                        <button onClick={() => setVideoShow(true)} className={Stylescan.canB} style={{top:'300px', left: '50px'}}></button>
                        <button onClick={() => setVideoShow(true)} className={Stylescan.canBB} style={{top:'300px', left: '225px'}}></button>
                        <button onClick={() => setVideoShow(true)} className={Stylescan.canR} style={{top:'300px', left: '400px'}}></button>
                        <button onClick={() => setVideoShow(true)} className={Stylescan.canPink} style={{top:'300px', left: '575px'}}></button>
                        <button onClick={() => setVideoShow(true)} className={Stylescan.canY} style={{top:'300px', left: '750px'}}></button>
                        <button onClick={() => setVideoShow(true)} className={Stylescan.canP} style={{top:'300px', left: '925px'}}></button>
                        <button onClick={() => setVideoShow(true)} className={Stylescan.canN} style={{top:'300px', left: '1100px'}}></button>
                        <MyVideo
                            show={videoShow}
                            onHide={() => setVideoShow(false)}
                        />
                    </div>
                        {/* 막대 바 */}
                    <div className={Styles.canBar} style={{top:'510px', textAlign: 'center', fontSize:'28px'}}>My Video</div>
                </div>
                    {/* 닉네임 */}
                    <button onClick={() => setNicnameShow(true)} className={Styles.nicnameBox}> {`Nicname`} </button>
                      <Nicname
                      show={nicnameShow}
                      onHide={() => setNicnameShow(false)}
                      />
                    {/* 싸라오케 */}
                    <div className={Styles.ssaraoke}>SSARAOKE</div>
                    {/* 번호 */}
                    <div className={Styles.phoneN}>010-7100-1722</div>
                    {/* 이메일 */}
                    <button onClick={() => setEmailShow(true)} className={Styles.emailBox}> {`E-mail`} </button>
                        <Email
                        show={emailShow}
                        onHide={() => setEmailShow(false)}
                        />
                    
                    {/* 지폐투입구 */}
                    {/* <div className={Styles.cashbar} style={{left: '710px', top: '682px'}}></div> */}
                    {/* <div className={Styles.cashbar} style={{left: '940px', top: '682px'}}></div> */}
                    <div className={Styles.cash}></div>
                    {/* <div className={Styles.cashbar} style={{left: '930px', top: '682px'}}></div> */}
                    {/* 동전 투입구 */}
                    <div className={Styles.coin}></div>
                    <div className={Styles.coinLine}></div>
                    {/* 자판기 문여는거 */}
                    <div className={Styles.machineDoor}></div>
                    <div className={Styles.machineDoorR}></div>
            </div>
            {/* 쓰레기통 */}
            <button style={{backgroundColor:'black', borderColor:'black'}}>
            {/* <button style={{left: '1900px', top:'820'}}> */}
                <div className={Styles.trash1}></div>
                <div className={Styles.trash2}></div>
                {/* <div className={Styles.trash3}></div> */}
                <div className={Styles.trash4}></div>
                <div className={Styles.trash7}></div>
                <div className={Styles.trash5}></div>
                <div className={Styles.trash6}></div>
                <div className={Styles.trashCan}></div>
            <div> <BsTrash2Fill className={Styles.trashCan} color="#0381D7"/></div>
            {/* <div> <BsTrash className={Styles.trashCan} color="#0381D7"/></div> */}
            <div> <BsTrash2 className={Styles.trashCan} color="#0381D7"/></div>
            </button>

        </div>
    )
    
}
export default Mypage_Main;