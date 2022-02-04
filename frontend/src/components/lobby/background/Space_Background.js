// import Space from "./Space_Background.module.css";
// import JQ from "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";
import Ufo from "./UFO.module.css";

function SpaceBackground() {

    return(
        <div>
            {/* <div mode={Space.valentinintro}>
                <section className={Space.vsection, Space.introsection}> */}
                    {/* <div class="container">
                        <header>
                            <h1 class="galaxy-title">Welcome to Cosmos</h1>
                            <div id="earth"></div>
                        </header>
                    </div> */}
                
                {/* </section>  
	        </div>  */}

            {/* UFO */}
            <div className={Ufo.loader__wrapper}>
                {/* <div class='loader__text'>LOADING</div> */}
                <div className={Ufo.loader__background}></div>
                {/* <div className={Ufo.ufo__wrapper}>
                    <div className={Ufo.ufo__cockpit}></div>
                    <div className={Ufo.ufo__body}>
                        <div className={Ufo.ufo__rivet}></div>
                        <div className={Ufo.ufo__rivet}></div>
                        <div className={Ufo.ufo__rivet}></div>
                        <div className={Ufo.ufo__rivet}></div>
                    </div>
                    <div className={Ufo.ufo__trailswrapper}>
                        <div className={Ufo.ufo__trail}></div>
                        <div className={Ufo.ufo__trail}></div>
                        <div className={Ufo.ufo__trail}></div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default SpaceBackground;