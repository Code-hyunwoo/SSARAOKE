import styles from "./Team.module.css";
import red from "./images/정구아.jpg";
import doggy from "./images/배지환.jpg";
import green from "./images/유혜승.png";
import pink from "./images/서승원.jpg";
import purple from "./images/김혜란.jpg";
import blue from "./images/이현우.png";

function TeamProfile() {
  return (
    <div>
      <p className={styles.teamHeader}>About Us</p>
      <hr className={styles.line} />
      <div className={styles.wrapper}>
        <ul className={styles.team}>
          <li className={styles.team_item}>
            <div className={`${styles.profile} ${styles.profile_red}`}>
              <img src={red} alt="" />
              <div className={styles.profile_contents}>
                <h2>
                  정구아 <span>Leader, Back-end</span>
                </h2>
                <p>
                  술 한잔 마셨습니다... 싸라오케 잘 안되면 슬픕니다. 밤낮으로
                  고민하고 개발했습니다 다들 7주 동안 너무 고생 많으셨고 플젝은
                  끝났지만 우리는
                </p>
              </div>
            </div>
          </li>
          <li className={styles.team_item}>
            <div className={`${styles.profile} ${styles.profile_beige}`}>
              <img src={doggy} alt="" />
              <div className={styles.profile_contents}>
                <h2>
                  배지환 <span>Back-end</span>
                </h2>
                <p>
                  공통 프로젝트를 팀원분들과 함께 진행하면서 정말 많은 것을
                  배웠습니다. 앞으로도 잘 부탁드립니다.
                </p>
              </div>
            </div>
          </li>
          <li className={styles.team_item}>
            <div className={`${styles.profile} ${styles.profile_pink}`}>
              <img src={green} alt="" />
              <div className={styles.profile_contents}>
                <h2>
                  유혜승 <span>Back-end</span>
                </h2>
                <p>
                  우여곡절이 많았지만 많은 것을 배울 수 있었던 프로젝트였습니다
                  :&#41; 같이 했던 팀원분들 전부 다 잊지 못할거에요ㅠㅠㅠ
                </p>
              </div>
            </div>
          </li>
          <li className={styles.team_item}>
            <div className={`${styles.profile} ${styles.profile_green}`}>
              <img src={pink} alt="" />
              <div className={styles.profile_contents}>
                <h2>
                  서승원 <span>Front-end</span>
                </h2>
                <p>
                  몸과 영혼을 모두 갈아넣은 SSARAOKE. 6팀과 함께라서 재밌게 할
                  수 있었어요 :&#41; 남은기간도 모두 화이팅!!
                </p>
              </div>
            </div>
          </li>
          <li className={styles.team_item}>
            <div className={`${styles.profile} ${styles.profile_purple}`}>
              <img src={purple} alt="" />
              <div className={styles.profile_contents}>
                <h2>
                  김혜란 <span>Front-end</span>
                </h2>
                <p>
                  프로젝트 내내 팀원들과 함께여서 너무 즐거웠습니다!! 싸라오케
                  정말 열심히 했는데, 그만큼 좋은 결과물이 나와서 행복해요!!
                </p>
              </div>
            </div>
          </li>
          <li className={styles.team_item}>
            <div className={`${styles.profile} ${styles.profile_blue}`}>
              <img src={blue} alt="" />
              <div className={styles.profile_contents}>
                <h2>
                  이현우 <span>Front-end</span>
                </h2>
                <p>
                  정말 재밌고 즐거운 프로젝트 경험이었습니다. 열심히 한 만큼,
                  많은 것을 배울 수 있었고 작업에 몰입할 수 있어서 행복했습니다.
                  SSARAOKE, 가자!
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamProfile;
