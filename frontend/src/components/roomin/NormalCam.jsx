import styles from "./Room.module.css";



function NormalCam ({mode, sendMessage}){
    return (
        <div id={mode}>
            <div id="participants">
                {/* <video id={mode} controls>
                    <source src='?'></source>
                </video> */}
            </div>
        </div>
    )
}


export default NormalCam