import styles from "./Room.module.css";


function Screen ({mode}){
        
    return (
        <div>
            <video id={mode} controls>
                <source src='?'></source>
            </video>
        </div>
    )

}


export default Screen