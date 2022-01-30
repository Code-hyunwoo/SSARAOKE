import styles from "./Room.module.css";
import ReactPlayer from "react-player";


function Screen ({mode}){
        
    return (
        <div>
            <ReactPlayer 
            id={mode} 
            url={['https://www.youtube.com/watch?v=4gXmClk8rKI', 'https://www.youtube.com/watch?v=t8KtQ8-nImI' ]}
            playing={true}
            muted={true}
            controls={true}/>
        </div>
    )

}


export default Screen