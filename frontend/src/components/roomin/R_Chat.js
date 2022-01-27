import styles from "./Room.module.css";


function RoomChat ({mode}){
        
    return (
        <div className={styles.rgb}>
            <input id={mode} type="text" placeholder="Chat"></input>
        </div>
    )

}


export default RoomChat