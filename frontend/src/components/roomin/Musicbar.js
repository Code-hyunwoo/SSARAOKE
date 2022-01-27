import styles from "./Room.module.css";


function Musicbar (){
        
    return (
        <div>
            <input 
            value=" [Now Playing - 오마이걸-던던]     NEXT: aespa - Next Level" 
            className={styles.rgb}  
            id={styles.Musicbar}></input>
        </div>
    )

}


export default Musicbar