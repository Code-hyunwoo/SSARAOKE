import { Card, CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Desk from './Desk';
// import L_Chat from './L_Chat';
import Room from './Room';
import Styles from "./Lobby.module.css"

function MainLobby() {

    return(
        
        <div>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
            <div>
            <img alt="자판기" style={{paddingRight: "450px"}} src='https://www.figma.com/file/cyLMPjvATwJR1Vi4GYL53o/6%ED%8C%80-SSARAOKE_-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=117%3A146'/>
            {/*  style={{ marginleft: '95%'}} 하면 우측으로 이동 -> 추후 css 먹이기 */}
            <Desk  />
            </div>

            <br/>
            <br/>
            <CardGroup>
                {/* 왼쪽 위 */}
                <Room className={Styles.doorL} />
                {/* <L_Chat /> */}
                <Card style={{padding: '10px'}} className={Styles.block} bg='black'></Card>
                <Card id="room" style={{ width: '300px' }} border="secondary"  className={Styles.chatcolor}>
                    <Card.Body>
                        <Card.Title>채팅창 위치</Card.Title>
                        {/* <Card> */}
                           {/* 팔렛 기능 찾아보기 */}
                        {/* </Card> */}
                        <input border='secondary' />
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{padding: '10px'}} className={Styles.block} bg='black'></Card>
                <Room className={Styles.doorR}/>
                
            </CardGroup>
            <br/>
            <CardGroup>
                <Room className={Styles.doorLD} /> &nbsp;&nbsp; &nbsp;
                <Room className={Styles.doorML}/>
                <Room className={Styles.doorMR}/>&nbsp;&nbsp; &nbsp;
                <Room className={Styles.doorRD} />  
            </CardGroup>
        </div>
    )
}

export default MainLobby;