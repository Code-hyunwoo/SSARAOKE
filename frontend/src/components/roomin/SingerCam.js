import styles from "./Room.module.css";


function SingerCam ({mode}){
        
    return (
        <span>
            <video id={mode} controls>
                <source src='?'></source>
            </video>
        </span>
    )

}


export default SingerCam