import styles from "./Team.module.css";
import red from "./images/red.png";
import doggy from "./images/doggy.png";
import green from "./images/green.png";
import pink from "./images/pink.png";
import purple from "./images/purple.png";
import blue from "./images/blue.png";

function TeamProfile() {
  return (
    <div>
      <p className={styles.teamHeader}>About Us</p>
      <div className={styles.wrapper}>
        <ul className={styles.team}>
          <li className={styles.team_item}>
            <div className={`${styles.profile} ${styles.profile_red}`}>
              <img src={red} />
              <div className={styles.profile_contents}>
                <h2>
                  정구아 <span>Leader, Back-end</span>
                </h2>
                <p>
                  가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
                </p>
              </div>
            </div>
          </li>
          <li className={styles.team_item}>
            <div className={`${styles.profile} ${styles.profile_beige}`}>
              <img src={doggy} />
              <div className={styles.profile_contents}>
                <h2>
                  배지환 <span>Back-end</span>
                </h2>
                <p>
                  가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
                </p>
              </div>
            </div>
          </li>
          <li className={styles.team_item}>
            <div className={`${styles.profile} ${styles.profile_pink}`}>
              <img src={green} />
              <div className={styles.profile_contents}>
                <h2>
                  유혜승 <span>Back-end</span>
                </h2>
                <p>
                  가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
                </p>
              </div>
            </div>
          </li>
          <li className={styles.team_item}>
            <div className={`${styles.profile} ${styles.profile_green}`}>
              <img src={pink} />
              <div className={styles.profile_contents}>
                <h2>
                  서승원 <span>Front-end</span>
                </h2>
                <p>
                  가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
                </p>
              </div>
            </div>
          </li>
          <li className={styles.team_item}>
            <div className={`${styles.profile} ${styles.profile_purple}`}>
              <img src={purple} />
              <div className={styles.profile_contents}>
                <h2>
                  김혜란 <span>Front-end</span>
                </h2>
                <p>
                  가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
                </p>
              </div>
            </div>
          </li>
          <li className={styles.team_item}>
            <div className={`${styles.profile} ${styles.profile_blue}`}>
              <img src={blue} />
              <div className={styles.profile_contents}>
                <h2>
                  이현우 <span>Front-end</span>
                </h2>
                <p>
                  가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
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
