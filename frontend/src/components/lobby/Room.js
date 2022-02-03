import { Button, Card, Image } from "react-bootstrap";
import Styles from "./Lobby.module.css"
// import L_Chat from "./L_Chat";

function Room() {

    return(
        //  style={{ width: '160px'}} 
        <Card id="room" className={Styles.doorcolor}>
            <Card.Img variant="top" src="https://picsum.photos/1024/480/?image=1048" style={{margin:"center"}}/>
            <Card.Body>
                <Card.Title>방 제목 : </Card.Title>
                <Card.Text>
                    방장: <br/> 
                    태그: { }  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    ( n / 6 )  
                </Card.Text>
                <br/><br/>
                <Button variant="primary" className={Styles.joinbtn}>Join this room</Button>
            </Card.Body>
        </Card>
        // <div>
        //     {/* <div className={Styles.doorL}> */}
        //     <div className={Styles.roomdoor}>
        //         <Image varient = "top" src="https://picsum.photos/300/210/?image=1048" style={{margin:"center"}}/>
        //         <body style={{ borderradius: '10px'}}>
        //         &nbsp;방 제목 : <input id="title" value="title" style={{}}/><br/>
        //         &nbsp;방장 : &nbsp;&nbsp; <input id="host" value="host" /> <br/>
        //         &nbsp;태그 :&nbsp;&nbsp;  <input id="tag" value="tag" />&nbsp; 
        //             6 / 6
        //             <br/>
        //             <Button variant="primary" style={{padding:"5px", margin:"5px"}} >Join this room</Button>
        //         </body>
        //     </div>
            
        //         {/* <L_Chat /> */}

        //     {/* <div className={Styles.doorR}>
        //         <Image varient = "top" src="https://picsum.photos/300/215/?image=1048" style={{margin:"center"}}/>
        //         <body>
        //         &nbsp;방 제목 : <input id="title" value="title" /><br/>
        //         &nbsp;방장 : &nbsp;&nbsp; <input id="host" value="host" /> <br/>
        //         &nbsp;태그 :&nbsp;&nbsp;  <input id="tag" value="tag" />&nbsp; 
        //             6 / 6
        //             <br/>
        //         <Button variant="primary" style={{padding:"5px", margin:"5px"}}>Join this room</Button>
        //         </body>
        //     </div> */}
        // </div>
    )
}

export default Room;