import { Button, Card, Image } from "react-bootstrap";
import Styles from "./Lobby.module.css"
import L_Chat from "./L_Chat";

function Room({roomnum}) {

    return(
        <div>
            {/* 윗줄 */}
            <div>
                <div className={Styles.doorL}>
                    <video id="" controls 
                        className={Styles.video} 
                        style={{
                            left: '43px',
                            top: '10px'}}>
                        <source src='?'></source>
                    </video>
                    <div 
                        className={Styles.roomtitle} 
                        style={{ left: '30px',top: '200px'}}>
                    </div>
                    <div 
                        className={Styles.roomuser} 
                        style={{ left: '30px',
                            top: '250px'}}>
                    </div>
                    <div joinbtn
                        className={Styles.roomfull} 
                        style={{ left: '250px',
                            top: '250px'}}>
                    </div>
                    <button className={Styles.joinbtn} >Join this room</button>
                </div>

                <L_Chat />

                <div className={Styles.doorR}>
                    <video id="" controls 
                        className={Styles.video} 
                        style={{
                            left: '43px',
                            top: '11px'}}>
                        <source src='?'></source>
                    </video>
                    <div 
                        className={Styles.roomtitle} 
                        style={{ left: '30px',top: '200px'}}>
                    </div>
                    <div 
                        className={Styles.roomuser} 
                        style={{ left: '30px',
                            top: '250px'}}>
                    </div>
                    <div 
                        className={Styles.roomfull} 
                        style={{ left: '250px',
                            top: '250px'}}>
                    </div>
                    <button className={Styles.joinbtn} >Join this room</button>
                </div>
            </div>

            {/* 아랫줄 */}
            <div>
                <div className={Styles.doorLD} style={{left: '100px', top: '620px'}}>
                    <video id="" controls 
                        className={Styles.video} 
                        style={{
                            left: '43px',
                            top: '10px'}}>
                        <source src='?'></source>
                    </video>
                    <div 
                        className={Styles.roomtitle} 
                        style={{ left: '30px',top: '200px'}}>
                    </div>
                    <div 
                        className={Styles.roomuser} 
                        style={{ left: '30px',
                            top: '250px'}}>
                    </div>
                    <div 
                        className={Styles.roomfull} 
                        style={{ left: '250px',
                            top: '250px'}}>
                    </div>
                    <button className={Styles.joinbtn} >Join this room</button>
                </div>

                <div className={Styles.doorML} style={{left: '800px', top: '624px'}} >
                    <video id="" controls 
                        className={Styles.video} 
                        style={{
                            left: '43px',
                            top: '10px'}}>
                        <source src='?'></source>
                    </video>
                    <div 
                        className={Styles.roomtitle} 
                        style={{ left: '30px',top: '200px'}}>
                    </div>
                    <div 
                        className={Styles.roomuser} 
                        style={{ left: '30px',
                            top: '250px'}}>
                    </div>
                    <div 
                        className={Styles.roomfull} 
                        style={{ left: '250px',
                            top: '250px'}}>
                    </div>
                    <button className={Styles.joinbtn} >Join this room</button>
                </div>

                <div className={Styles.doorMR} style={{left: '1160px', top: '624px'}} >
                    <video id="" controls 
                        className={Styles.video} 
                        style={{
                            left: '43px',
                            top: '10px'}}>
                        <source src='?'></source>
                    </video>
                    <div 
                        className={Styles.roomtitle} 
                        style={{ left: '30px',top: '200px'}}>
                    </div>
                    <div 
                        className={Styles.roomuser} 
                        style={{ left: '30px',
                            top: '250px'}}>
                    </div>
                    <div 
                        className={Styles.roomfull} 
                        style={{ left: '250px',
                            top: '250px'}}>
                    </div>
                    <button className={Styles.joinbtn} >Join this room</button>
                </div>
                
                <div className={Styles.doorRD} style={{left: '1850px', top: '624px'}}>
                    <video id="" controls 
                        className={Styles.video} 
                        style={{
                            left: '43px',
                            top: '10px'}}>
                        <source src='?'></source>
                    </video>
                    <div 
                        className={Styles.roomtitle} 
                        style={{ left: '30px',top: '200px'}}>
                    </div>
                    <div 
                        className={Styles.roomuser} 
                        style={{ left: '30px',
                            top: '250px'}}>
                    </div>
                    <div 
                        className={Styles.roomfull} 
                        style={{ left: '250px',
                            top: '250px'}}>
                    </div>
                    <button className={Styles.joinbtn} >Join this room</button>
                </div>
            </div>

            {/* 방문 가장 아랫줄 */}
            <div>
                <div className={Styles.doorLD} style={{left: '100px', top: '1020px'}}>
                    <video id="" controls 
                        className={Styles.video} 
                        style={{
                            left: '43px',
                            top: '10px'}}>
                        <source src='?'></source>
                    </video>
                    <div 
                        className={Styles.roomtitle} 
                        style={{ left: '30px',top: '200px'}}>
                    </div>
                    <div 
                        className={Styles.roomuser} 
                        style={{ left: '30px',
                            top: '250px'}}>
                    </div>
                    <div 
                        className={Styles.roomfull} 
                        style={{ left: '250px',
                            top: '250px'}}>
                    </div>
                    <button className={Styles.joinbtn} >Join this room</button>
                </div>

                <div className={Styles.doorML} style={{left: '800px', top: '1020px'}} >
                    <video id="" controls 
                        className={Styles.video} 
                        style={{
                            left: '43px',
                            top: '10px'}}>
                        <source src='?'></source>
                    </video>
                    <div 
                        className={Styles.roomtitle} 
                        style={{ left: '30px',top: '200px'}}>
                    </div>
                    <div 
                        className={Styles.roomuser} 
                        style={{ left: '30px',
                            top: '250px'}}>
                    </div>
                    <div 
                        className={Styles.roomfull} 
                        style={{ left: '250px',
                            top: '250px'}}>
                    </div>
                    <button className={Styles.joinbtn} >Join this room</button>
                </div>

                <div className={Styles.doorMR} style={{left: '1160px', top: '1020px'}} >
                    <video id="" controls 
                        className={Styles.video} 
                        style={{
                            left: '43px',
                            top: '10px'}}>
                        <source src='?'></source>
                    </video>
                    <div 
                        className={Styles.roomtitle} 
                        style={{ left: '30px',top: '200px'}}>
                    </div>
                    <div 
                        className={Styles.roomuser} 
                        style={{ left: '30px',
                            top: '250px'}}>
                    </div>
                    <div 
                        className={Styles.roomfull} 
                        style={{ left: '250px',
                            top: '250px'}}>
                    </div>
                    <button className={Styles.joinbtn} >Join this room</button>
                </div>
                
                <div className={Styles.doorRD}  style={{left: '1850px', top: '1020px'}}>
                    <video id="" controls 
                        className={Styles.video} 
                        style={{
                            left: '43px',
                            top: '10px'}}>
                        <source src='?'></source>
                    </video>
                    <div 
                        className={Styles.roomtitle} 
                        style={{ left: '30px',top: '200px'}}>
                    </div>
                    <div 
                        className={Styles.roomuser} 
                        style={{ left: '30px',
                            top: '250px'}}>
                    </div>
                    <div 
                        className={Styles.roomfull} 
                        style={{ left: '250px',
                            top: '250px'}}>
                    </div>
                    <button className={Styles.joinbtn} >Join this room</button>
                </div>
            </div>
            {/* <div className={Styles.doorcolor}>
                <span id={roomnum} >
                    <video id="" controls className={Styles.video} >
                        <source src='?'></source>
                    </video>
                </span>
            </div> */}
        </div> 
    )
}

export default Room;