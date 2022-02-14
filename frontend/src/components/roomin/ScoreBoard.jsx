import React from "react";
import styles from "./Button.module.css";
import { useState, useEffect } from "react";

function ScoreBoard({setstartScoreBoard}) {

    const [ scoreNumber, setscoreNumber ] = useState('')
    const [ scoreMent, setscoreMent ] = useState('')
    const [ scoreColor, setscoreColor ] = useState('')

    useEffect(() => {
            setscoreNumber(Math.floor(Math.random()*41) + 60)
            
            if (60<= scoreNumber & scoreNumber < 70){
                setscoreMent('당신은 사랑받기위해 태어난 사람~ 화이팅!')
                setscoreColor(styles.Score60)
            } else if (70<= scoreNumber & scoreNumber < 80){
                setscoreMent('Wow! 노래에 소질이 있으시군요! ㅋ')
                setscoreColor(styles.Score70)
            } else if (80<= scoreNumber & scoreNumber < 90){
                setscoreMent('음정.. 박자.. 리듬감.. 와.. 대.다.나.다')
                setscoreColor(styles.Score80)
            } else if (90<= scoreNumber & scoreNumber < 100){
                setscoreMent('이렇게 잘 부를수가.. 매력이 넘쳐요. 만점에 도전하세요!')
                setscoreColor(styles.Score90)
            } else if (scoreNumber === 100){
                setscoreMent('말도 안돼.. 천상의 목소리!! 완벽해요!!!!!')
                setscoreColor(styles.Score100)
            }                  
      },[scoreNumber])   

    

  return (
    <div className={styles.ScoreBoard}>
        <div className={styles.Score0}>
          <span>Score</span>
        </div>
      <div className={scoreColor}>
          <span>{scoreNumber}</span>
      </div>
      <div className={styles.Score2}>
          <span>{scoreMent}</span>
      </div>
    </div>
  );
}

export default ScoreBoard;
