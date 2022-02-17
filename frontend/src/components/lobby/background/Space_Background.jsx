
import Ufo from "./UFO.module.css";

function SpaceBackground() {

    return(
        <div>
            {/* UFO */}
            <div className={Ufo.loader__wrapper}>
                <div className={Ufo.loader__background}></div>
            </div>
        </div>
    )
}

export default SpaceBackground;