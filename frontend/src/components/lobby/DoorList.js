import Door from "./Door";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./DoorList.module.css";
import CreateRoom from "./CreateRoom";
import duet from "./img/duet.jpg";

function DoorList() {
  return (
    <>
      <CreateRoom />
      <div className={styles.gridcontainer}>
        <div className={styles.griditem}>
          <Door title="80년대생 모여라" user="SSAFY" thumbnail={duet} />
          <Door title="80년대생 모여라" user="SSAFY" thumbnail={duet} />
        </div>
      </div>

      {/* <CreateRoom />
      <Container className={styles.gridcontainer}>
        <Row className={styles.griditem}>
          <Col>
            <Door title="80년대생 모여라" user="SSAFY" thumbnail={duet} />
          </Col>
          <Col>
            <Door title="90년대생 모여라" user="SSAFY2" thumbnail={duet} />
          </Col>
        </Row>
        <Row style={{ paddingTop: "40vh" }}>
          <Col>
            <Door title="00년대생 모여라" user="SSAFY3" thumbnail={duet} />
          </Col>
          <Col md={{ offset: 4 }}>
            <Door title="10년대생 모여라" user="SSAFY4" thumbnail={duet} />
          </Col>
          <Col md={{ offset: 6 }}>
            <Door title="20년대생 모여라" user="SSAFY5" thumbnail={duet} />
          </Col>
          <Col md={{ offset: 10 }}>
            <Door title="80년대생 모여라" user="SSAFY" thumbnail={duet} />
          </Col>
        </Row>
        <Row style={{ paddingTop: "40vh" }}>
          <Col>
            <Door title="00년대생 모여라" user="SSAFY3" thumbnail={duet} />
          </Col>
          <Col md={{ offset: 4 }}>
            <Door title="10년대생 모여라" user="SSAFY4" thumbnail={duet} />
          </Col>
          <Col md={{ offset: 6 }}>
            <Door title="20년대생 모여라" user="SSAFY5" thumbnail={duet} />
          </Col>
          <Col md={{ offset: 10 }}>
            <Door title="80년대생 모여라" user="SSAFY" thumbnail={duet} />
          </Col>
        </Row>
        <Row style={{ paddingTop: "40vh" }}>
          <Col>
            <Door title="00년대생 모여라" user="SSAFY3" thumbnail={duet} />
          </Col>
          <Col md={{ offset: 4 }}>
            <Door title="10년대생 모여라" user="SSAFY4" thumbnail={duet} />
          </Col>
          <Col md={{ offset: 6 }}>
            <Door title="20년대생 모여라" user="SSAFY5" thumbnail={duet} />
          </Col>
          <Col md={{ offset: 10 }}>
            <Door title="80년대생 모여라" user="SSAFY" thumbnail={duet} />
          </Col>
        </Row>
        <Row style={{ paddingTop: "40vh" }}>
          <Col>
            <Door title="00년대생 모여라" user="SSAFY3" thumbnail={duet} />
          </Col>
          <Col md={{ offset: 4 }}>
            <Door title="10년대생 모여라" user="SSAFY4" thumbnail={duet} />
          </Col>
          <Col md={{ offset: 6 }}>
            <Door title="20년대생 모여라" user="SSAFY5" thumbnail={duet} />
          </Col>
          <Col md={{ offset: 10 }}>
            <Door title="80년대생 모여라" user="SSAFY" thumbnail={duet} />
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default DoorList;
