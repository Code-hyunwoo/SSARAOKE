import { Col, Container, Row } from "react-bootstrap";
import gif1 from "../assets/lobbychat_mypage.gif";
import gif2 from "../assets/passwordroom.gif";
import gif3 from "../assets/booksong.gif";
import gif4 from "../assets/modechange.gif";
import gif5 from "../assets/duetcontents.gif";
import styles from "./Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "../components/user/Login";
import TeamProfile from "../components/roomin/TeamProfile";

function Home() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <div>
      <Login />

      <Container fluid className={styles.pxpx}>
        <hr className={styles.line} style={{ borderColor: "black" }} />
        <Row className={styles.row}>
          <Col md={{ span: 5, offset: 1 }}>
            <img src={gif1} alt="" className={styles.introPic} />
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <div className={styles.desc1}>
              <h1>친구들과 소통하며 즐기세요</h1>
            </div>
            <div className={styles.desc2}>
              <h3>
                SSARAOKE에서 쓸 닉네임을 정하고, 로비에서 다른 사용자들과 대화를
                나눠보세요
              </h3>
            </div>
          </Col>
        </Row>
        <hr className={styles.line} />

        <Row className={styles.row}>
          <Col md={{ span: 4, offset: 1 }}>
            <div className={styles.desc1}>
              <h1>방해받지 말고 불러보세요</h1>
            </div>
            <div className={styles.desc2}>
              <h3>비밀번호를 설정하면 비공개방을 생성할 수 있습니다</h3>
            </div>
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <img src={gif2} alt="" className={styles.introPic} />
          </Col>
        </Row>
        <hr className={styles.line} />

        <Row className={styles.row}>
          <Col md={{ span: 5, offset: 1 }}>
            <img src={gif3} alt="" className={styles.introPic} />
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <div className={styles.desc1}>
              <h1>TJ 노래방과의 제휴</h1>
            </div>
            <div className={styles.desc2}>
              <h3>
                TJ 노래방 전곡을 제공합니다. 다양한 노래를 마음껏 즐기세요!{" "}
              </h3>
            </div>
          </Col>
        </Row>
        <hr className={styles.line} />

        <Row className={styles.row}>
          <Col md={{ span: 4, offset: 1 }}>
            <div className={styles.desc1}>
              <h1>다양한 모드 제공</h1>
            </div>
            <div className={styles.desc2}>
              <h3>
                기본모드 외에 자유모드, 솔로모드, 듀엣모드 등 다양한 UI를
                제공합니다. 버튼을 눌러 노래 부르는사람에게 조명효과를 줄 수
                있습니다.
              </h3>
            </div>
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <img src={gif4} alt="" className={styles.introPic} />
          </Col>
        </Row>
        <hr className={styles.line} />

        <Row className={styles.row}>
          <Col md={{ span: 5, offset: 1 }}>
            <img src={gif5} alt="" className={styles.introPic} />
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <div className={styles.desc1}>
              <h1>듀엣곡도 나혼자 자유롭게!</h1>
            </div>
            <div className={styles.desc2}>
              <h3>
                듀엣곡 부르고 싶은데 같이부를 사람이 없을 때! 연예인과 함께
                듀엣곡을 불러보세요. 연예인과 대화하는 느낌도 가질 수 있어요!
              </h3>
            </div>
          </Col>
        </Row>
        {/* <hr className={styles.line} /> */}
      </Container>
      <TeamProfile />
      <footer className={styles.footer}>
        <p>Copyright © 2022 SSARAOKE. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
