import { Button, Card, Image } from "react-bootstrap";
import React from "react";
import Styles from "./Lobby.module.css"
import L_Chat from "./L_Chat";
import Lockpicture from "./img/lockpicture.jpg";
import duet from "./img/duet.jpg";
import free from "./img/free.jpg";
import { Link } from "react-router-dom";

function Room1line() {

    return(

        <div>
            <div>
                <div className={Styles.roomsamecss} style={{left: '5.95vw', top: '30vh'}}>
                    {/* <video id="" controls 
                        className={Styles.video}>
                        <source src='?'></source>
                    </video> */}
                    <img className={Styles.video} src={Lockpicture} alt="thumbnail" />
                    <div className={Styles.roomtitle}> 90년대생 모여라~ </div>
                    <div className={Styles.roomuser}> 추억 소환 </div>
                    <div joinbtn className={Styles.roomfull}> 8/8 </div>
                    <div className={Styles.tag}> #2010 #K-POP #발라드 #팝 </div>
                    <Link to='/basic' className={Styles.joindeco}><button className={Styles.joinbtn} >Join this room</button></Link>
                </div>

                <L_Chat />

                <div className={Styles.roomsamecss} style={{right: '5.95vw', top: '30vh'}}>
                    {/* <video id="" controls 
                        className={Styles.video}>
                        <source src='?'></source>
                    </video> */}
                    <img className={Styles.video} src={duet} alt="thumbnail" />
                    <div className={Styles.roomtitle} > {`title`}
                    </div>
                    <div 
                        className={Styles.roomuser}> {`user_nickname`}
                    </div>
                    <div 
                        className={Styles.roomfull}> 8/8
                    </div>
                    <div className={Styles.tag}> #tag </div>
                    <Link to='/basic' className={Styles.joindeco}><button className={Styles.joinbtn} >Join this room</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Room1line;