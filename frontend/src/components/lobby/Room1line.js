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
                <div className={Styles.doorL} style={{left: '6%', top: '30%'}}>
                    {/* <video id="" controls 
                        className={Styles.video}>
                        <source src='?'></source>
                    </video> */}
                    <img className={Styles.video} src={Lockpicture} alt="thumbnail" />
                    <div className={Styles.roomtitle}> 
                    </div>
                    <div 
                        className={Styles.roomuser}>
                    </div>
                    <div joinbtn
                        className={Styles.roomfull}>
                    </div>
                    <div className={Styles.tag}> #tag </div>
                    <button className={Styles.joinbtn} ><Link to='/basic' className={Styles.joindeco}>Join this room</Link></button>
                </div>

                <L_Chat />

                <div className={Styles.doorR} style={{right: '6%', top: '30%'}}>
                    {/* <video id="" controls 
                        className={Styles.video}>
                        <source src='?'></source>
                    </video> */}
                    <img className={Styles.video} src={duet} alt="thumbnail" />
                    <div className={Styles.roomtitle} >
                    </div>
                    <div 
                        className={Styles.roomuser}>
                    </div>
                    <div 
                        className={Styles.roomfull}>
                    </div>
                    <div className={Styles.tag}> #tag </div>
                    <button className={Styles.joinbtn} ><Link to='/basic' className={Styles.joindeco}>Join this room</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Room1line;