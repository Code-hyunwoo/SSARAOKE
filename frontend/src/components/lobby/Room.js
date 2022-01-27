import { Button, Card } from "react-bootstrap";

function Room() {

    return(
        <Card id="room" style={{ width: '160px'}} border="secondary" borderleft="secondary">
            <Card.Img variant="top" src="https://picsum.photos/1024/480/?image=1048" style={{margin:"center"}}/>
            <Card.Body>
                <Card.Title>방 제목 : </Card.Title>
                <Card.Text>
                    방장:  
                </Card.Text>
                <Card.Text>
                    태그: { }  
                </Card.Text>
                <Card.Text>
                    { } / 6  
                </Card.Text>
                <Button variant="primary">Join this room</Button>
            </Card.Body>
        </Card>
    )
}

export default Room;