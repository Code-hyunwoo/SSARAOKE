import styles from "./Room.module.css";
import ReactPlayer from "react-player";
import ScoreSound from "./audio/Score.mp3";

function Screen({ mode, now, setstartScoreBoard, getNowplaying }) {
  const sendNowplaying = (bool) => {
    getNowplaying(bool);
  };

  function endMusic() {
    // alert(`곡 종료`)
    // nextMusic()
    sendNowplaying(false);
  }

  const audio = new Audio(ScoreSound);
  function Score() {
    audio.volume = 0.2;
    audio.play();
  }

  function closeScoreBoard() {
    setTimeout(function () {
      setstartScoreBoard(false);
    }, 9000);
  }

  return (
    <div>
      <ReactPlayer
        id={mode}
        url={now}
        playing={true}
        muted={false}
        controls={true}
        onEnded={() => {
          endMusic();
          setstartScoreBoard(true);
          Score();
          closeScoreBoard();
        }}
      />
    </div>
  );
}

export default Screen;
