import { Card, CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Desk from './Desk';
import Room from './Room';

function MainLobby() {

    return(
        <div>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
            <div>
            <img alt="자판기" style={{paddingRight: "450px"}}/>
                
            {/* <input placeholder="채팅자리"/> */}
            {/*  style={{ marginleft: '95%'}} 하면 우측으로 이동 -> 추후 css 먹이기 */}
            <Desk  style={{ marginleft: '95%'}} />
            </div>

            
            <br/>
            <br/>
            <CardGroup>
                <Room style={{marginRight: "450px"}} />
                <Card style={{padding: '10px'}} border="#FFFFFF" ></Card>
                <Card id="room" style={{ width: '300px' }} border="secondary" >
                    <Card.Body>
                        <Card.Title>채팅창 위치</Card.Title>
                            <Card>
                                {/* 팔렛 기능 찾아보기 */}
                            </Card>
                            {/* <input border='secondary'/> */}
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{padding: '10px'}}></Card>
                <Room style={{marginLeft: "450px"}}/>
                </CardGroup>

                <CardGroup>
                    
                    <Room />
                    <Room />
                    <Room />
                    <Room />
                    {/* <Card id="room" style={{ width: '18rem' }} border="secondary" >
                        <Card.Img variant="top" src="https://picsum.photos/1024/480/?image=1048" />
                        <Card.Body>
                            <Card.Title>방 제목 : </Card.Title>
                            <Card.Text>
                                방장:  
                            </Card.Text>
                            <Card.Text>
                                태그: { }  
                            </Card.Text>
                            <Card.Text>
                         z           { } / 6  
                            </Card.Text>
                            <Button variant="primary">Join this room</Button>
                        </Card.Body>
                    </Card> */}
                </CardGroup>
        </div>
    )
}

export default MainLobby;

// element.style {
//     padding-right: 300px;
// }