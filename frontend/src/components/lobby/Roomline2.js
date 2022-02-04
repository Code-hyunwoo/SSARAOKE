// import { Button, Card, Image } from "react-bootstrap";
import React from "react";
import Styles from "./Lobby.module.css"
// import L_Chat from "./L_Chat";
import Lockpicture from "./img/lockpicture.jpg";
import duet from "./img/duet.jpg";
import free from "./img/free.jpg";
import { Link } from "react-router-dom";
// import Room1line from "./Room1line";

function Roomline2() {
    
    return( 
        <div>
            {/* 두번째 줄은 top:'68%', 세번째 줄은 top:'106%', 
                네번째 줄은 top:'144%', 세번째 줄은 top:'182%'*/}
            <div>
                <div className={Styles.doorLD,Styles.roomsamecss} style={{left: '6%', top: '68%'}}>
                    {/* <video id="" controls 
                        className={Styles.video} >
                        <source src='?'></source>
                    </video> */}
                    <img className={Styles.video} src={free} alt="thumbnail" />
                    <div 
                        className={Styles.roomtitle} >
                    </div>
                    <div 
                        className={Styles.roomuser} >
                    </div>
                    <div 
                        className={Styles.roomfull} >
                    </div>
                    <div className={Styles.tag}> #tag </div>
                    <button className={Styles.joinbtn} ><Link to='/basic' className={Styles.joindeco}>Join this room</Link></button>
                </div>

                <div className={Styles.doorML,Styles.roomsamecss} style={{left: '36%', top: '68%'}}>
                    {/* <video id="" controls 
                        className={Styles.video}>
                        <source src='?'></source>
                    </video> */}
                    <img className={Styles.video} src={duet} alt="thumbnail" />
                    <div 
                        className={Styles.roomtitle} >
                    </div>
                    <div 
                        className={Styles.roomuser} >
                    </div>
                    <div 
                        className={Styles.roomfull}>
                    </div>
                    <div className={Styles.tag}> #tag </div>
                    <button className={Styles.joinbtn} ><Link to='/basic' className={Styles.joindeco}>Join this room</Link></button>
                </div>

                <div className={Styles.doorMR,Styles.roomsamecss} style={{left: '50.8%', top: '68%'}}>
                    {/* <video id="" controls 
                        className={Styles.video} >
                        <source src='?'></source>
                    </video> */}
                    <img className={Styles.video} src={free} alt="thumbnail" />
                    <div 
                        className={Styles.roomtitle} >
                    </div>
                    <div 
                        className={Styles.roomuser} >
                    </div>
                    <div 
                        className={Styles.roomfull} >
                    </div>
                    <div className={Styles.tag}> #tag </div>
                    <button className={Styles.joinbtn} ><Link to='/basic' className={Styles.joindeco}>Join this room</Link></button>
                </div>
                
                <div className={Styles.doorRD,Styles.roomsamecss} style={{right: '6%', top: '68%'}}>
                    {/* <video id="" controls 
                        className={Styles.video} >
                        <source src='?'></source>
                    </video> */}
                    <img className={Styles.video} src={Lockpicture} alt="thumbnail" />
                    <div 
                        className={Styles.roomtitle} >
                    </div>
                    <div 
                        className={Styles.roomuser} >
                    </div>
                    <div 
                        className={Styles.roomfull} >
                    </div>
                    <div className={Styles.tag}> #tag </div>
                    <button className={Styles.joinbtn} ><Link to='/basic' className={Styles.joindeco}>Join this room</Link></button>
                </div>
            </div>
        </div>
        
    )
}

export default Roomline2;