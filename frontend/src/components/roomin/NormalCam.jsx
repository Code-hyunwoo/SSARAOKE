import styles from "./Room.module.css";



function NormalCam ({mode, sendMessage}){
    return (
        <div id={mode}>
            <div id="participants">
            </div>
        </div>
    )
}


export default NormalCam