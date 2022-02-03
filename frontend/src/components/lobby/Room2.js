import { Button, Card, Image } from "react-bootstrap";
import React from "react";
import Styles from "./Lobby.module.css"
import L_Chat from "./L_Chat";
import Lockpicture from "./lockpicture.jpg";
import duet from "./duet.jpg";
import free from "./free.jpg";
import { Link } from "react-router-dom";

function Room({roomnum}) {

    return(
        <div>
            {/* 윗줄 */}
            <div>
                <div className={Styles.doorL} style={{left: '6%', top: '20%'}}>
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
                    <button className={Styles.joinbtn} ><Link to='/basic'>Join this room</Link></button>
                </div>

                <L_Chat />

                <div className={Styles.doorR} style={{width: '15%' ,height: '38%'}}>
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
                    <button className={Styles.joinbtn} ><Link to='/basic'>Join this room</Link></button>
                </div>
            </div>

            {/* 아랫줄 */}
            <div>
                <div className={Styles.doorLD} style={{left: '6%', top: '58%'}}>
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
                    <button className={Styles.joinbtn} ><Link to='/basic'>Join this room</Link></button>
                </div>

                <div className={Styles.doorML} style={{left: '36%', top: '58%'}}>
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
                    <button className={Styles.joinbtn} ><Link to='/basic'>Join this room</Link></button>
                </div>

                <div className={Styles.doorMR} style={{left: '50.8%', top: '58%'}}>
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
                    <button className={Styles.joinbtn} ><Link to='/basic'>Join this room</Link></button>
                </div>
                
                <div className={Styles.doorRD} style={{right: '6%', top: '58%'}}>
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
                    <button className={Styles.joinbtn} ><Link to='/basic'>Join this room</Link></button>
                </div>
            </div>

            {/* 방문 가장 아랫줄 */}
            <div>
                <div className={Styles.doorLD} style={{left: '6%', top: '96%'}}>
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
                    <button className={Styles.joinbtn} ><Link to='/basic'>Join this room</Link></button>
                </div>

                <div className={Styles.doorML} style={{left: '36%', top: '96%'}} >
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
                    <button className={Styles.joinbtn} ><Link to='/basic'>Join this room</Link></button>
                </div>

                <div className={Styles.doorMR} style={{left: '50.8%', top: '96%'}} >
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
                    <button className={Styles.joinbtn} ><Link to='/basic'>Join this room</Link></button>
                </div>
                
                <div className={Styles.doorRD}  style={{right: '6%', top: '96%'}}>
                    {/* <video id="" controls 
                        className={Styles.video} >
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
                        className={Styles.roomfull} >
                    </div>
                    <div className={Styles.tag}> #tag </div>
                    <button className={Styles.joinbtn} ><Link to='/basic'>Join this room</Link></button>
                </div>
            </div>
        </div> 
    )
}

export default Room;