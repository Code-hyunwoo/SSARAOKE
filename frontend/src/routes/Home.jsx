import { Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/login-background.png";
import img2 from "../assets/login-background2.png";
import img3 from "../assets/login-background3.png";
import img4 from "../assets/login-background4.png";
import img5 from "../assets/login-background5.png";
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
      <Container fluid className="px-5">
        <hr className={styles.line} />
        <Row className="mx-5" data-aos="fade-right">
          <Col md={{ span: 4, offset: 1 }}>
            <img src={img1} alt="" className={styles.introPic} />
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <div className={styles.desc}>
              (싸라오케 이런것도 됩니다1) Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc dignissim in mauris in feugiat.
            </div>
          </Col>
        </Row>
        <hr className={styles.line} />

        <Row className="mx-5" data-aos="fade-left">
          <Col md={{ span: 4, offset: 1 }}>
            <div className={styles.desc}>
              (싸라오케 이런것도 됩니다2) Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc dignissim in mauris in feugiat.
            </div>
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <img src={img2} alt="" className={styles.introPic} />
          </Col>
        </Row>
        <hr className={styles.line} />

        <Row className="mx-5" data-aos="fade-right">
          <Col md={{ span: 4, offset: 1 }}>
            <img src={img3} alt="" className={styles.introPic} />
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <div className={styles.desc}>
              (싸라오케 이런것도 됩니다3) Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc dignissim in mauris in feugiat.
            </div>
          </Col>
        </Row>
        <hr className={styles.line} />

        <Row className="mx-5" data-aos="fade-left">
          <Col md={{ span: 4, offset: 1 }}>
            <div className={styles.desc}>
              (싸라오케 이런것도 됩니다4) Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc dignissim in mauris in feugiat.
            </div>
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <img src={img4} alt="" className={styles.introPic} />
          </Col>
        </Row>
        <hr className={styles.line} />

        <Row className="mx-5" data-aos="fade-right">
          <Col md={{ span: 4, offset: 1 }}>
            <img src={img5} alt="" className={styles.introPic} />
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <div className={styles.desc}>
              (싸라오케 이런것도 됩니다5) Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc dignissim in mauris in feugiat.
            </div>
          </Col>
        </Row>
        <hr className={styles.line} />
      </Container>
      <TeamProfile />
      <footer className={styles.footer}>
        <p>Copyright © 2022 SSARAOKE. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
